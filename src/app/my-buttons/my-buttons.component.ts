import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-buttons',
  standalone: true,
  imports: [],
  templateUrl: './my-buttons.component.html',
  styleUrl: './my-buttons.component.css'
})
export class MyButtonsComponent {

  @Input() NumberButton!: string;
  @Output() presionado = new EventEmitter<string>();

  presionar() {
    this.presionado.emit(this.NumberButton);
  }


}
