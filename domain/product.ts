export type ProductEvent =
  | {
      type: "StockReduced";
      productId: string;
      stock: number;
    };

type Observer = (event: ProductEvent) => void;

export class Product {
  private observers: Observer[] = [];

  constructor(public id: string, public stock: number) {}


  subscribe(callback: Observer): void {
    this.observers.push(callback);
  }

  private notify(event: ProductEvent): void {
    this.observers.forEach((cb) => cb(event));
  }


  reduceStock(quantity: number): void {

    if (quantity > this.stock) {
      throw new Error("Stock cannot go below zero");
    }

    this.stock -= quantity;

    this.notify({
      type: "StockReduced",
      productId: this.id,
      stock: this.stock,
    });
  }
}