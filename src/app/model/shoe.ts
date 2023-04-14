import { Product } from "./product";

export class Shoe extends Product{
    color: string;
    description: string;
    fit: string;
    size: string;
    stock: number;
    type: number | null;
}
