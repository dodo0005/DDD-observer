import { v4 as uuidv4 } from "uuid"

/*
 **
 ** avoid any "weird" number as input
 */

/* 1.  factory function  */
/*  a factory function creates a new object  */

/* 2.  constructor function  */
// OOP
// a constructor function creates a new object and sets its properties

// create a primitive obsessed type

// modify this code for testing !!
// this replicates user input
// const orderOne = {
// 	id: uuidv4(), // generate a unique id for the order
// 	name: "order one",
// 	price: -100,
// 	quantity: 200000000,
// 	total: 456465465465465400,
// }

// console.log(orderOne)


import { Product } from "./domain/product.js";
import { lowStockObserver, outOfStockObserver } from "./observers/stockObservers.js";

const product = new Product("p1", 10);

product.subscribe(lowStockObserver);
product.subscribe(outOfStockObserver);

console.log("--- Running DDD Example ---");

product.reduceStock(6);
product.reduceStock(4);