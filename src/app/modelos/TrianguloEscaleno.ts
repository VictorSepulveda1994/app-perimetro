import { FiguraGeometrica } from "./FiguraGeometrica";

/**
 * Representa un Triángulo Escaleno, extendiendo la clase FiguraGeometrica.
 * Proporciona la funcionalidad para calcular el perímetro de un triángulo escaleno.
 */
export class TrianguloEscaleno extends FiguraGeometrica {
    /**
     * La longitud del lado A del triángulo escaleno.
     */
    private ladoA: number;
    /**
     * La longitud del lado B del triángulo escaleno.
     */
    private ladoB: number;
    /**
     * La longitud del lado C del triángulo escaleno.
     */
    private ladoC: number;

    /**
     * Crea una instancia de TrianguloEscaleno.
     * @param ladoA La longitud del lado A.
     * @param ladoB La longitud del lado B.
     * @param ladoC La longitud del lado C.
     */
    constructor(ladoA: number, ladoB: number, ladoC: number) {
        super();
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    /**
     * Calcula el perímetro del triángulo escaleno.
     * @returns El perímetro del triángulo escaleno.
     */
    calcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC;
    }
}
