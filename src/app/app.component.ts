import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyButtonsComponent } from './my-buttons/my-buttons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyButtonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pruebas';
  btnPress = '';
  recibido($event: string) {
    this.btnPress = $event;
  }
}
