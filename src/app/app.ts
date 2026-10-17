import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Telescope } from 'lucide-angular';
import { HttpClient } from '@angular/common/http';
import { PaysDetail } from './pays-detail/pays-detail';
import { AfricaMap } from './africa-map/africa-map';
import { CountryDetail } from './pays.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, LucideAngularModule, PaysDetail, AfricaMap],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  implements OnInit {
  readonly telescopeIcon = Telescope;

  private http = inject(HttpClient);
  countriesData: Record<string, CountryDetail> = {};
  selectedCountry: CountryDetail | null = null;

  ngOnInit() {
    this.http.get<Record<string, CountryDetail>>('/assets/countries.json').subscribe({
      next: (data) => {
        this.countriesData = data;
      },
      error: (err) => console.error('Erreur lors du chargement des pays :', err)
    });
  }

  selectCountry(countryId: string): void {
    this.selectedCountry = this.countriesData[countryId] || null;
  }
}
