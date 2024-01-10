import { AcervoArmas } from "./acervo.model";

export class CAC {
    public nome: string;
    public endereo: string;
    public num_cr: number;
    public val_cr: Date;
    public acervo_cac: AcervoArmas[];

    constructor(nome: string, endereco: string, num_cr: number, val_cr: Date, acervo: AcervoArmas[]) {
        this.nome = nome;
        this.endereo = endereco;
        this.num_cr = num_cr;
        this.val_cr = val_cr;
        this.acervo_cac = acervo;
    }
}