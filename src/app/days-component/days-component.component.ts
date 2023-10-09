import { Component } from '@angular/core';

@Component({
  selector: 'app-days-component',
  templateUrl: './days-component.component.html',
  styleUrls: ['./days-component.component.css']
})

export class DaysComponentComponent {
  days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

}
