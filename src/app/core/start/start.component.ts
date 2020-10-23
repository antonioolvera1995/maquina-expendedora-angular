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
  productP;
  blockHour: boolean = false;
  money: number = 30;
  percentageError: number = 10;
  carBlockCheck: boolean = false;
  valueSelect: string = '0';
  constructor(private clo: ClockService, private products: ProductsService) {}

  ngOnInit(): void {
    products = this.products.getProducts();
    this.productP = products;
    //  inicio();
    //  this.clock();
  }

  log() {
    console.log(this.valueSelect);
  }

  clock() {
    const clockInterval = setInterval(() => {
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
    }, 100);
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


   checkIni(id:number) {
  
     

    let id2:string = this.valueSelect;
    let stock: HTMLInputElement;
    let subprice: HTMLInputElement;

    console.log(id,id2);
    
    // checkCard(Number(id), Number(id2));

}


  
}

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


//   function connectionIssues() {
//     let acept = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         let blockPor: boolean = false;
//         var prob = Math.round(100 * Math.random());
//         for (let i = 0; i < Math.round(percentageError); i++) {
//           if (i === prob) {
//             blockPor = true;
//           }
//         }
//         if (!blockPor) {
//           resolve('Conexión establecida');
//         } else {
//           reject('Error al intentar establecer la conexión');
//         }
//       }, 3000);
//     });

//     return acept;
//   }

//   async function checkProduct(id: number, id2: number) {
//     try {
//       print('Estableciendo conexión');
//       let connect = await connectionIssues();
//       print(String(connect));

//       let actuallProduct: ActuallProduct = {
//         id: products[id].subProduct[id2].id,
//         id2: id2,
//         name: products[id].subProduct[id2].name,
//         subName: products[id].subProduct[id2].subName,
//         precio: products[id].subProduct[id2].precio,
//         subPrecio: products[id].subProduct[id2].priceCalc(),
//         tipo: products[id].subProduct[id2].tipo,
//         peso: products[id].subProduct[id2].peso,
//         stock: products[id].subProduct[id2].stock,
//       };

//       //-----Restriccion del horario de consumo de alcohol-----

//       if (!blockHour) {
//         if (actuallProduct.stock <= 0) {
//           print(
//             `Lo sentimos, nos hemos quedado sin Stock de: ${actuallProduct.name} ${actuallProduct.subName}`
//           );
//         } else {
//           sellProduct(actuallProduct);
//         }
//       } else {
//         print(
//           'Restricciones al consumo de alcohol entre las 22h y las 8h establecidas por el gobierno.'
//         );
//       }
//     } catch (error) {
//       print(error);
//     }
//   }

//   function sellProduct(produc: ActuallProduct) {
//     if (money < produc.subPrecio) {
//       print('Dinero insuficiente, selecciona otro producto');
//     } else {
//       money = money - produc.subPrecio;
//       products[produc.id].subProduct[produc.id2].stock -= 1;
//       sold(produc);

//       //-----

//       let last: HTMLInputElement = <HTMLInputElement>(
//         document.getElementById('finally-1')
//       );
//       let divMain = document.createElement('div');
//       divMain.classList.add('div-finally');
//       divMain.innerHTML = `
//      <div class="finally-text"><p>${produc.name}</p></div>
//     <div class="finally-img"><img src="/assets/img/img-${produc.id}.jpg" alt=""></div>`;
//       last.appendChild(divMain);
//       let large: number = last.scrollWidth;
//       last.scrollLeft = large;
//     }
//   }

//   function sold(produc: ActuallProduct) {
//     print('Producto vendido con éxito, gracias por su compra.');
//     let id3: HTMLInputElement;
//     let stock: HTMLInputElement;

//     let valu = produc.id;
//     id3 = <HTMLInputElement>document.getElementById(`select-${valu}`);
//     stock = <HTMLInputElement>document.getElementById(`stock-${valu}`);
//     stock.textContent = `Stock: ${
//       products[Number(valu)].subProduct[Number(produc.id2)].stock
//     }`;
//     (document.getElementById(
//       'actu-money'
//     ) as HTMLInputElement).innerText = `Saldo actual ${
//       Math.round(money * 100) / 100
//     }€`;

//     setTimeout(() => {
//       let elem = document.querySelectorAll('li');
//       for (let i = 0; i < elem.length; i++) {
//         elem[i].remove();
//       }
//     }, 5000);
//   }

