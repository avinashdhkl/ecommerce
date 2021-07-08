import { IProduct } from '../../../interface/IProduct';
export class productModel implements IProduct {
  id!: number|string;
  name!: string;
  color!: string;
  brand!: string;
  size!: string;
  image!: string;
  discription!: string;
  postby!: string;
  price!: string;
  postdate!: string;
  type!: number| string;

}
