import { type ComponentFixture, TestBed } from "@angular/core/testing";

import { AppProductsModal } from "./app-products-modal";

describe("AppProductsModal", () => {
	let component: AppProductsModal;
	let fixture: ComponentFixture<AppProductsModal>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AppProductsModal],
		}).compileComponents();

		fixture = TestBed.createComponent(AppProductsModal);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
