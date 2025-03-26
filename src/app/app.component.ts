import { Component, signal } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CardComponent } from './card/card.component';
import { statsCards } from './statscards';
import { timeframes } from './timeframes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserProfileComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.componenet.scss'],
})
export class AppComponent {
  timeTypes = ['daily', 'weekly', 'monthly'];
  selectedTimeType = signal<'daily' | 'weekly' | 'monthly'>('weekly');

  get cardsData() {
    const timeKey = this.selectedTimeType(); 

    return statsCards.map((card) => {
      const timeData = timeframes.find((t) => t.title.toLowerCase() === card.title.toLowerCase())?.timeframes[timeKey];

      return {
        ...card,
        current: timeData?.current || 0,
        previous: timeData?.previous || 0,
      };
    });
  }

  updateTimeframe(selectedType: string) {
    if (selectedType === 'daily' || selectedType === 'weekly' || selectedType === 'monthly') {
      this.selectedTimeType.set(selectedType);
    }
  }
}
