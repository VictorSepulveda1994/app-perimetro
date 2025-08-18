/**
 * Este archivo incluye polyfills necesarios para Angular y se carga antes de la aplicación.
 * Puedes añadir tus propios polyfills adicionales a este archivo.
 *
 * Este archivo se divide en 2 secciones:
 *   1. Polyfills del navegador. Se aplican antes de cargar ZoneJS y están ordenados por navegadores.
 *   2. Importaciones de la aplicación. Archivos importados después de ZoneJS que deben cargarse antes de tu archivo principal.
 *
 * La configuración actual es para los llamados navegadores "evergreen"; las últimas versiones de navegadores que
 * se actualizan automáticamente. Esto incluye versiones recientes de Safari, Chrome (incluido
 * Opera), Edge en el escritorio, y iOS y Chrome en dispositivos móviles.
 *
 * Aprende más en https://angular.io/guide/browser-support
 */

/***************************************************************************************************
 * POLYFILLS DEL NAVEGADOR
 */

/**
 * Por defecto, zone.js parcheará todas las posibles macroTareas y Eventos DOM.
 * El usuario puede deshabilitar partes del parche de macroTareas/Eventos DOM configurando las siguientes banderas
 * debido a que estas banderas deben establecerse antes de que se cargue `zone.js`, y webpack
 * colocará la importación en la parte superior del paquete, por lo que el usuario necesita crear un archivo separado
 * en este directorio (por ejemplo: zone-flags.ts), y colocar las siguientes banderas
 * en ese archivo, y luego añadir el siguiente código antes de importar zone.js.
 * import './zone-flags';
 *
 * Las banderas permitidas en zone-flags.ts se listan aquí.
 *
 * Las siguientes banderas funcionarán para todos los navegadores.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // deshabilita el parche requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // deshabilita el parche onProperty como onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // deshabilita el parche de nombres de eventos específicos
 *
 *  en las herramientas de desarrollo de IE/Edge, el addEventListener will also be wrapped by zone.js
 *  con la siguiente bandera, omitirá el parche `zone.js` para IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */

import './zone-flags';

/***************************************************************************************************
 * Zone JS es requerido por defecto para el propio Angular.
 */
import 'zone.js';  // Incluido con Angular CLI.


/***************************************************************************************************
 * IMPORTACIONES DE LA APLICACIÓN
 */
