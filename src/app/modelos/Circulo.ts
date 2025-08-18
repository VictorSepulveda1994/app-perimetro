import { FiguraGeometrica } from "./FiguraGeometrica";

/**
 * Representa un Círculo, extendiendo la clase FiguraGeometrica.
 * Proporciona la funcionalidad para calcular el perímetro de un círculo.
 */
export class Circulo extends FiguraGeometrica {
    /**
     * El radio del círculo.
     */
    private radio: number;

    /**
     * Crea una instancia de Círculo.
     * @param radio El radio del círculo.
     */
    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    /**
     * Calcula el perímetro del círculo.
     * @returns El perímetro del círculo.
     */
    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}
