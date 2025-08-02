import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
	selector: "app-products-modal",
	imports: [MatIconModule, CommonModule],
	templateUrl: "./app-products-modal.html",
	styleUrl: "./app-products-modal.scss",
})
export class AppProductsModal {
	@Input() open = false;
	@Output() toggleProductsModal = new EventEmitter<void>();

	products = [
		{ id: 1, name: "2022 MEDCURSO", image: "assets/footericon.png" },
		{ id: 2, name: "2022 MED", image: "assets/medicon.png" },
		{ id: 3, name: "2022 RACIPE", image: "assets/racipeicon.png" },
		{ id: 4, name: "2021 CPMED", image: "assets/cpmedicon.png" },
	];
}
