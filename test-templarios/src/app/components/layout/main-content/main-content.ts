import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";

interface Card {
	id: number;
	title: string;
	icon: string;
	value: number;
}

@Component({
	selector: "app-main-content",
	standalone: true,
	imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		MatTableModule,
	],
	templateUrl: "./main-content.html",
	styleUrls: ["./main-content.scss"],
})
export class MainContentComponent {
	cards: Card[] = [
		{
			id: 1,
			title: "Aulas",
			icon: "assets/icon-play.png",
			value: 94,
		},
		{
			id: 2,
			title: "Apostila",
			icon: "assets/icon-book-open.png",
			value: 94,
		},
		{
			id: 3,
			title: "Questões",
			icon: "assets/icon-check-square.png",
			value: 34,
		},
	];
}
