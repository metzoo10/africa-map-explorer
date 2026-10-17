import { Component, Inject, Input, Output, EventEmitter, ElementRef, PLATFORM_ID, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-africa-map',
  imports: [CommonModule],
  templateUrl: './africa-map.html',
  styleUrl: './africa-map.css',
})
export class AfricaMap implements AfterViewInit, OnChanges {
  @Input() selectedCountryId: string | null = null;
  @Output() countrySelected = new EventEmitter<string>();

  constructor(private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    this.updateMapSelection();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCountryId']) {
      this.updateMapSelection();
    }
  }

  onSvgClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const elementWithId = target.closest('[id]');
    
    if (elementWithId && elementWithId.id) {
      this.countrySelected.emit(elementWithId.id);
    }
  }

  private updateMapSelection(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const svgElement = this.elementRef.nativeElement as HTMLElement;
    if (!svgElement) return;

    const elements = svgElement.querySelectorAll('path, circle');
    
    Array.from(elements).forEach((el) => {
      if (el.id === this.selectedCountryId) {
        el.classList.add('selected');
      } else {
        el.classList.remove('selected');
      }
    });
  }

  islandCountries = [
    { id: 'CV', name: 'Cap-Vert' },
    { id: 'MU', name: 'Maurice' },
    { id: 'SC', name: 'Seychelles' },
    { id: 'KM', name: 'Comores' },
    { id: 'ST', name: 'Sao Tomé' }
  ];

  onSelectIsland(islandId: string): void {
    this.countrySelected.emit(islandId);
  }
}
