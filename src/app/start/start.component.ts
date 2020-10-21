import { Start } from './start';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    new Start();
    styles();
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
  
  /* -----------------------------TERMINAL----------------------------------------------------- */
  
  .terminal {
    justify-content: flex-start;
    display: grid;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: auto;
    height: auto;
    margin: 2em;
    margin-top: -2.6em;
  
    grid-template-areas:
      "aa"
      "bb"
      "ca"
      "cb"
      "cc"
      "cd"
      "ce";
    grid-template-columns: 20em;
    grid-template-rows: 4em 4em 4em 4em 4em 4em 4em;
  }
  
  .clock-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    grid-area: aa;
    background-color: rgb(230, 230, 230);
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.45);
  }
  
  .clock-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    grid-area: bb;
    background-color: rgb(230, 230, 230);
    border-top-color: rgb(245, 245, 245);
    border-top-width: 0.1em;
    border-top-style: solid;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.45);
  }
  
  .card-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    grid-area: ca;
    background-color: rgb(230, 230, 230);
    border-top-color: rgb(245, 245, 245);
    border-top-width: 0.1em;
    border-top-style: solid;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.45);
  }
  
  .card-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    grid-area: cb;
    background-color: rgb(230, 230, 230);
    border-top-color: rgb(245, 245, 245);
    border-top-width: 0.1em;
    border-top-style: solid;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.45);
  }
  
  .card-3 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 100%;
    grid-area: cc;
    background-color: rgb(230, 230, 230);
    border-top-color: rgb(245, 245, 245);
    border-top-width: 0.1em;
    border-top-style: solid;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.45);
  }
  .card-3 > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .input-card-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 6em;
    height: 100%;
  }
  
  .card-4 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 100%;
    grid-area: cd;
    background-color: rgb(230, 230, 230);
    border-top-color: rgb(245, 245, 245);
    border-top-width: 0.1em;
    border-top-style: solid;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.45);
  }
  
  .card-4 > div {
    margin-right: 0.3em;
  }
  
  .card-5 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    grid-area: ce;
    background-color: rgb(230, 230, 230);
    border-top-color: rgb(245, 245, 245);
    border-top-width: 0.1em;
    border-top-style: solid;
  
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.45);
  }
  
  .card-5 > div {
    margin: 0%;
  }
  
  .bt2 {
    background-color: rgb(167, 0, 0);
  }
  
  .bt2:active {
    background-color: rgb(214, 3, 3);
  }
  
  /* -----------------------------TERMINAL----------------------------------------------------- */
  
  .message {
    display: flex;
    justify-content: flex-end;
    position: fixed;
    width: 100%;
    height: 28em;
    z-index: -1;
  }
  
  .message-1 {
    overflow: hidden;
    display: flex;
    position: fixed;
    width: 18em;
    height: 26em;
    margin: 2em;
    margin-top: -2.6em;
    margin-left: 22em;
    padding: 1.5em;
    background-color: rgb(230, 230, 230);
    border-radius: 0.5em;
    z-index: 1;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.45);
  }
  
  .message-1 > ul {
    margin: 0.3em;
  }
  
  .message-1 > ul > li {
    margin-bottom: 1em;
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
