function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}

Phone.prototype.printinfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver");

var sGalaxyS6 = new Phone("Samsung", 2000, "black");

var onePlusOne = new Phone("One", 3000, "white");

onePlusOne.printinfo();

sGalaxyS6.printinfo();

iPhone6S.printinfo();