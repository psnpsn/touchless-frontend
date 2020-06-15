import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compliance-advanced-pie',
  templateUrl: './compliance-advanced-pie.component.html',
  styleUrls: ['./compliance-advanced-pie.component.scss']
})
export class ComplianceAdvancedPieComponent {

  single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },
      {
      "name": "UK",
      "value": 6200000
    }
  ];
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
