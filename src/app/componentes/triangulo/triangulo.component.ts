import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardContent, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';
import { TrianguloEscaleno } from '../../modelos/TrianguloEscaleno';

/**
 * Componente para calcular el perímetro de un triángulo.
 * Permite a los usuarios ingresar las longitudes de los tres lados y muestra el perímetro calculado.
 */
@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, IonCard, IonCardContent, IonItem, IonInput, IonButton]
})
export class TrianguloComponent {
  /**
   * La longitud del lado A del triángulo, ingresada por el usuario.
   */
  ladoA: number | null = null;
  /**
   * La longitud del lado B del triángulo, ingresada por el usuario.
   */
  ladoB: number | null = null;
  /**
   * La longitud del lado C del triángulo, ingresada por el usuario.
   */
  ladoC: number | null = null;
  /**
   * El mensaje de resultado que se muestra al usuario.
   */
  resultado: string = '';
  /**
   * Bandera que indica si se ha realizado un cálculo.
   */
  calculado: boolean = false;

  constructor() { }

  /**
   * Calcula el perímetro del triángulo basándose en las longitudes de los lados ingresadas.
   * Muestra el resultado o un mensaje de error si la entrada no es válida.
   */
  calcularPerimetro() {
    if (this.ladoA !== null && this.ladoA > 0 && this.ladoB !== null && this.ladoB > 0 && this.ladoC !== null && this.ladoC > 0) {
      const triangulo = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
      const perimetro = triangulo.calcularPerimetro();
      this.resultado = `El perímetro es: ${perimetro.toFixed(2)} cm`;
      this.calculado = true;
    } else {
      this.resultado = 'Por favor, ingrese valores válidos para todos los lados.';
      this.calculado = true;
    }
  }
}
