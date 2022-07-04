export interface ImagePickerProps {
  imageList?: Array<string>,
  onChange?: (args: onChangeProps) => void,
  multiple?: boolean,
  maxSize?: number,
  maxSizeMB?: number,
}


interface onChangeProps {
  errors?: Array<string>,
  isExceeded?: boolean,
  event?: string,
  bufferList?: Array<Buffer>,
  imageList?: Array<string>,
}

export interface Image {
  buffer: Buffer,
  url: string | ArrayBuffer | null,
}

export interface ImageArray {
  bufferArray?: Buffer[],
  imageArray?: Array<string | ArrayBuffer | null>
}