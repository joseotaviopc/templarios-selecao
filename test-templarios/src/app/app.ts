import { Component, signal } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { RouterModule, RouterOutlet } from "@angular/router";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { SidebarComponent } from "./components/layout/sidebar/sidebar";
import { RightSidebarComponent } from "./components/layout/right-sidebar/right-sidebar";
import { MainContentComponent } from "./components/layout/main-content/main-content";
import { AppProductsModal } from "./components/layout/app-products-modal/app-products-modal";
import { AppThemeModal } from "./components/layout/app-theme-modal/app-theme-modal";

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
		AppProductsModal,
		AppThemeModal,
		NgOptimizedImage,
	],
	templateUrl: "./app.html",
	styleUrls: ["./app.scss"],
})
export class App {
	protected readonly title = signal("test-templarios");
	isRightSidebarCollapsed = false;
	productsModalOpen = false;
	themeModalOpen = false;

	toggleRightSidebar() {
		this.isRightSidebarCollapsed = !this.isRightSidebarCollapsed;
	}

	toggleProductsModal() {
		this.productsModalOpen = !this.productsModalOpen;
	}

	toggleThemeModal() {
		this.themeModalOpen = !this.themeModalOpen;
	}
}
