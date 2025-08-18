// Este archivo es requerido por karma.conf.js y carga recursivamente todos los archivos .spec y de framework

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

/**
 * Inicializa el entorno de pruebas de Angular.
 * Esto configura el test bed con los módulos necesarios para las pruebas dinámicas del navegador.
 */
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);
