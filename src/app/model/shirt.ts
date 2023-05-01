import { Product } from './product';

export class Shirt extends Product {
    constructor() {
        super();
        this.prodType = 'shirt';
    }

    stock: number;
    color: string;
    size: string;
    type: number | null;
}
