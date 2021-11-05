export interface CaracteristicaProduto {

  id: number;
  nome: string;
  descricao: string;
  tipo?: 'elemento' | 'vibracao';
  fontIcon: string;

}
