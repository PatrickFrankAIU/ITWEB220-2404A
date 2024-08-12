let item1Price = +prompt("Please enter the price of item 1", "enter item 1 price");
let item2Price = +prompt("Please enter the price of item 2", "enter item 2 price");
let item3Price = +prompt("Please enter the price of item 3", "enter item 3 price");
let item1Qty = +prompt("Please enter the quantity of item 1", "enter item 1 qty");
let item2Qty = +prompt("Please enter the quantity of item 2", "enter item 2 qty");
let item3Qty = +prompt("Please enter the quantity of item 3", "enter item 3 qty");

let item1Total = (item1Price * item1Qty);
let item2Total = (item2Price * item2Qty);
let item3Total = (item3Price * item3Qty);
let grandtotal= (item1Total + item2Total + item3Total)
console.log("The total cost is: $" + grandtotal);