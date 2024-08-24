"use stric";

//* Imports
import UI from "./UI.js";

//* Instacias
const ui = new UI();

export default class Graphic {
	constructor () {}

	async getInfo() {
		try {
			const url = "data/data.json";
			const data = await fetch(url).then(res => res.json());
			ui.showInfo(data);
		} catch (err) {
			console.error("** A ocurrido un error en la peticion Fetch **", err);
		}
	}
}
