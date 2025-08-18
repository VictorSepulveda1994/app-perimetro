import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, IonList, IonItem } from '@ionic/angular/standalone';
import { CirculoComponent } from '../../componentes/circulo/circulo.component';
import { TrianguloComponent } from '../../componentes/triangulo/triangulo.component';

/**
 * Componente de la página de inicio de la aplicación.
 * Permite a los usuarios seleccionar una figura geométrica y muestra el componente correspondiente
 * para el cálculo del perímetro.
 */
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonSelect,
    IonSelectOption,
    CirculoComponent,
    TrianguloComponent,
  ],
})
export class HomePage {
  /**
   * Almacena la figura geométrica seleccionada actualmente (por ejemplo, 'circulo', 'triangulo').
   */
  figuraSeleccionada: string = '';
  constructor() {}
}
