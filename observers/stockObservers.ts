import type { ProductEvent } from "../domain/product.js";

export function lowStockObserver(event: ProductEvent) {
  if (event.type === "StockReduced" && event.stock < 5 && event.stock > 0) {
    console.log(`⚠️ Product ${event.productId} is low on stock (${event.stock})`);
  }
}

export function outOfStockObserver(event: ProductEvent) {
  if (event.type === "StockReduced" && event.stock === 0) {
    console.log(`❌ Product ${event.productId} is out of stock`);
  }
}