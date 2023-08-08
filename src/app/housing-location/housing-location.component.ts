import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}

// by mistake I wrote HousingLocationComponent instead pf HousingLocation next to housingLocation! and I got this error:
// src/app/home/home.component.ts:19:10 - error TS2741: Property 'housingLocation' is missing in type 'HousingLocation' but required in type 'HousingLocationComponent'.

// 19         [housingLocation]="housingLocation"
