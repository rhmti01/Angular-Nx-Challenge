import { Component, output, input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Change user stats component
 *
 * @export
 * @class UserProfileComponent
 * @typedef {UserProfileComponent}
 */
@Component({
  selector: 'app-user-profile',
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  
  /** Emits the selected data type. */
  selectedDataType = output<string>();
  /** The currently selected type. */
  selectedType = input<string>(); 

  /**
   * Emits the selected data type when a new type is chosen. 
   *
   * @param {string} type 
   */
  onSelectDataType(type: string) {
    this.selectedDataType.emit(type);
  }

  /**
   * Checks if the given type is the currently selected one
   *
   * @param {string} type 
   * @returns {boolean} 
   */
  isSelected(type: string): boolean {
    return this.selectedType() === type; 
  }
}
