//* CLASSE ASTRATTA
abstract class LavoratoreAutonomo {

    codRedd: number;
    redditoAnnuoLordo: number;
    tasseInps: number;
    tasseIrpef: number;

    professione: string;

    constructor(codRedd: number, redditoAnnuoLordo: number, tasseInps: number, tasseIrpef: number, professione: string) {
        this.codRedd = codRedd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
        this.professione = professione;
    }

    abstract getUtileTasse(): number;
    abstract getTasselnps(): number;
    abstract getTasselrpef(): number;
    abstract getRedditoAnnuoNetto(): void;

}

//* CLASSE MURATORE
class MuratoreAutonomo extends LavoratoreAutonomo{

    mattoni: number;

    constructor(redditoAnnuoLordo:number, mattoni:number){
        super(0.3, redditoAnnuoLordo, 0.1, 0.12, "Muratore");
        this.mattoni = mattoni;
    }

    beiMattoni():void{
        if(this.mattoni >= 50000){
            console.log("COMPLIMENTI HAI USATO TANTI MATTONI")
        }else{
            console.log("POCHI MATTONI, POTEVI FARE DI MEGLIO")
        }
    }
    getUtileTasse(): number {
        return this.redditoAnnuoLordo * this.codRedd
    }
    getTasselnps(): number {
        return this.getUtileTasse() * this.tasseInps
    }
    getTasselrpef(): number {
        return this.getUtileTasse() * this.tasseIrpef
    }
    getRedditoAnnuoNetto(): void {
        let redditoNetto = this.redditoAnnuoLordo - this.getTasselnps() - this.getTasselrpef()
        this.beiMattoni()
        console.log("IL TUO REDDITO NETTO:")
        console.log(redditoNetto + "$")
    }

}

// NEW MURATORE AUTONOMO
let AlfredoMuratoreAutonomo = new MuratoreAutonomo(90000, 400)
console.log("Data la professione di: " + AlfredoMuratoreAutonomo.professione)
console.log("Con un reddito lordo di: " + AlfredoMuratoreAutonomo.redditoAnnuoLordo)

AlfredoMuratoreAutonomo.getRedditoAnnuoNetto()

console.log("Hai pagato all'INPS: " + AlfredoMuratoreAutonomo.getTasselnps() + "$")
console.log("Hai pagato per l'IRPEF: " + AlfredoMuratoreAutonomo.getTasselrpef() + "$")

//* CLASSE INFORMATICO 
class InformaticoAutonomo extends LavoratoreAutonomo{


    constructor(redditoAnnuoLordo:number){
        super(0.75, redditoAnnuoLordo, 0.15, 0.16, "Informatico");
        this.redditoAnnuoLordo = redditoAnnuoLordo;
    }

    getUtileTasse(): number {
        return this.redditoAnnuoLordo * this.codRedd
    }
    getTasselnps(): number {
        return this.getUtileTasse() * this.tasseInps
    }
    getTasselrpef(): number {
        return this.getUtileTasse() * this.tasseIrpef
    }
    getRedditoAnnuoNetto(): void {
        let redditoNetto = this.redditoAnnuoLordo - this.getTasselnps() - this.getTasselrpef()
        console.log("IL TUO REDDITO NETTO:")
        console.log(redditoNetto + "$")
    }

}



// NEW INFORMATICO AUTONOMO
let GiovanniInformaticoAutonomo = new InformaticoAutonomo(70000)
console.log("Data la professione di: " + GiovanniInformaticoAutonomo.professione)
console.log("Con un reddito lordo di: " + GiovanniInformaticoAutonomo.redditoAnnuoLordo)

GiovanniInformaticoAutonomo.getRedditoAnnuoNetto()

console.log("Hai pagato all'INPS: " + GiovanniInformaticoAutonomo.getTasselnps() + "$")
console.log("Hai pagato per l'IRPEF: " + GiovanniInformaticoAutonomo.getTasselrpef() + "$")
