"use stric";

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

export default class UI {
	constructor () {}

	showInfo(data) {
		data.forEach(info => {
			const day = document.querySelector(`#${info.day}`);
			const amount = Math.round(info.amount);
			let currentDay = new Date().getDay() -1;
			currentDay = days[currentDay];

			day.style.height = `${amount * 2}px`;

			if(day.id === currentDay) day.classList.add("current_day");

			day.addEventListener("mouseover", () => {
				this.showAmount(day, info.amount);
			});
			day.addEventListener("mouseleave", () => {
				this.removeAmount();
			});
		});
	}

	showAmount(day, amount) {
		this.removeAmount();

		const containerInfo = document.createElement("SPAN");

		containerInfo.classList.add("amount");
		containerInfo.textContent = `$${amount}`;

		day.parentElement.appendChild(containerInfo);
	}

	removeAmount() {
		const amountModal = document.querySelector(".amount");
		if(amountModal) amountModal.remove();
	}
}
