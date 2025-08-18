import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardContent, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';
import { Circulo } from '../../modelos/Circulo';

/**
 * Componente para calcular el perímetro de un círculo.
 * Permite a los usuarios ingresar el radio y muestra el perímetro calculado.
 */
@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, IonCard, IonCardContent, IonItem, IonInput, IonButton]
})
export class CirculoComponent {
  /**
   * El radio del círculo, ingresado por el usuario.
   */
  radio: number | null = null;
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
   * Calcula el perímetro del círculo basándose en el radio ingresado.
   * Muestra el resultado o un mensaje de error si la entrada no es válida.
   */
  calcularPerimetro() {
    if (this.radio !== null && this.radio > 0) {
      const circulo = new Circulo(this.radio);
      const perimetro = circulo.calcularPerimetro();
      this.resultado = `El perímetro es: ${perimetro.toFixed(2)} cm`;
      this.calculado = true;
    } else {
      this.resultado = 'Por favor, ingrese un radio válido.';
      this.calculado = true;
    }
  }
}