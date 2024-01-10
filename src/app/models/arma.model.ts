export class ArmaFogo {
    public fabricante: string;
    public modelo: string;
    public calibre: string;
    public num_serie: string;
    public num_craf: string;
    public validade_craf: Date;

    constructor(
        fabricante: string,
        modelo: string,
        calibre: string,
        num_serie: string,
        num_craf: string,
        validade_craf: Date) {

        this.fabricante = fabricante;
        this.modelo = modelo;
        this.calibre = calibre;
        this.num_serie = num_serie;
        this.num_craf = num_craf;
        this.validade_craf = validade_craf;
    }


}
