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
  @Input() timeType!: string; 

  getFormattedTimeType(): string {
    if (this.timeType === 'weekly') return 'Week';
    if (this.timeType === 'monthly') return 'Month';
    if (this.timeType === 'daily') return 'Day';
    return this.timeType;
  }
}
