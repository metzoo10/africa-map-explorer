import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryDetail } from '../pays.model';

@Component({
  selector: 'app-pays-detail',
  imports: [CommonModule],
  templateUrl: './pays-detail.html',
  styleUrl: './pays-detail.css',
})
export class PaysDetail {
  @Input() country: CountryDetail | null = null;
  @Output() close = new EventEmitter<void>();
}
