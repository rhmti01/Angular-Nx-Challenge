import { Component } from '@angular/core';
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { CardComponent } from "./card/card.component";
import { statsCards } from "./statscards";


@Component({
  imports: [UserProfileComponent, CardComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.componenet.scss',
})
export class AppComponent {
  cardsData = statsCards;
}