//   // -------------------------------------Card-----------------------------------------------
//   let cardNumb1 = document.getElementById('number-card') as HTMLInputElement;
//   cardNumb1.addEventListener('keyup', () => {
//     if (cardNumb1.value.length > 16) {
//       cardNumb1.value = cardNumb1.value.substring(0, 16);
//     }
//   });
//   let cardCvv = document.getElementById('cvv-card') as HTMLInputElement;
//   cardCvv.addEventListener('keyup', () => {
//     if (cardCvv.value.length > 3) {
//       cardCvv.value = cardCvv.value.substring(0, 3);
//     }
//   });

//   let cardExp = document.getElementById('expiration-card') as HTMLInputElement;
//   cardExp.addEventListener('keyup', () => {
//     if (cardExp.value.length > 5) {
//       cardExp.value = cardExp.value.substring(0, 5);
//     }

//     if (cardExp.value.length === 5 || cardExp.value.length === 3) {
//       cardExp.value = `${cardExp.value.substring(
//         0,
//         2
//       )}-${cardExp.value.substring(3, 5)}`;
//     }

//     if (cardExp.value.length === 5) {
//       let nu = Number(cardExp.value.substring(3, 5));
//       if (nu < 20) {
//         cardExp.value = `${cardExp.value.substring(0, 2)}-20`;
//       }

//       let na = Number(cardExp.value.substring(0, 2));
//       if (na > 12 || na < 1) {
//         cardExp.value = `01-${cardExp.value.substring(3, 5)}`;
//       }
//     }
//   });

//   document.getElementById('bt-card')?.addEventListener('click', () => {
//     let nam: HTMLInputElement = document.getElementById(
//       'name-card'
//     ) as HTMLInputElement;
//     let num: HTMLInputElement = document.getElementById(
//       'number-card'
//     ) as HTMLInputElement;
//     let exp: HTMLInputElement = document.getElementById(
//       'expiration-card'
//     ) as HTMLInputElement;
//     let cvv: HTMLInputElement = document.getElementById(
//       'cvv-card'
//     ) as HTMLInputElement;

//     carBlockCheck = true;
//     card.name = nam.value;
//     card.cardNumber = Number(num.value);
//     card.expiration = exp.value;
//     card.cvv = Number(cvv.value);

//     let blockCard: boolean = false;

//     if (card.name.length > 0) {
//       if (
//         card.cardNumber > 999999999999999 &&
//         card.cardNumber < 9999999999999999
//       ) {
//         if (card.expiration.length == 5) {
//           if (card.cvv > 99 && card.cvv < 999) {
//             print('Tarjeta Aceptada con exito');
//           } else {
//             blockCard = true;
//             alert('El número de la tarjeta debe se de 3 dígitos');
//           }
//         } else {
//           blockCard = true;
//           alert('Rellene la fecha de caducidad correctamente');
//         }
//       } else {
//         blockCard = true;
//         alert('El número de la tarjeta debe se de 16 dígitos');
//       }
//     } else {
//       blockCard = true;
//       alert('Por favor, rellene el campo nombre');
//     }

//     if (!blockCard) {
//       carBlockCheck = true;
//       (document.getElementById('bt-card') as HTMLInputElement).classList.remove(
//         'bt2'
//       );
//       if (
//         (document.getElementById('save') as HTMLInputElement).checked === true
//       ) {
//         localStorage.setItem('name', card.name);
//         localStorage.setItem('number', `${card.cardNumber}`);
//         localStorage.setItem('expiration', card.expiration);
//         localStorage.setItem('cvv', `${card.cvv}`);
//       }
//     } else {
//       (document.getElementById('bt-card') as HTMLInputElement).classList.add(
//         'bt2'
//       );
//       carBlockCheck = false;
//     }
//   });

//   document.getElementById('save')?.click();

//   (document.getElementById(
//     'actu-money'
//   ) as HTMLInputElement).innerText = `Saldo actual ${money}€`;
//   try {
//     let ver: string = localStorage.getItem('name') as string;
//     if (ver.length > 0) {
//       (document.getElementById(
//         'name-card'
//       ) as HTMLInputElement).value = localStorage.getItem('name') as string;
//       (document.getElementById(
//         'number-card'
//       ) as HTMLInputElement).value = localStorage.getItem('number') as string;
//       (document.getElementById(
//         'expiration-card'
//       ) as HTMLInputElement).value = localStorage.getItem(
//         'expiration'
//       ) as string;
//       (document.getElementById(
//         'cvv-card'
//       ) as HTMLInputElement).value = localStorage.getItem('cvv') as string;

//       document.getElementById('bt-card')?.click();
//     }
//   } catch (error) {}

//   function print(text: string) {
//     let list = document.createElement('li');
//     let te = document.createElement('p');
//     let nod = document.createTextNode(text);
//     te.appendChild(nod);
//     list.appendChild(te);
//     (document.getElementById('list') as HTMLInputElement).appendChild(list);
//   }
// }
