import { Component, OnInit } from '@angular/core';
import { ClockService, Hour } from 'src/app/shared/services/clock.service';
import { ProductsService } from 'src/app/shared/services/products.service';

let products;
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  hour: Hour;
  actuHor: string;
  constructor(private clo: ClockService, private products: ProductsService) {}

  ngOnInit(): void {
    products = this.products.getProducts();

    inicio();
    styles();
    //this.clock();
  }

  clock() {
    setInterval(() => {
      this.hour = this.clo.hour;

      let hor: string;
      let min: string;
      // --------------------------------
      if (this.hour.minutos < 10) {
        min = `0${this.hour.minutos}`;
      } else {
        min = `${this.hour.minutos}`;
      }

      if (this.hour.horas < 10) {
        hor = `0${this.hour.horas}`;
      } else {
        hor = `${this.hour.horas}`;
      }

      this.actuHor = `Hora: ${hor}:${min}`;
    }, 1500);

  
  }

  stopAlcohol() {
    let blockHour: boolean = false; //start para bloquear la compra
    // //-----Restriccion del horario de consumo de alcohol-----
    // let blockHour: boolean = false;

    // if (id === 8 || id === 9) {
    //   let hor: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23];
    //   for (const i of hor) {
    //     if (this.hour.horas === i) {
    //       if (this.hour.horas === 8 && this.hour.minutos > 0) {
    //       } else {
    //         blockHour = true;
    //       }
    //     }
    //   }
    // }
    // if (!blockHour) {
    //   if (actuallProduct.stock <= 0) {
    //     print(
    //       `Lo sentimos, nos hemos quedado sin Stock de: ${actuallProduct.name} ${actuallProduct.subName}`
    //     );
    //   } else {
    //     sellProduct(actuallProduct);
    //   }
    // } else {
    //   print(
    //     'Restricciones al consumo de alcohol entre las 22h y las 8h establecidas por el gobierno.'
    //   );
    // }
  }
}

