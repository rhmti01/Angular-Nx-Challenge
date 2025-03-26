import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  @Output() selectedDataType = new EventEmitter<string>();
  @Input({ required: true }) selectedType!: string;

  onSelectDataType(type: string) {
    this.selectedDataType.emit(type);
  }

  isSelected(type: string): boolean {
    return this.selectedType === type;
  }
}
