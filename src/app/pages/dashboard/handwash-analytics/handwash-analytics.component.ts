import { Component, OnDestroy } from '@angular/core';
import { HandWashAnalyticsData, OutlineData } from 'src/app/@core/data/handwashAnalyticsData';
import { NbThemeService } from '@nebular/theme';
import { forkJoin } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-handwash-analytics',
  templateUrl: './handwash-analytics.component.html',
  styleUrls: ['./handwash-analytics.component.scss']
})
export class HandwashAnalyticsComponent implements OnDestroy {

  private alive = true;

  pieChartValue: number;
  chartLegend: {iconColor: string; title: string}[];
  handWashAnalyticsData: { innerLine: number[]; outerLine: OutlineData[]; };

  constructor(private themeService: NbThemeService,
              private handWashAnalyticsChartService: HandWashAnalyticsData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.setLegendItems(theme.variables.handWashLegend);
      });

    // tslint:disable-next-line: deprecation
    forkJoin(
      this.handWashAnalyticsChartService.getInnerLineChartData(),
      this.handWashAnalyticsChartService.getOutlineLineChartData(),
      this.handWashAnalyticsChartService.getPieChartData(),
    )
      .pipe(takeWhile(() => this.alive))
      .subscribe(([innerLine, outerLine, pieChartValue]: [number[], OutlineData[], number]) => {
        this.handWashAnalyticsData = {
          innerLine: innerLine,
          outerLine: outerLine,
        };

        this.pieChartValue = pieChartValue;
      });
  }

  setLegendItems(handWashLegend): void {
    this.chartLegend = [
      {
        iconColor: handWashLegend.firstIcon,
        title: 'Validated hands wash',
      },
      {
        iconColor: handWashLegend.secondIcon,
        title: 'None validated hands wash',
      },
    ];
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
