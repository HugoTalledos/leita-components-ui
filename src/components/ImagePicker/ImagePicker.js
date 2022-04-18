import React, { useEffect, useState } from 'react';
import { Buffer } from 'buffer';
import PropTypes from 'prop-types';
import { events } from '../../Utils/constants';
import DefaultIMG from '../../res/icons/face.svg';
import { ReactComponent as CloseSVG } from '../../res/icons/close.svg';
import './ImagePicker.css';

const ImagePicker = ({
  imageList = [],
  onChange,
  multiple,
  maxSize = 5,
  maxSizeMB = 5000000,
}) => {
  const [image, setImage] = useState('');
  const [imageListThumbs, setImageListThumbs] = useState([]);
  const [bufferList, setBufferList] = useState([]);
  const [imageKey, setImageKey] = useState(0);
  const [isActive, setIsActive] = useState([]);
  const {
    EXCEEDED_LIMIT, ONCHANGE,
    REMOVE, SINGLE_ERROR, UNEXPECTED_ERROR,
  } = events;

  const validateMaxLengthImage = (images) => (images.length > maxSize);
  const validateImage = (file) => {
    let error;
    if (!file.type.includes('image')) error = 'El archivo seleccionado no es una imagen';
    if (file.size > maxSizeMB) error = 'Imagen demaciado grande (maximo 1MB)';
  
    return { error };
  };

  const readURL = async (file) => new Promise(
    (resolve, reject) => {
      const readerURL = new FileReader();
      readerURL.onload = () => {
        resolve(readerURL.result);
      };
      readerURL.onerror = reject;
      readerURL.readAsDataURL(file);
    },
  );
  
  const readBuffer = async (file) => new Promise(
    (resolve, reject) => {
      const readerBuffer = new FileReader();
      readerBuffer.onload = () => {
        resolve(readerBuffer.result);
      };
      readerBuffer.onerror = reject;
      readerBuffer.readAsArrayBuffer(file);
    },
  );
  
  const readFileAsync = async (file) => {
    const url = await readURL(file);
    const buffer = await readBuffer(file);
    const uint8View = new Uint8Array(buffer);
    return [Buffer.from(uint8View), url];
  };


  useEffect(() => {
    setImage(imageList.length > 0 && imageList[0]);
    setImageListThumbs(multiple ? [...imageList] : []);
    setBufferList(multiple ? [...bufferList] : []);
    if (isActive.length !== 0) setIsActive([]);
    // eslint-disable-next-line
  }, [imageList]);


  const switchImage = (img, key) => {
    setImage(img);
    setImageKey(key);
    const newArray = isActive.map(() => false);
    newArray[key] = !newArray[key];
    setIsActive(newArray);
  };

  const loadThumbnail = async (e) => {
    const { files } = e.target;
    const errors = [];
    const promises = [];
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

    const [bufferArray, imageArray] = await Promise.all(promises)
      .then((resp) => {
        const bufferArray = resp.map(([buffer]) => buffer);
        const imageArray = resp.map(([, image]) => image);
        return [bufferArray, imageArray];
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

  const removeImage = (key) => {
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
      setImage(DefaultIMG);
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
    <div className="card">
      <div className="images_content">
        <div className="slides">
          {
            (multiple && imageListThumbs.length !== 0)
            && <CloseSVG onClick={() => removeImage(imageKey)} className="remove_slide" />
          }
          <img src={image || DefaultIMG} alt="Main" />
        </div>
        {
          multiple
          && (
            <div className="slides_thumbnail">
              {
                (imageListThumbs.length !== 0)
                && (imageListThumbs || []).map((image, key) => (
                  <div
                    className={`thumb_slide ${isActive[key] && 'selected'}`}
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
      <div className="file-select" id="src-file1">
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

ImagePicker.propTypes = {
  imageList: PropTypes.array,
  onChange: PropTypes.func,
  multiple: PropTypes.bool,
  maxSize: PropTypes.number,
  maxSizeMB: PropTypes.number,
};

export default ImagePicker;
