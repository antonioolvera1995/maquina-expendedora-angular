import { load } from './load';

export class Start {
  constructor() {
    //start();

    let money: number = 30;
    interface Hour {
      horas: number;
      minutos: number;
    }
    let hour: Hour = { horas: 8, minutos: 0 }; //crear interface
    const percentageError: number = 10; // probabilidad de error

    let products = load();

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
        let blockHour: boolean = false;

        if (id === 8 || id === 9) {
          let hor: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23];
          for (const i of hor) {
            if (hour.horas === i) {
              if (hour.horas === 8 && hour.minutos > 0) {
              } else {
                blockHour = true;
              }
            }
          }
        }
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
        <div class="finally-img"><img src="./img/img-${produc.id}.jpg" alt=""></div>`;
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
        let contenido: string = "";

        for (let i = 0; i < products.length; i++) {
          let cont: string = ` <div class="item-${i}">
          <div class="title">
              <p class="title-1" id="name-${i}">${products[i].product.name}</p>
              <p class="title-2" id="precio-${i}">${products[i].product.precio}€ ${products[i].product.tipo}</p>
          </div>
          <div class="img"><img id="img-${i}" src="/assets/img/img-${i}.jpg" alt=""></div>
          <div class="bt" id="bt-${i}" value="${i}">
              <p value="${i}">COMPRAR</p>
          </div>
      
          <div class="select">
              <select num="${i}" id="select-${i}" name="size">
                  <option value="0">Pequeño ${products[i].subProduct[0].peso} ${products[i].subProduct[0].tipo}</option>
                  <option value="1">Mediano ${products[i].subProduct[1].peso} ${products[i].subProduct[0].tipo}</option>
                  <option value="2">Grande ${products[i].subProduct[2].peso} ${products[i].subProduct[0].tipo}</option>
              </select>
          </div>
      
          <div class="info" >
              <p id="stock-${i}">Stock: ${products[i].subProduct[0].stock}</p>
              <p id="subprecio-${i}">Precio: ${products[i].subProduct[0].priceCalc()}€</p>
          </div>
      
      </div>`;
      
          contenido += cont;
        }
      
        contenido += `<div class="finally">
      
         <div class="finally-1" id="finally-1">
      
      
         </div>
      </div>`;
      
        let main = document.getElementById("main") as HTMLInputElement;
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
        subprice = <HTMLInputElement>(
          document.getElementById(`subprecio-${valu}`)
        );
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

    let cardExp = document.getElementById(
      'expiration-card'
    ) as HTMLInputElement;
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
        (document.getElementById(
          'bt-card'
        ) as HTMLInputElement).classList.remove('bt2');
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
      (document.getElementById(
        'actu-hour'
      ) as HTMLInputElement).innerText = `Hora: 0${hour.horas}:0${hour.minutos}`;
      try {
        let ver: string = localStorage.getItem('name') as string;
        if (ver.length > 0) {
          (document.getElementById(
            'name-card'
          ) as HTMLInputElement).value = localStorage.getItem('name') as string;
          (document.getElementById(
            'number-card'
          ) as HTMLInputElement).value = localStorage.getItem(
            'number'
          ) as string;
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
    
      // -------------------------Relog--------------------
      setInterval(() => {
        let hor: string;
        let min: string;

        hour.minutos++;
        // -----minutos-----
        if (hour.minutos > 60) {
          hour.horas++;
          hour.minutos = 0;
        }
        // -----horas-----
        if (hour.horas > 23) {
          hour.horas = 0;
        }
        // --------------------------------

        if (hour.minutos < 10) {
          min = `0${hour.minutos}`;
        } else {
          min = `${hour.minutos}`;
        }

        if (hour.horas < 10) {
          hor = `0${hour.horas}`;
        } else {
          hor = `${hour.horas}`;
        }

        (document.getElementById(
          'actu-hour'
        ) as HTMLInputElement).innerText = `Hora: ${hor}:${min}`;
      }, 100);

      setInterval(() => {
        let elem = document.querySelectorAll('li');
        for (let i = 0; i < elem.length; i++) {
          if (i > 8) {
            elem[0].remove();
          }
        }
      }, 500);
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
}
