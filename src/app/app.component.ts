import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

/**
 * Componente principal de la aplicación.
 * Este componente sirve como la raíz de la aplicación,
 * integrando las funcionalidades principales de Ionic como IonApp y IonRouterOutlet.
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
