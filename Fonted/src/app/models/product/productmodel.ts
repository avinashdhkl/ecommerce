import { IProduct } from '../../../interface/IProduct';
import { IUpdateProduct} from '../../../interface/IProduct';
export class productModel implements IProduct {
    id!: number|string;
    name!: string;
    color!: string;
    brand!: string;
    size!: string;
    image!: string;
    description!: string;
    postby!: string;
    price!: string;
    postdate!: string;
    type!: number| string;

}
export class updateProductModel implements IUpdateProduct {
  id!: number;
  name!: string;
  color!: string;
  brand!: string;
  size!: string;
  image!: string;
  description!: string;
  postby!: string;
  price!: string;
  postdate!: string;
  type!: number| string;

}

