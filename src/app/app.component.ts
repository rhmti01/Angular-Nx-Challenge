/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, signal, computed } from '@angular/core'; 
import { UserProfileComponent } from './user-profile/user-profile.component'; 
import { CardComponent } from './card/card.component'; 
import { statsCards } from './statscards'; 
import { timeframes } from './timeframes';


/**
 * Defining base app component
 *
 * @export
 * @class AppComponent
 * @typedef {AppComponent}
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserProfileComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.componenet.scss'],
})
export class AppComponent {
  /** Available time types for the cards. */
  timeTypes = signal(['daily', 'weekly', 'monthly']).asReadonly();

  /** The currently selected time type. */
  selectedTimeType = signal<'daily' | 'weekly' | 'monthly'>('weekly');

  /**
   * Computes the cards data based on the selected time type using computed signals.
   *
   * @type {*}
   */
  cardsData: any = computed(() => {
    const timeKey = this.selectedTimeType(); 

    return statsCards.map((card) => {
      const timeData = timeframes.find((t) => t.title.toLowerCase() === card.title.toLowerCase())?.timeframes[timeKey];

      return {
        ...card,
        current: timeData?.current || 0,
        previous: timeData?.previous || 0,
      };
    });
  });

  /**
   * Updates the selected time type
   *
   * @param {string} selectedType 
   */
  updateTimeframe(selectedType: string) {
      this.selectedTimeType.set(selectedType as 'daily' | 'weekly' | 'monthly');
  }
}
