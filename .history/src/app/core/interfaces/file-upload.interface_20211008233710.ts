export interface FileUploadInt {
  id: number;
  name: string;
  fileUrl: string;
  pathUrl: string;
  ordem: number;
  height: string;
  width: string;
  dateCreated: Date;
  dateModified: Date;
  remove: boolean;
  // file: File;
}
