import { Component } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";

interface MenuItem {
	icon: string;
	label: string;
	route: string;
	image: string;
	width: number;
	height: number;
}

@Component({
	selector: "app-sidebar",
	standalone: true,
	imports: [
		CommonModule,
		RouterModule,
		MatIconModule,
		MatListModule,
		NgOptimizedImage,
	],
	templateUrl: "./sidebar.html",
	styleUrls: ["./sidebar.scss"],
})
export class SidebarComponent {
	isExpanded = false;

	menuItems: MenuItem[] = [
		{
			icon: "home",
			label: "Para você",
			image: "assets/pravoce.png",
			width: 20,
			height: 22,
			route: "/home",
		},
		{
			icon: "article",
			label: "Conteúdos",
			image: "assets/conteudos.png",
			width: 22,
			height: 22,
			route: "/dashboard",
		},
		{
			icon: "calendar_month",
			label: "Mentoria",
			image: "assets/mentoria.png",
			width: 20,
			height: 22,
			route: "/calendar",
		},
		{
			icon: "model_training",
			label: "Treinamento",
			image: "assets/treinamento.png",
			width: 22,
			height: 22,
			route: "/training",
		},
		{
			icon: "analytics",
			label: "Métricas",
			image: "assets/metricas.png",
			width: 24,
			height: 24,
			route: "/metrics",
		},
	];

	toggleSidebar() {
		this.isExpanded = !this.isExpanded;
	}
}
