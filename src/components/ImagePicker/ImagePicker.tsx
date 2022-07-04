import React, { useEffect, useState, FC, ChangeEvent } from 'react';
import { Buffer } from 'buffer';
import MDIcon from '../MDIcon/MDIcon';
import { ImagePickerProps, Image } from './ImagePicker.types';
import { events } from '../../Utils/constants';
import styles from './ImagePicker.module.css';

const ImagePicker: FC<ImagePickerProps> = ({
  imageList = [],
  onChange = () => ({}),
  multiple,
  maxSize = 5,
  maxSizeMB = 5000000
}) => {
  const [image, setImage] = useState<string>('');
  const [imageListThumbs, setImageListThumbs] = useState<Array<string>>([]);
  const [bufferList, setBufferList] = useState<Array<Buffer>>([]);
  const [imageKey, setImageKey] = useState<number>(0);
  const [isActive, setIsActive] = useState<Array<boolean>>([]);
  const {
    EXCEEDED_LIMIT, ONCHANGE,
    REMOVE, SINGLE_ERROR, UNEXPECTED_ERROR,
  } = events;

  const validateMaxLengthImage = (images: Array<any>) => (images.length > maxSize);
  const validateImage = (file: File) => {
    let error;
    if (!file.type.includes('image')) error = 'El archivo seleccionado no es una imagen';
    if (file.size > maxSizeMB) error = 'Imagen demaciado grande (maximo 1MB)';
    return { error };
  };

  const readURL = async (file: File) => new Promise<string | ArrayBuffer | null>(
    (resolve, reject) => {
      const readerURL = new FileReader();
      readerURL.onload = () => {
        resolve(readerURL.result);
      };
      readerURL.onerror = reject;
      readerURL.readAsDataURL(file);
    },
  );

  const readBuffer = async (file: File) => new Promise(
    (resolve, reject) => {
      const readerBuffer = new FileReader();
      readerBuffer.onload = () => {
        resolve(readerBuffer.result);
      };
      readerBuffer.onerror = reject;
      readerBuffer.readAsArrayBuffer(file);
    },
  );

  const readFileAsync = async (file: File) => {
    const url = await readURL(file);
    const buffer = await readBuffer(file) as ArrayBufferLike;
    const uint8View = new Uint8Array(buffer);
    const image: Image = { buffer: Buffer.from(uint8View), url }
    return image;
  };

  useEffect(() => {
    setImage(imageList.length > 0 ? imageList[0] : '');
    setImageListThumbs(multiple ? [...imageList] : []);
    setBufferList(multiple ? [...bufferList] : []);
    if (isActive.length !== 0) setIsActive([]);
    // eslint-disable-next-line
  }, [imageList]);

  const switchImage = (img: string, key: number) => {
    setImage(img);
    setImageKey(key);
    const newArray = isActive.map(() => false);
    newArray[key] = !newArray[key];
    setIsActive(newArray);
  };

  const loadThumbnail = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files = [] } = e.target;
    const errors: Array<string> = [];
    const promises: Array<Promise<Image>> = [];
    if (!files) return;
    let isExceeded = validateMaxLengthImage([...files, ...imageListThumbs]);

    if (isExceeded) return onChange({ errors, isExceeded, event: EXCEEDED_LIMIT });

    for (let i = 0; i < files.length; i += 1) {
      const { error } = validateImage(files[i]);
      if (!error) {
        promises.push(readFileAsync(files[i]));
      } else errors.push(error);
    }

    if (!multiple && errors.length > 0) {
      return onChange({
        errors,
        bufferList,
        imageList: imageListThumbs,
        event: SINGLE_ERROR,
      });
    }

    const { bufferArray, imageArray }: any = await Promise.all(promises)
      .then((resp) => {
        const bufferArray: Array<Buffer> = resp.map(({ buffer }) => buffer);
        const imageArray: Array<string | ArrayBuffer | null> = resp.map(({ url }) => url);
        return { bufferArray, imageArray };
      })
      .catch(() => onChange({ errors, event: UNEXPECTED_ERROR }));

    setImage(imageListThumbs[0]);
    isExceeded = validateMaxLengthImage([...imageListThumbs, ...imageArray]);

    if (isExceeded) {
      onChange({ isExceeded: true, event: EXCEEDED_LIMIT });
    }

    setImageListThumbs([...imageListThumbs, ...imageArray]);
    setBufferList([...bufferList, ...bufferArray]);

    return onChange({
      bufferList: [...bufferList, ...bufferArray],
      imageList: [...imageListThumbs, ...imageArray],
      errors,
      event: ONCHANGE,
    });
  };

  const removeImage = (key: number) => {
    const newImageList = imageListThumbs.filter((_, i) => i !== key);
    const newBufferList = bufferList.filter((_, i) => (
      i !== (key - imageListThumbs.length + bufferList.length)
    ));

    if (newImageList.length > 0) {
      setImageListThumbs(newImageList);
      setBufferList(newBufferList);
      setImage(newImageList[0]);
      setImageKey(0);
    } else {
      setImage('');
      setImageKey(0);
      setImageListThumbs([]);
    }

    return onChange({
      bufferList: newBufferList,
      imageList: newImageList,
      event: REMOVE,
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles['images_content']}>
        <div className={styles.slides}>
          {
            (multiple && imageListThumbs.length !== 0)
            && (<MDIcon
              name="close"
              className={styles['remove_slide']}
              onClick={() => removeImage(imageKey)}
              onKeyDown={() => removeImage(imageKey)}
            />
            )
          }
          { image && <img src={image} alt="Main" /> }
        </div>
        {
          multiple
          && (
            <div className={styles['slides_thumbnail']}>
              {
                (imageListThumbs.length !== 0)
                && (imageListThumbs || []).map((image, key) => (
                  <div
                    key={key}
                    className={`${styles['thumb_slide']} ${isActive[key] && styles.selected}`}
                    onClick={() => switchImage(image, key)}
                    onKeyDown={() => switchImage(image, key)}
                  >
                    <img src={image} alt="thumbnail" />
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
      <div className={styles['file-select']} id="src-file1">
        <input
          type="file"
          name="src-file1"
          aria-label="Archivo"
          multiple={multiple}
          accept="image/*"
          onChange={(e) => loadThumbnail(e)}
        />
      </div>
    </div>);
};

export default ImagePicker;
