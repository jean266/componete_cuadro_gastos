"use stric";

//* Imports
import Graphic from "./Graphic.js";

//* Instancias
const graphic = new Graphic();

export default class App {
    constructor () {};

    initApp() {
        graphic.getInfo();
    }
}
