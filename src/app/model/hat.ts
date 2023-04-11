import { Product } from "./product";

export class Hat extends Product{
    color: string;
    description: string;
    fit: string;
    price: number;
    size: string;
    stock: number;
    type: string | null;
}
