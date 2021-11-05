import { CaracteristicaProduto } from './caracteristica.interface';
import { FileUpload } from './file-upload.interface';

export interface Produto {
  id: number;
  nome: string;
  nomeCurto: string;
  descricao: string;
  listCaracteristicaProduto: CaracteristicaProduto[];
  uploadFile: FileUpload[];
  status: boolean;
}
