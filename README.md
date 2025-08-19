# App Perímetro

`app-perimetro` es una aplicación web móvil desarrollada con Ionic y Angular. Su objetivo principal es calcular el perímetro de diferentes figuras geométricas. Actualmente, la aplicación soporta el cálculo para círculos y triángulos escalenos.

## 🚀 Características

* **Cálculo de Perímetro:** Calcula el perímetro de círculos y triángulos.
* **Interfaz Interactiva:** Permite a los usuarios ingresar las dimensiones de las figuras y ver los resultados al instante.
* **Diseño Responsivo:** Interfaz adaptable a diferentes tamaños de pantalla, ideal para dispositivos móviles.
* **Componentes Modulares:** La lógica para cada figura geométrica está encapsulada en su propio componente de Angular.
* **Jerarquía de Clases:** Utiliza una estructura de clases en TypeScript para modelar las figuras geométricas, promoviendo un código limpio y escalable.

## 🛠️ Tecnologías Utilizadas

* **Ionic Framework:** Un SDK de código abierto para crear aplicaciones móviles y de escritorio de alta calidad.
* **Angular:** Una plataforma para construir aplicaciones web del lado del cliente en HTML y TypeScript.
* **TypeScript:** Un superconjunto de JavaScript que añade tipado estático opcional.
* **SCSS:** Un preprocesador de CSS que añade características como variables y anidamiento.

## ⚙️ Instalación y Uso

Sigue estos pasos para ejecutar el proyecto en tu entorno local.

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (que incluye npm). Se recomienda la versión LTS.

### Pasos

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/victorsepulveda1994/app-perimetro.git](https://github.com/victorsepulveda1994/app-perimetro.git)
    cd app-perimetro
    ```

2.  **Instala las dependencias:**
    Utiliza npm para instalar todas las dependencias listadas en el archivo `package.json`.
    ```bash
    npm install
    ```

3.  **Ejecuta la aplicación en modo de desarrollo:**
    Este comando iniciará un servidor de desarrollo local y abrirá la aplicación en tu navegador por defecto. La aplicación se recargará automáticamente si realizas cambios en los archivos fuente.
    ```bash
    npm run start
    # O también puedes usar el comando de Ionic
    # ionic serve
    ```

4.  **Compila el proyecto para producción:**
    Para crear una versión optimizada de la aplicación para producción, ejecuta:
    ```bash
    npm run build
    ```
    Los archivos compilados se guardarán en el directorio `www/`.

## 📂 Estructura del Proyecto

El proyecto sigue la estructura estándar de una aplicación Angular con Ionic:

```
app-perimetro/
├── src/
│   ├── app/
│   │   ├── componentes/         # Componentes reutilizables
│   │   │   ├── circulo/
│   │   │   └── triangulo/
│   │   ├── modelos/             # Clases y modelos de datos
│   │   │   ├── Circulo.ts
│   │   │   ├── FiguraGeometrica.ts
│   │   │   └── TrianguloEscaleno.ts
│   │   ├── paginas/             # Páginas principales de la app
│   │   │   └── home/
│   │   ├── app.component.ts     # Componente raíz
│   │   ├── app.routes.ts        # Definición de rutas
│   │   └── ...
│   ├── assets/                  # Archivos estáticos (imágenes, íconos)
│   ├── environments/            # Configuración de entornos
│   ├── theme/                   # Variables de estilo globales
│   ├── global.scss              # Estilos globales
│   └── ...
├── www/                         # Carpeta de salida de la compilación
├── angular.json                 # Configuración del CLI de Angular
├── capacitor.config.ts          # Configuración de Capacitor
├── ionic.config.json            # Configuración de Ionic
├── package.json                 # Dependencias y scripts del proyecto
└── ...
```