import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Albert Einstein';
  nombrePropio:string = 'CaroLina SanTana MarTel';
  ilustres: string [] = [];
  arr = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5 ;
  fecha:Date = new Date();
  activar: boolean = true;
  idioma: string = 'es';
  videoUrl: string = 'https://www.youtube.com/embed/vMqAXTEgEM0';

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('ejecutado');
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }

}
