
export  class Product {
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
  
  export  class SubProduct extends Product {
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
      subPrecio = Math.round(subPrecio*100);
      subPrecio = subPrecio/100;
      return subPrecio;
    }
  }