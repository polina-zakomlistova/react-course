import { makeAutoObservable } from 'mobx';

export default class Cart {
    products = productsStub();

    change = (id, cnt) => {
        let product = this.products.find((pr) => pr.id == id);
        if (product !== undefined) {
            product.cnt = Math.max(1, Math.min(product.rest, cnt));
        }
    };

    remove = (id) => {
        this.products = this.products.filter((pr) => pr.id !== id);
    };

    get total() {
        return this.products.reduce(
            (accumulator, current) => accumulator + current.price * current.cnt,
            0
        );
    }

    constructor(rootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    //раньше было import { observable, computed, action } from 'mobx';
    // constructor() {
    //     this.products = observable(this.products);
    //     this.total = computed(this.total);
    //     this.remove = action(this.remove);
    //     this.change = action(this.change);
    // }
}

function productsStub() {
    return [
        {
            id: 100,
            title: 'Ipnone 200',
            price: 12000,
            rest: 5000,
            cnt: 10,
        },
        {
            id: 101,
            title: 'Samsung AAZ8',
            price: 22000,
            rest: 5,
            cnt: 1,
        },
        {
            id: 103,
            title: 'Nokia 3310',
            price: 5000,
            rest: 2,
            cnt: 1,
        },
        {
            id: 105,
            title: 'Huawei ZZ',
            price: 15000,
            rest: 8,
            cnt: 1,
        },
    ];
}
