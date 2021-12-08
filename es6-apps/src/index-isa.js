
//base class
class Account {
    constructor() {
        console.log('Account')
    }
    deposit() {
        return 20;
    }
}
//child
class SavingsAccount extends Account {
    constructor() {
        super();
        console.log('SavingsAccount')
    }
    //method redefining
    deposit() {
        return 30 * super.deposit()
    }
}
let sb = new SavingsAccount();
console.log(sb.deposit())