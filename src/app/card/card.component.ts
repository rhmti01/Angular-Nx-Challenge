import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { type card } from './card.model';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true }) card!: card;
}
