class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }

    toString(){
        return `
        Tipo Entrada: ${this._tipoEntrada}
        Marca: ${this._marca}`; 
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = Raton.contadorRatones++;
    }
    get idRaton(){
        return this._idRaton; 
    }

    toString(){
        return `
        Id Raton: ${this._idRaton}${super.toString()}
        `;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = Teclado.contadorTeclados++;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `
        Id Teclado: ${this._idTeclado}${super.toString()}
        `;
    }
}

class Monitor{
    static contadorMonitores = 0;

    constructor(marca, tamaño){
        this._idMonitor = Monitor.contadorMonitores++;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }

    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    toString(){
        return `
        Id Monitor: ${this._idMonitor}
        Marca Monitor: ${this._marca}
        Tamaño Monitor: ${this._tamaño}
        `;
    }
}

class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this._idComputadoras = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadoras(){
        return this._idComputadoras;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }

    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }

    get raton(){
        return this._raton;
    }

    set raton(raton){
        this._raton = raton;
    }

    toString(){
        return `
        Computadora ${this._idComputadoras}: | ${this._nombre} |

        Monitor: ${this._monitor}
        Raton: ${this._raton}
        Teclado: ${this._teclado}
        `;
    }
}

class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadorasOrden = '';
        for (let computadora of this._computadoras){
            computadorasOrden += computadora.toString();
        }
        console.log(`Orden N°: ${this._idOrden} | Computadoras: ${computadorasOrden}`);
    }

}

let monitor1 = new Monitor('Philips', 23);
let monitor2 = new Monitor('LG', 19);

let raton1 = new Raton('USB', 'Logitech');
let raton2 = new Raton('Bluetooth', 'HP');

let teclado1 = new Teclado('USB', 'HyperX');
let teclado2 = new Teclado('Wireless','Noga');

let computadora1 = new Computadora('Gamer', monitor1, teclado1, raton1);
let computadora2 = new Computadora('Work', monitor2, raton2, teclado2);
let computadora3 = new Computadora('Oficina', monitor1, raton2, teclado1);
let computadora4 = new Computadora('Salon', monitor2, raton1, teclado2);

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);

orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora3);
orden2.agregarComputadora(computadora4);
orden2.mostrarOrden();