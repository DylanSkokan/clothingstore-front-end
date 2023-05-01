import { Product } from './product';

export class Hat extends Product {
    constructor() {
        super();
        this.prodType = 'hat';
    }

    color: string;
    fit: string;
    size: string;
    stock: number;
    type: string | null;
}
