import Cart from './cart';
import Order from './order';
import Products from './products';

export default class RootStore {
    constructor() {
        this.localStorage = window.localStorage;
        this.cart = new Cart(this);
        this.order = new Order(this);
        this.products = new Products(this);
    }
}
