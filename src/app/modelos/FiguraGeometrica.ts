/**
 * Clase base abstracta para figuras geométricas.
 * Define el contrato para calcular el perímetro de cualquier figura geométrica.
 */
export abstract class FiguraGeometrica {
    /**
     * Método abstracto para calcular el perímetro de la figura geométrica.
     * Debe ser implementado por las subclases concretas.
     * @returns El perímetro de la figura geométrica.
     */
    abstract calcularPerimetro(): number;
}
