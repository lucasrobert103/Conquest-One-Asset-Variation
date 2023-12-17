import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <mat-card class="page-not-found">
      <mat-card-content>
        <fa-icon
          [icon]="['fas', 'circle-exclamation']"
          size="5x"
          class="icon"
        ></fa-icon>

        <h1 class="title">A página não foi encontrada!</h1>
      </mat-card-content>

      <mat-card-actions>
        <button mat-raised-button color="primary" routerLink="/" class="btn-home">
          Ir para a home
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      :host {
        text-align: center;
      }

      .page-not-found {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px;
      }

      .icon {
        color: #1677ff;
      }

      .btn-home {
        background: #1677ff !important;
        margin-top: 30px;
      }

      .title {
        margin-top: 20px;
      }
    `,
  ],
})
export class PageNotFoundComponent {
}
