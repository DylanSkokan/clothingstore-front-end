import { Product } from "./product";

export class Shoe extends Product{
    color: string;
    fit: string;
    size: string;
    stock: number;
    type: number | null;
}