function styles() {
  let style = document.createElement('style');

  let text = document.createTextNode(` 
  
  
  /* ----------------------------------------------------------------------------------------- */

.title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1em;
  }
  .title-1 {
    font-size: 1.2em;
    font-weight: 600;
    margin-bottom: 0.5em;
  }

  
  .img {
    display: flex;
    height: 6em;
    justify-content: center;
    align-items: center;
    margin-bottom: 1em;
  }
  
  .img > img {
    height: 6em;
    border-radius: 1em;
  }
  
  .bt{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8em;
    height: 2.5em;
    background-color: rgb(10, 184, 48);
    margin-bottom: 1em;
    border-radius: 0.3em;
    transition-duration: 100ms;
    user-select: none;
  }
  .bt:hover {
    transform: scale(1.05, 1.05);
  }
  .bt:active {
    transform: scale(1.1, 1.1);
    background-color: rgb(10, 214, 54);
    transition-duration: 10ms;
  }
  .bt > p {
    color: white;
    font-size: 0.9em;
    font-weight: 600;
  }
  
  .select {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10em;
    height: 2.5em;
    border-radius: 0.3em;
    transition-duration: 100ms;
    user-select: none;
  }
  .select > select {
    width: 10em;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5em;
    border-radius: 0.3em;
    user-select: none;
    padding-left: 0.3em;
  }
  
  .finally-1 {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    justify-content: flex-start;
    align-content: center;
    width: 93%;
    height: 10em;
  }
  
  .div-finally {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 9em;
    height: 9em;
  
    margin: 0.5em;
  }
  .finally-text {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 9em;
    height: 1em;
    margin-bottom: 1em;
  }
  .finally-img {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 9em;
    height: 5em;
    margin-bottom: 1em;
  }
  .finally-img > img {
    height: 5em;
    border-radius: 1em;
  }
  

  

  
  /* ------------------------------------------------------------------------------- */

  .main {
    justify-content: center;
    display: grid;
    width: 80%;
    height: auto;
    margin: auto;
    margin-top: 5em;
  
    grid-template-areas:
      "a b c"
      "d e f"
      "g h i"
      "j k l"
      "m m m";
    grid-template-columns: 15em 15em 15em;
    grid-template-rows: 22em 22em 22em 22em 22em;
  }

  
  
  .item-0 {
    display: flex;
    flex-direction: column;
    background-color: rgb(230, 230, 230);
    grid-area: a;
    justify-content: center;
    align-items: center;
    border-radius: 0.5em;
    margin: 1em;
    width: 95%;
    height: 95%;
    box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.45);
  }
  
  .item-1 {
    display: flex;
    flex-direction: column;
    background-color: rgb(230, 230, 230);
    grid-area: b;
    justify-content: center;
    align-items: center;
    border-radius: 0.5em;
    margin: 1em;
    width: 95%;
    height: 95%;
      box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.45);
  }
  
  .item-2 {
    display: flex;
    flex-direction: column;
    background-color: rgb(230, 230, 230);
    grid-area: c;
    justify-content: center;
    align-items: center;
    border-radius: 0.5em;
    margin: 1em;
    width: 95%;
    height: 95%;
      box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.45);
  }
  
  .item-3 {
    display: flex;
    flex-direction: column;
    background-color: rgb(230, 230, 230);
    grid-area: d;
    justify-content: center;
    align-items: center;
    border-radius: 0.5em;
    margin: 1em;
    width: 95%;
    height: 95%;
      box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.45);
  }
  
  .item-4 {
    display: flex;
    flex-direction: column;
    background-color: rgb(230, 230, 230);
    grid-area: e;
    justify-content: center;
    align-items: center;
    border-radius: 0.5em;
    margin: 1em;
    width: 95%;
    height: 95%;
      box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.45);
  }
  
  .item-5 {
    display: flex;
    flex-direction: column;
    background-color: rgb(230, 230, 230);
    grid-area: f;
    justify-content: center;
    align-items: center;
    border-radius: 0.5em;
    margin: 1em;
    width: 95%;
    height: 95%;
      box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.45);
  }
  
  .item-6 {
    display: flex;
    flex-direction: column;
    background-color: rgb(230, 230, 230);
    grid-area: g;
    justify-content: center;
    align-items: center;
    border-radius: 0.5em;
    margin: 1em;
    width: 95%;
    height: 95%;
      box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.45);
  }
  
  .item-7 {
    display: flex;
    flex-direction: column;
    background-color: rgb(230, 230, 230);
    grid-area: h;
    justify-content: center;
    align-items: center;
    border-radius: 0.5em;
    margin: 1em;
    width: 95%;
    height: 95%;
      box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.45);
  }
  
  .item-8 {
    display: flex;
    flex-direction: column;
    background-color: rgb(230, 230, 230);
    grid-area: i;
    justify-content: center;
    align-items: center;
    border-radius: 0.5em;
    margin: 1em;
    width: 95%;
    height: 95%;
      box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.45);
  }
  
  .item-9 {
    display: flex;
    flex-direction: column;
    background-color: rgb(230, 230, 230);
    grid-area: j;
    justify-content: center;
    align-items: center;
    border-radius: 0.5em;
    margin: 1em;
    width: 95%;
    height: 95%;
      box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.45);
  }
  
  .item-10 {
    display: flex;
    flex-direction: column;
    background-color: rgb(230, 230, 230);
    grid-area: k;
    justify-content: center;
    align-items: center;
    border-radius: 0.5em;
    margin: 1em;
    width: 95%;
    height: 95%;
      box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.45);
  }
  
  .item-11 {
    display: flex;
    flex-direction: column;
    background-color: rgb(230, 230, 230);
    grid-area: l;
    justify-content: center;
    align-items: center;
    border-radius: 0.5em;
    margin: 1em;
    width: 95%;
    height: 95%;
      box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.45);
  }
  
  .finally {
    display: flex;
    width: 98.5%;
    height: 60%;
    grid-area: m;
    justify-content: center;
    align-items: center;
    border-radius: 0.5em;
    margin: 1em;
    background-color: rgb(230, 230, 230);
      box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.45);
  }
  
  
  
  
  
  `);

  style.appendChild(text);
  let secti = document.querySelector('section');
  secti.appendChild(style);
}

