export interface IProduct {
    id: number|string;
    name: string;
    type: number| string;
    color: string;
    brand: string;
    size: string;
    image: string;
    description: string;
    postby: string;
    price: string;
    postdate: string;
}
export interface IUpdateProduct{
  id: number;
  name: string;
  type: number| string;
  color: string;
  brand: string;
  size: string;
  image: string;
  description: string;
  postby: string;
  price: string;
  postdate: string;

}
