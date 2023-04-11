import { Product } from "./product";

export class Pants extends Product{
    beltloops: boolean;
    color: string;
    description: string;
    fit: string;
    pockets: boolean;
    price: number;
    size: string;
    stock: number;
    type: number | null;
    zipper: boolean;
}
