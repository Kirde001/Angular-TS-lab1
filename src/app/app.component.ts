import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss'
})
export class AppComponent {
  public title: string = 'Лабораторная работа №1';
  public fullname: string = 'Поляков Кирилл';
  public group: string = 'КС-22-03';
  public email: string = 'Kirde001@gmail.com';
  public phone: string = '+79163834374';
  public count: number = 0;

  public click(): void {
    this.count++;
  }
}