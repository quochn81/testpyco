class Bill{
	constructor(name, type, money, moneyonbill) {
        this.name = name;
		this.type = type;
		this.money = money;
		this.moneyonbill = moneyonbill;
    }
	discounts (){
		return 0;
	}
}

class Person{
	constructor(name, type, money, percent) {
        this.name = name;
		this.type = type;
		this.money = money;
		this.percent = percent;
    }
    sayHeelo(){
    	console.log("Hi " + this.name);
    }

	discounts (){
		return 0;
	}
}

class Employee extends Person {
	constructor(name, type, money, percent) {
        super(name, type, money, percent);
    }

    discounts (){
    	return (this.money*this.percent/100);
    }

    countPay (){
    	return (this.money- (this.money*this.percent/100));
    }
}

class DiscountOnBill extends Bill {
	constructor(name, type, money, moneyonbill) {
        super(name, type, money, moneyonbill);
    }

    discounts (){
    	return (Math.floor((this.money/100))*this.moneyonbill);
    }

    countPay (){
    	return (this.money- (Math.floor((this.money/100))*this.moneyonbill));
    }
}

class DiscountPercentBill extends Bill {
	constructor(name, type, money, moneyonbill) {
        super(name, type, money, moneyonbill);
    }

    discounts (){
    	return (this.money*this.moneyonbill/100);
    }

    countPay (){
    	return (this.money- (this.money*this.moneyonbill/100));
    }
}

function display(text, content) {
    console.log("--" + text + ": " + content);
}

// // 1. If the user is an employee of the store, he gets a 30% discount
// parmetter 1 is name Person
// parmetter 1 is type Person
// parmetter 1 is total money on bill Person
// parmetter 1 is percent person will  discounts
const employee = new Employee('An', 'employee', 100, 30);
display("The amount is reduced", employee.discounts());
display("Amount to pay", employee.countPay());

// 2. If the user is an affiliate of the store, he gets a 10% discount
const affiliate = new Employee('Binh', 'affiliate of the store', 100, 10);
display("The amount is reduced", affiliate.discounts());
display("Amount to pay", affiliate.countPay());

// If the user has been a customer for over 2 years, he gets a 5% discount.
const customer = new Employee('Khanh', 'customer for over 2 years', 100, 5);
display("The amount is reduced", customer.discounts());
display("Amount to pay", customer.countPay());

// 4. For every $100 on the bill, there would be a $ 5 discount (e.g. for $ 990, you get $ 45 as a discount).
const bill1 = new DiscountOnBill('Nam', '$ 5 discoun', 990, 5);
display("The amount is reduced", bill1.discounts());
display("Amount to pay", bill1.countPay());

// 5. The percentage based discounts do not apply on groceries.
const bill2 = new DiscountPercentBill('Nhan', '$ 5 discoun', 990, 5);
display("The amount is reduced", bill2.discounts());
display("Amount to pay", bill2.countPay());

// 6. A user can get only one of the percentage based discounts on a bill.
const bill3 = new DiscountPercentBill('Nhan', 'percentage based discounts on a bill', 800, 15);
display("The amount is reduced", bill3.discounts());
display("Amount to pay", bill3.countPay());