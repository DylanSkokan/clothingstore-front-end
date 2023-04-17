import { Product } from "./product";

export class Shoe extends Product{
    constructor() {
        super();
        this.prodType = 'shoes';
    }

    color: string;
    fit: string;
    size: string;
    stock: number;
    type: number | null;
}
