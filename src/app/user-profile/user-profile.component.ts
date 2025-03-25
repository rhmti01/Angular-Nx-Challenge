import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { timeframes } from '../timeframes';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  
  onSelectDataType() {
    console.log('clicked');
    // this.selectedDataType.set('monthly');
  }
}
