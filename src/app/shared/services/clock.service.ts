import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ClockService {
  hour: Hour = { horas: 8, minutos: 0 };
  constructor() {
    this.start();
  }

  start() {
    // -------------------------Relog--------------------
    setInterval(() => {
      this.hour.minutos++;
      // -----minutos-----
      if (this.hour.minutos > 60) {
        this.hour.horas++;
        this.hour.minutos = 0;
      }
      // -----horas-----
      if (this.hour.horas > 23) {
        this.hour.horas = 0;
      }
    }, 100);
  }
}
export interface Hour {
  horas: number;
  minutos: number;
}
