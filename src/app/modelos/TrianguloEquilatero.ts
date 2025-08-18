import { FiguraGeometrica } from "./FiguraGeometrica";

/**
 * Representa un Triángulo Equilátero, extendiendo la clase FiguraGeometrica.
 * Proporciona la funcionalidad para calcular el perímetro de un triángulo equilátero.
 */
export class TrianguloEquilatero extends FiguraGeometrica {
    /**
     * La longitud de un lado del triángulo equilátero.
     */
    private lado: number;

    /**
     * Crea una instancia de TrianguloEquilatero.
     * @param lado La longitud de un lado del triángulo equilátero.
     */
    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    /**
     * Calcula el perímetro del triángulo equilátero.
     * @returns El perímetro del triángulo equilátero.
     */
    calcularPerimetro(): number {
        return 3 * this.lado;
    }
}
