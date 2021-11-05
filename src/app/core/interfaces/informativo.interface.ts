import { FileUpload } from './file-upload.interface';
import { BaseImplements } from './base.interface';

export interface Informativo extends BaseImplements {

  titulo: string;
  subTitulo: string;
  corpoMensagem: string;
  tipo: 'dica' | 'noticia';
  textoCurto: string;
  destacar: boolean;
  status: boolean;
  uploadFile: FileUpload[];

}

