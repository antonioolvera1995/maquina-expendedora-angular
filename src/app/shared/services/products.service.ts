import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
products:Products[];
  constructor() { this.products = load();}

load(){
 
}

getProducts():Products[]{
  
  return this.products;
}


}



class Product {
  readonly id: number;
  readonly name: string;
  readonly precio: number;
  readonly tipo: string;

  constructor(id: number, name: string, precio: number, tipo: string) {
    this.id = id;
    this.name = name;
    this.precio = precio;
    this.tipo = tipo;
  }
}

class SubProduct extends Product {
  readonly subName: string;
  readonly peso: number;
  public stock: number;

  constructor(
    id: number,
    name: string,
    subName: string,
    precio: number,
    tipo: string,
    peso: number,
    stock: number
  ) {
    super(id, name, precio, tipo);
    this.subName = subName;
    this.peso = peso;
    this.stock = stock;
  }

  public priceCalc(): number {
    let subPrecio: number;
    subPrecio = this.precio * this.peso;
    subPrecio = Math.round(subPrecio * 100);
    subPrecio = subPrecio / 100;
    return subPrecio;
  }
}



function load() {


  let allProductss: Products[] = [];
  let ran = (): number => {
    return Math.round(Math.random() * 10);
  };
  

  

  //Kit Kat----------------------------------------
  let prod: Product = new Product(0, "Kit Kat", 10, "Kg");
  let subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.1,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      0.3,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      0.6,
      ran()
    ),
  ];
  let products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  //Donuts---------------------------------
  prod = new Product(1, "Donuts", 9.95, "Kg");
  subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.3,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      0.6,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      1,
      ran()
    ),
  ];
  products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  //Galletas Oreo---------------------------------
  prod = new Product(2, "Galletas Oreo", 9.25, "Kg");
  subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.2,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      0.5,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      0.9,
      ran()
    ),
  ];
  products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  //Chicles Trident---------------------------------
  prod = new Product(3, "Chicles Trident", 46.9, "Kg");
  subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.02,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      0.1,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      0.12,
      ran()
    ),
  ];
  products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  //Chicles Orbit---------------------------------
  prod = new Product(4, "Chicles Orbit", 41.02, "Kg");
  subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.02,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      0.1,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      0.12,
      ran()
    ),
  ];
  products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  //Patatas Lays---------------------------------
  prod = new Product(5, "Patatas Lays", 9.44, "Kg");
  subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.16,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      0.2,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      0.3,
      ran()
    ),
  ];
  products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  //Doritos---------------------------------
  prod = new Product(6, "Doritos", 9.32, "Kg");
  subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.16,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      0.2,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      0.3,
      ran()
    ),
  ];
  products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  //Agua de Lanjaron---------------------------------
  prod = new Product(7, "Agua de Lanjaron", 0.35, "L");
  subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.5,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      1.5,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      2.5,
      ran()
    ),
  ];
  products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  //Cerveza Mahou---------------------------------
  prod = new Product(8, "Cerveza Mahou", 2.2, "L");
  subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.25,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      0.5,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      1,
      ran()
    ),
  ];
  products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  //Cerveza Heineken---------------------------------
  prod = new Product(9, "Cerveza Heineken", 2.15, "L");
  subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.25,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      0.5,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      1,
      ran()
    ),
  ];
  products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  //Coca Cola---------------------------------
  prod = new Product(10, "Coca Cola", 0.93, "L");
  subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.25,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      0.5,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      2,
      ran()
    ),
  ];
  products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  //Pepsi---------------------------------
  prod = new Product(11, "Pepsi", 0.85, "L");
  subprd = [
    new SubProduct(
      prod.id,
      prod.name,
      "Pequeño",
      prod.precio,
      prod.tipo,
      0.25,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Mediano",
      prod.precio,
      prod.tipo,
      0.5,
      ran()
    ),
    new SubProduct(
      prod.id,
      prod.name,
      "Grande",
      prod.precio,
      prod.tipo,
      2,
      ran()
    ),
  ];
  products = { product: prod, subProduct: subprd };
  allProductss.push(products);

  return allProductss;
}

interface Products {
  product: Product;
  subProduct: SubProduct[];
}