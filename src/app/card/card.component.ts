import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { type Card } from './card.model';

/**
 *  Represents a card component displaying card details. 
 *
 * @export
 * @class CardComponent
 * @typedef {CardComponent}
 */
@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  /** The card object containing relevant details. */
  card = input.required<Card>();

  /** Defines the time type for the card (daily, weekly, monthly). */
  timeType = input<string>();

  /**
   * Converts the `timeType` value into a human-readable format for display.
   *
   * @returns {string} 
   */
  getFormattedTimeType(): string {
    const timeTypeValue = this.timeType(); 
    if (timeTypeValue === 'weekly') return 'Week';
    if (timeTypeValue === 'monthly') return 'Month';
    if (timeTypeValue === 'daily') return 'Day';
    return timeTypeValue ?? ''; 
  }
}
