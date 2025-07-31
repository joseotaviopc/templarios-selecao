import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, RouterOutlet } from "@angular/router";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { SidebarComponent } from "./components/layout/sidebar/sidebar";
import { RightSidebarComponent } from "./components/layout/right-sidebar/right-sidebar";
import { MainContentComponent } from "./components/layout/main-content/main-content";

@Component({
	selector: "app-root",
	imports: [
		CommonModule,
		RouterModule,
		RouterOutlet,
		MatSidenavModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		SidebarComponent,
		RightSidebarComponent,
		MainContentComponent,
	],
	templateUrl: "./app.html",
	styleUrls: ["./app.scss"],
})
export class App {
	protected readonly title = signal("test-templarios");
	isRightSidebarCollapsed = false;

	toggleRightSidebar() {
		this.isRightSidebarCollapsed = !this.isRightSidebarCollapsed;
	}
}
