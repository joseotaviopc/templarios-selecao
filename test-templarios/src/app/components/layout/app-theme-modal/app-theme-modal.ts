import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-theme-modal',
  imports: [MatIconModule, CommonModule],
  templateUrl: './app-theme-modal.html',
  styleUrl: './app-theme-modal.scss'
})
export class AppThemeModal {
  @Input() open = false;
  @Output() toggleThemeModal = new EventEmitter<void>();

  themes = [
    { id: 1, name: "Modo Escuro", image: "assets/modoescuro.png" },
    { id: 2, name: "Modo Claro", image: "assets/modoclaro.png" },
  ]
}
