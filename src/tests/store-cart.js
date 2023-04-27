import { Cart } from '../store/cart';

let cartStore = new Cart();
console.log(cartStore.total);
cartStore.remove(100);
console.log(cartStore.total);
cartStore.change(101, 15);
console.log(cartStore.total);
