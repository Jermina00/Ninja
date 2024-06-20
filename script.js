class Ninja {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 100;
        this.velocidad = 3;
        this.fuerza = 3; 
    }

    sayName() {
        console.log(`Nombre: ${this.nombre}`);
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Salud: ${this.salud}`);
        console.log(`Velocidad: ${this.velocidad}`);
        console.log(`Fuerza: ${this.fuerza}`);
    }

    drinkSake() {
        this.salud += 10;
    }
}
// segunda parte
class Sensei extends Ninja{
    constructor(nombre){
        super(nombre);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
    }
    showStats() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Salud: ${this.salud}`);
        console.log(`Velocidad: ${this.velocidad}`);
        console.log(`Fuerza: ${this.fuerza}`);
        console.log(`Sabiduría: ${this.sabiduria}`);
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
