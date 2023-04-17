import { Product } from "./product";

export class Pants extends Product{
    constructor() {
        super();
        this.prodType = 'pants';
    }

    beltloops: boolean;
    color: string;
    fit: string;
    pockets: boolean;
    size: string;
    stock: number;
    type: number | null;
    zipper: boolean;
}
