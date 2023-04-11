import { Product } from "./product";

export class Shirt extends Product{
    price: number;
    stock: number;
    color: string;
    description: string;
    size: string;
    type: number | null;
}
