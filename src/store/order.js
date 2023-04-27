import { makeAutoObservable } from 'mobx';

export default class Order {
    fields = formField();

    get data() {
        let data = {};
        this.fields.forEach((field) => {
            data[field.name] = field.value;
        });
        return data;
    }

    get formValid() {
        return this.fields.every((f) => f.valid);
    }

    fieldUpdate = (name, value) => {
        let field = this.fields.find((field) => field.name == name);

        if (field !== undefined) {
            field.value = value.trim();
            field.valid = field.pattern.test(value);
        }
    };

    send = () => {
        //let form = {....data,
        //cart: this.rootStore.cart.products}
    };

    constructor(rootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }
}

function formField() {
    return [
        {
            name: 'email',
            label: 'Email',
            value: '',
            valid: false,
            pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
        },
        {
            name: 'phone',
            label: 'Phone',
            value: '',
            valid: false,
            pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
        },
        {
            name: 'name',
            label: 'Name',
            value: '',
            valid: false,
            pattern: /^.{2,}$/,
        },
    ];
}
