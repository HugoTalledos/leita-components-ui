import React from  'react';
import styles from '../components/Fields/Fields.module.css';
import styleTooltip from '../components/Tooltip/Tooltip.module.css';

export const moveLabel = (ref: React.RefObject<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> ,
    value:string, disabled:boolean): void => {
  const node = ref.current;
  if(!node) return;
    if(!node.previousElementSibling) return;
    if (disabled) node.previousElementSibling.classList.add(styles.top);
    if (value) node.previousElementSibling.classList.add(styles.top);

    node.onfocus = () => {
      if(!node) return;
      if(!node.previousElementSibling) return;
      node.previousElementSibling.classList.add(styles.top);
      node.previousElementSibling.classList.add(styles.focus);
      node.classList.add(styles.focus);
    };

    node.onblur = () => {
      if(!node) return;
      if(!node.previousElementSibling) return;
      if (node.value.trim().length === 0) {
        node.previousElementSibling.classList.remove(styles.top);
      }
      node.previousElementSibling.classList.remove(styles.focus);
      node.classList.remove(styles.focus);
    };
}

export const getAlignTooltip = (ref: React.RefObject<HTMLDivElement>, align: string): string => {
  if (align !== 'auto') return align;

  const node = ref.current;
  if (!node) return 'top';
  if (!node.previousElementSibling) return 'top';

  const { bottom, right, top, width } = node.previousElementSibling.getBoundingClientRect();

  if ((window.innerWidth - right) <= width) return 'left';
  if (top < (window.innerHeight - bottom)) return 'bottom';

  return 'top';
};

export const showTooltip = (ref: React.RefObject<HTMLDivElement>, align: string): void => {
  const node = ref.current;
  if(!node) return;
  if(!node.previousElementSibling) return;

  node.previousElementSibling.classList.remove(styleTooltip.top);
  node.previousElementSibling.classList.remove(styleTooltip.right);
  node.previousElementSibling.classList.remove(styleTooltip.bottom);
  node.previousElementSibling.classList.remove(styleTooltip.left);

  node.previousElementSibling.classList.add(styleTooltip[getAlignTooltip(ref, align)]);
  node.previousElementSibling.classList.add(styleTooltip.visible);
};

export const hiddenTooltip = (ref: React.RefObject<HTMLDivElement>): void => {
  const node = ref.current;
  if(!node) return;
  if(!node.previousElementSibling) return;

  node.previousElementSibling.classList.remove(styleTooltip.visible);
};

export const readURL = async (file: File) => new Promise<string | ArrayBuffer | null>(
  (resolve, reject) => {
    const readerURL = new FileReader();
    readerURL.onload = () => {
      resolve(readerURL.result);
    };
    readerURL.onerror = reject;
    readerURL.readAsDataURL(file);
  },
);

export const readBuffer = async (file: File) => new Promise(
  (resolve, reject) => {
    const readerBuffer = new FileReader();
    readerBuffer.onload = () => {
      resolve(readerBuffer.result);
    };
    readerBuffer.onerror = reject;
    readerBuffer.readAsArrayBuffer(file);
  },
);

export const validateMaxLengthImage = (images: Array<any>, maxSize: number) => (images.length > maxSize);
export const validateImage = (file: File, maxSizeMB: number ) => {
  let error;
  if (!file.type.includes('image')) error = 'El archivo seleccionado no es una imagen';
  if (file.size > maxSizeMB) error = `Imagen demasiado grande (máximo ${maxSizeMB / 1000000}MB)`;
  return { error };
};

export const reorder = (array:Array<any>, startIndex: number, endIndex: number) => {
  const result = Array.from(array);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};