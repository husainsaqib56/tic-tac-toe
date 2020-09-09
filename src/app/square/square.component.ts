import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <button style=" background-color: #00FFCC;
  border-color: #a16eff;
  color: #ffffff;" nbButton *ngIf="!value">{{ value }}</button>
  <button style=" background-color: #00FFCC;
  border-color: #a16eff;
  color: #ffffff;" nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
  <button style=" background-color: #00FFCC;
  border-color: #a16eff;
  color: #ffffff;" nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; background-color: black }']
})
export class SquareComponent {

  @Input() value: 'X' | 'O';

}
