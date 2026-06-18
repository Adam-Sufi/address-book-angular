import { Component } from '@angular/core';
import { List } from './list/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [List],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}