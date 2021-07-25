import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <ul>
      <li *ngFor="let photo of photos">
        <p>{{ photo.title }}</p>
        <img
          *ngIf="photo.thumbnailUrl"
          [src]="photo.thumbnailUrl"
          [alt]="photo.title"
        />
        <span *ngIf="!photo.thumbnailUrl">thumbnail url is not available</span>
      </li>
    </ul>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
      span {
        background: yellow;
      }
    `
  ]
})
export class HelloComponent {
  @Input() photos;
}