function inicio() {
  //start();
  let blockHour: boolean = false;
  let money: number = 30;

  const percentageError: number = 10; // probabilidad de error

  start();
  let carBlockCheck: boolean = false;

  interface Card {
    name: string;
    cardNumber: number;
    expiration: string;
    cvv: number;
  }
  let card: Card = {
    name: '',
    cardNumber: 1,
    expiration: '',
    cvv: 0,
  };

  interface ActuallProduct {
    id: number;
    id2: number;
    name: string;
    subName: string;
    precio: number;
    subPrecio: number;
    tipo: string;
    peso: number;
    stock: number;
  }

  function checkCard(id: number, id2: number) {
    if (carBlockCheck) {
      checkProduct(id, id2);
    } else {
      alert('Verifica la tarjeta de crédito');
    }
  }

  function connectionIssues() {
    let acept = new Promise((resolve, reject) => {
      setTimeout(() => {
        let blockPor: boolean = false;
        var prob = Math.round(100 * Math.random());
        for (let i = 0; i < Math.round(percentageError); i++) {
          if (i === prob) {
            blockPor = true;
          }
        }
        if (!blockPor) {
          resolve('Conexión establecida');
        } else {
          reject('Error al intentar establecer la conexión');
        }
      }, 3000);
    });

    return acept;
  }

  async function checkProduct(id: number, id2: number) {
    try {
      print('Estableciendo conexión');
      let connect = await connectionIssues();
      print(String(connect));

      let actuallProduct: ActuallProduct = {
        id: products[id].subProduct[id2].id,
        id2: id2,
        name: products[id].subProduct[id2].name,
        subName: products[id].subProduct[id2].subName,
        precio: products[id].subProduct[id2].precio,
        subPrecio: products[id].subProduct[id2].priceCalc(),
        tipo: products[id].subProduct[id2].tipo,
        peso: products[id].subProduct[id2].peso,
        stock: products[id].subProduct[id2].stock,
      };

      //-----Restriccion del horario de consumo de alcohol-----

      if (!blockHour) {
        if (actuallProduct.stock <= 0) {
          print(
            `Lo sentimos, nos hemos quedado sin Stock de: ${actuallProduct.name} ${actuallProduct.subName}`
          );
        } else {
          sellProduct(actuallProduct);
        }
      } else {
        print(
          'Restricciones al consumo de alcohol entre las 22h y las 8h establecidas por el gobierno.'
        );
      }
    } catch (error) {
      print(error);
    }
  }

  function sellProduct(produc: ActuallProduct) {
    if (money < produc.subPrecio) {
      print('Dinero insuficiente, selecciona otro producto');
    } else {
      money = money - produc.subPrecio;
      products[produc.id].subProduct[produc.id2].stock -= 1;
      sold(produc);

      //-----

      let last: HTMLInputElement = <HTMLInputElement>(
        document.getElementById('finally-1')
      );
      let divMain = document.createElement('div');
      divMain.classList.add('div-finally');
      divMain.innerHTML = `  
     <div class="finally-text"><p>${produc.name}</p></div>
    <div class="finally-img"><img src="/assets/img/img-${produc.id}.jpg" alt=""></div>`;
      last.appendChild(divMain);
      let large: number = last.scrollWidth;
      last.scrollLeft = large;
    }
  }

  function sold(produc: ActuallProduct) {
    print('Producto vendido con éxito, gracias por su compra.');
    let id3: HTMLInputElement;
    let stock: HTMLInputElement;

    let valu = produc.id;
    id3 = <HTMLInputElement>document.getElementById(`select-${valu}`);
    stock = <HTMLInputElement>document.getElementById(`stock-${valu}`);
    stock.textContent = `Stock: ${
      products[Number(valu)].subProduct[Number(produc.id2)].stock
    }`;
    (document.getElementById(
      'actu-money'
    ) as HTMLInputElement).innerText = `Saldo actual ${
      Math.round(money * 100) / 100
    }€`;

    setTimeout(() => {
      let elem = document.querySelectorAll('li');
      for (let i = 0; i < elem.length; i++) {
        elem[i].remove();
      }
    }, 5000);
  }

  //------------------------------------------------Cargar html----------------------------------------------------------------------------

  function loadingHtml() {
    let contenido: string = '';

    for (let i = 0; i < products.length; i++) {
      let cont: string = ` <div class="item-${i}">
      <div class="title">
          <p class="title-1" id="name-${i}">${products[i].product.name}</p>
          <p class="title-2" id="precio-${i}">${products[i].product.precio}€ ${
        products[i].product.tipo
      }</p>
      </div>
      <div class="img"><img id="img-${i}" src="/assets/img/img-${i}.jpg" alt=""></div>
      <div class="bt" id="bt-${i}" value="${i}">
          <p value="${i}">COMPRAR</p>
      </div>
  
      <div class="select">
          <select num="${i}" id="select-${i}" name="size">
              <option value="0">Pequeño ${products[i].subProduct[0].peso} ${
        products[i].subProduct[0].tipo
      }</option>
              <option value="1">Mediano ${products[i].subProduct[1].peso} ${
        products[i].subProduct[0].tipo
      }</option>
              <option value="2">Grande ${products[i].subProduct[2].peso} ${
        products[i].subProduct[0].tipo
      }</option>
          </select>
      </div>
  
      <div class="info" >
          <p id="stock-${i}">Stock: ${products[i].subProduct[0].stock}</p>
          <p id="subprecio-${i}">Precio: ${products[
        i
      ].subProduct[0].priceCalc()}€</p>
      </div>
  
  </div>`;

      contenido += cont;
    }

    contenido += `<div class="finally">
  
     <div class="finally-1" id="finally-1">
  
  
     </div>
  </div>`;

    let main = document.getElementById('main') as HTMLInputElement;
    main.innerHTML = contenido;
  }
  loadingHtml();

  document.querySelector('html')?.addEventListener('click', (e) => {
    let value = (e.target as Element).getAttribute('value');
    let id2: HTMLInputElement;
    let stock: HTMLInputElement;
    let subprice: HTMLInputElement;

    let id3: HTMLInputElement;
    if ((<HTMLInputElement>e.target).name == 'size') {
      let valu = (<HTMLInputElement>e.target).getAttribute('num');
      id3 = <HTMLInputElement>document.getElementById(`select-${valu}`);

      stock = <HTMLInputElement>document.getElementById(`stock-${valu}`);
      subprice = <HTMLInputElement>document.getElementById(`subprecio-${valu}`);
      stock.textContent = `Stock: ${
        products[Number(valu)].subProduct[Number(id3.value)].stock
      }`;
      subprice.textContent = `Precio: ${products[Number(valu)].subProduct[
        Number(id3.value)
      ].priceCalc()}€`;
    }

    switch (value) {
      case '0':
        id2 = <HTMLInputElement>document.getElementById(`select-${value}`);
        checkCard(Number(value), Number(id2.value));
        break;
      case '1':
        id2 = <HTMLInputElement>document.getElementById(`select-${value}`);
        checkCard(Number(value), Number(id2.value));
        break;
      case '2':
        id2 = <HTMLInputElement>document.getElementById(`select-${value}`);
        checkCard(Number(value), Number(id2.value));
        break;
      case '3':
        id2 = <HTMLInputElement>document.getElementById(`select-${value}`);
        checkCard(Number(value), Number(id2.value));
        break;
      case '4':
        id2 = <HTMLInputElement>document.getElementById(`select-${value}`);
        checkCard(Number(value), Number(id2.value));
        break;
      case '5':
        id2 = <HTMLInputElement>document.getElementById(`select-${value}`);
        checkCard(Number(value), Number(id2.value));
        break;
      case '6':
        id2 = <HTMLInputElement>document.getElementById(`select-${value}`);
        checkCard(Number(value), Number(id2.value));
        break;
      case '7':
        id2 = <HTMLInputElement>document.getElementById(`select-${value}`);
        checkCard(Number(value), Number(id2.value));
        break;
      case '8':
        id2 = <HTMLInputElement>document.getElementById(`select-${value}`);
        checkCard(Number(value), Number(id2.value));
        break;
      case '9':
        id2 = <HTMLInputElement>document.getElementById(`select-${value}`);
        checkCard(Number(value), Number(id2.value));
        break;
      case '10':
        id2 = <HTMLInputElement>document.getElementById(`select-${value}`);
        checkCard(Number(value), Number(id2.value));
        break;
      case '11':
        id2 = <HTMLInputElement>document.getElementById(`select-${value}`);
        checkCard(Number(value), Number(id2.value));
        break;

      default:
        break;
    }
  });

  // -------------------------------------Card-----------------------------------------------
  let cardNumb1 = document.getElementById('number-card') as HTMLInputElement;
  cardNumb1.addEventListener('keyup', () => {
    if (cardNumb1.value.length > 16) {
      cardNumb1.value = cardNumb1.value.substring(0, 16);
    }
  });
  let cardCvv = document.getElementById('cvv-card') as HTMLInputElement;
  cardCvv.addEventListener('keyup', () => {
    if (cardCvv.value.length > 3) {
      cardCvv.value = cardCvv.value.substring(0, 3);
    }
  });

  let cardExp = document.getElementById('expiration-card') as HTMLInputElement;
  cardExp.addEventListener('keyup', () => {
    if (cardExp.value.length > 5) {
      cardExp.value = cardExp.value.substring(0, 5);
    }

    if (cardExp.value.length === 5 || cardExp.value.length === 3) {
      cardExp.value = `${cardExp.value.substring(
        0,
        2
      )}-${cardExp.value.substring(3, 5)}`;
    }

    if (cardExp.value.length === 5) {
      let nu = Number(cardExp.value.substring(3, 5));
      if (nu < 20) {
        cardExp.value = `${cardExp.value.substring(0, 2)}-20`;
      }

      let na = Number(cardExp.value.substring(0, 2));
      if (na > 12 || na < 1) {
        cardExp.value = `01-${cardExp.value.substring(3, 5)}`;
      }
    }
  });

  document.getElementById('bt-card')?.addEventListener('click', () => {
    let nam: HTMLInputElement = document.getElementById(
      'name-card'
    ) as HTMLInputElement;
    let num: HTMLInputElement = document.getElementById(
      'number-card'
    ) as HTMLInputElement;
    let exp: HTMLInputElement = document.getElementById(
      'expiration-card'
    ) as HTMLInputElement;
    let cvv: HTMLInputElement = document.getElementById(
      'cvv-card'
    ) as HTMLInputElement;

    carBlockCheck = true;
    card.name = nam.value;
    card.cardNumber = Number(num.value);
    card.expiration = exp.value;
    card.cvv = Number(cvv.value);

    let blockCard: boolean = false;

    if (card.name.length > 0) {
      if (
        card.cardNumber > 999999999999999 &&
        card.cardNumber < 9999999999999999
      ) {
        if (card.expiration.length == 5) {
          if (card.cvv > 99 && card.cvv < 999) {
            print('Tarjeta Aceptada con exito');
          } else {
            blockCard = true;
            alert('El número de la tarjeta debe se de 3 dígitos');
          }
        } else {
          blockCard = true;
          alert('Rellene la fecha de caducidad correctamente');
        }
      } else {
        blockCard = true;
        alert('El número de la tarjeta debe se de 16 dígitos');
      }
    } else {
      blockCard = true;
      alert('Por favor, rellene el campo nombre');
    }

    if (!blockCard) {
      carBlockCheck = true;
      (document.getElementById('bt-card') as HTMLInputElement).classList.remove(
        'bt2'
      );
      if (
        (document.getElementById('save') as HTMLInputElement).checked === true
      ) {
        localStorage.setItem('name', card.name);
        localStorage.setItem('number', `${card.cardNumber}`);
        localStorage.setItem('expiration', card.expiration);
        localStorage.setItem('cvv', `${card.cvv}`);
      }
    } else {
      (document.getElementById('bt-card') as HTMLInputElement).classList.add(
        'bt2'
      );
      carBlockCheck = false;
    }
  });

  document.getElementById('save')?.click();

  (document.getElementById(
    'actu-money'
  ) as HTMLInputElement).innerText = `Saldo actual ${money}€`;
  try {
    let ver: string = localStorage.getItem('name') as string;
    if (ver.length > 0) {
      (document.getElementById(
        'name-card'
      ) as HTMLInputElement).value = localStorage.getItem('name') as string;
      (document.getElementById(
        'number-card'
      ) as HTMLInputElement).value = localStorage.getItem('number') as string;
      (document.getElementById(
        'expiration-card'
      ) as HTMLInputElement).value = localStorage.getItem(
        'expiration'
      ) as string;
      (document.getElementById(
        'cvv-card'
      ) as HTMLInputElement).value = localStorage.getItem('cvv') as string;

      document.getElementById('bt-card')?.click();
    }
  } catch (error) {}

  function start() {
    loadingHtml();
  }

  function print(text: string) {
    let list = document.createElement('li');
    let te = document.createElement('p');
    let nod = document.createTextNode(text);
    te.appendChild(nod);
    list.appendChild(te);
    (document.getElementById('list') as HTMLInputElement).appendChild(list);
  }
}
