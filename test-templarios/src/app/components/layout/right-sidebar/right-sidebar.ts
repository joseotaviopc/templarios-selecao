import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";

export interface Task {
	id: number;
	title: string;
	category: string;
	schedule: string;
	categoryIcon: string;
	completed: boolean;
}

@Component({
	selector: "app-right-sidebar",
	standalone: true,
	imports: [
		CommonModule,
		MatIconModule,
		MatListModule,
		MatButtonModule,
		NgOptimizedImage,
	],
	templateUrl: "./right-sidebar.html",
	styleUrls: ["./right-sidebar.scss"],
})
export class RightSidebarComponent {
	@Input() isCollapsed = false;
	@Output() toggleSidebar = new EventEmitter<void>();

	tasks: Task[] = [
		{
			id: 1,
			title: "Aula Cirurgia 1",
			category: "MEDCURSO",
			schedule: "14h00 - 16h00",
			categoryIcon: "assets/icon-video2.png",
			completed: true,
		},
		{
			id: 2,
			title: "Cirurgia Geral",
			category: "Category",
			schedule: "16h00 - 17h00",
			categoryIcon: "assets/icon-list.png",
			completed: false,
		},
		{
			id: 3,
			title: "Nefrologia",
			category: "Fazer Revisão",
			schedule: "17h00 - 18h00",
			categoryIcon: "assets/icon-bookmark.png",
			completed: false,
		},
		{
			id: 4,
			title: "Nefrologia",
			category: "Fazer Revisão",
			schedule: "17h00 - 18h00",
			categoryIcon: "assets/icon-bookmark.png",
			completed: false,
		},
		{
			id: 5,
			title: "Nefrologia",
			category: "Fazer Revisão",
			schedule: "17h00 - 18h00",
			categoryIcon: "assets/icon-bookmark.png",
			completed: false,
		},
		{
			id: 6,
			title: "Nefrologia",
			category: "Fazer Revisão",
			schedule: "17h00 - 18h00",
			categoryIcon: "assets/icon-bookmark.png",
			completed: false,
		},
		{
			id: 7,
			title: "Nefrologia",
			category: "Fazer Revisão",
			schedule: "17h00 - 18h00",
			categoryIcon: "assets/icon-bookmark.png",
			completed: false,
		},
		{
			id: 8,
			title: "Nefrologia",
			category: "Fazer Revisão",
			schedule: "17h00 - 18h00",
			categoryIcon: "assets/icon-bookmark.png",
			completed: false,
		},
		{
			id: 9,
			title: "Nefrologia",
			category: "Fazer Revisão",
			schedule: "17h00 - 18h00",
			categoryIcon: "assets/icon-bookmark.png",
			completed: false,
		},
		{
			id: 10,
			title: "Nefrologia",
			category: "Fazer Revisão",
			schedule: "17h00 - 18h00",
			categoryIcon: "assets/icon-bookmark.png",
			completed: false,
		},
		{
			id: 11,
			title: "Nefrologia",
			category: "Fazer Revisão",
			schedule: "17h00 - 18h00",
			categoryIcon: "assets/icon-bookmark.png",
			completed: false,
		},
	];

	// onToggleClick() {
	// 	this.isCollapsed = !this.isCollapsed;
	// }

	toggleTaskCompletion(task: Task) {
		task.completed = !task.completed;
	}
}
