class Product {
    constructor(id = 1, name = 'Phone') {
        this.id = id;
        this.name = name;
    }

}
class Order {
    //has-a order can have product
    constructor(id = 1, value = 0, product = new Product()) {
        this.id = id;
        this.value = value;
        //has-a
        this.product = product
    }
}

let order = new Order();
console.log(order)

order = new Order(23, 1000, new Product(35555, 'Building Material'))
console.log(order)
console.log(order.id, order.value, order.product.id, order.product.name)