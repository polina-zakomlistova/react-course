import { makeAutoObservable } from 'mobx';

export default class Cart {
    items = [
        { id: 100, cnt: 3 },
        { id: 101, cnt: 1 },
    ];

    get inCart() {
        return (id) => this.items.some((item) => item.id == id);
    }

    change = (id, cnt) => {
        let item = this.items.find((pr) => pr.id == id);
        let details = this.itemsDetailed.find((pr) => pr.id == id);
        if (item !== undefined) {
            item.cnt = Math.max(1, Math.min(details.rest, cnt));
        }
    };

    add = (id) => {
        if (!this.inCart(id)) {
            this.items.push({ id: id, cnt: 1 });
        } else {
            let item = this.items.find((item) => item.id == id);
            this.change(id, item.cnt + 1);
        }
    };

    remove = (id) => {
        this.items = this.items.filter((pr) => pr.id !== id);
    };

    get total() {
        return this.itemsDetailed.reduce((accumulator, current) => {
            return accumulator + current.price * current.cnt;
        }, 0);
    }

    get itemsDetailed() {
        return this.items.map((item) => {
            let currenPr = this.rootStore.products.getById(item.id);
            return { ...currenPr, ...item };
        });
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
