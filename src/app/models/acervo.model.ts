import { ArmaFogo } from "./arma.model";
export class AcervoArmas {
    public categoria: string;
    public armas: ArmaFogo[];

    constructor(categoria: string, armas: ArmaFogo[]) {
        this.categoria = categoria;
        this.armas = armas;
    }

}