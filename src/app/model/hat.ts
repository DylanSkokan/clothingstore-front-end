import { Product } from "./product";

export class Hat extends Product{
    color: string;
    fit: string;
    size: string;
    stock: number;
    type: string | null;
}
