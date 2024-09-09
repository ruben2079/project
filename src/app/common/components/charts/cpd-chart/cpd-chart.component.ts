import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Subject, of, switchMap, take, takeUntil } from 'rxjs';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { VfRemotingManagerService } from 'src/app/services/vf-remoting-manager.service';

@Component({
  selector: 'app-cpd-chart',
  templateUrl: './cpd-chart.component.html',
  styleUrls: ['./cpd-chart.component.scss']
})
export class CpdChartComponent implements OnInit {
  private chart: Chart | undefined | null;
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  public garpCyan: string = '#00A2DD';
  public garpSaffrons: string = '#FBB515';
  public slateGray: string = '##666B6B';
  public scrCreditsRemaining: number = 0;
  public scrCompleted: number = 0;
  public labels: string[] = [];
  public completedCPD: number[] = [];
  public remainingCPD: number[] = [];
  public backgroundColor: string[] = [];
  public borderColor: string[] = [];

  public showCPDInfo: boolean = false;

  private destroyed$ = new Subject<void>();

  @Output() dataError = new EventEmitter<Error>();

  constructor(private vfService: VfRemotingManagerService, private utilities: UtilitiesService) { }

  ngOnInit(): void {
    this.utilities.getComponentCPDInfo()
    .pipe(
      take(1),
      takeUntil(this.destroyed$),
      switchMap(data => {
        if (data === null) {
          return this.vfService.getComponentCPDInfo();
        } else {
          return of(data);
        }
      })
    ).subscribe((data: any) => {
      this.utilities.setComponentCPDInfo(data);
      if (data instanceof Error) {
        console.error(data);
        return;
      }

      this.showCPDInfo = data.statusCode !== 401 && data.statusCode !== null;

      // Set up configuration for CPD chart based on User's CPD data
      if (data.frmCompleted !== null && data.frmCompleted !== undefined) {
        this.labels.push('FRM');
        this.completedCPD.push(data?.frmCompleted);
        this.remainingCPD.push(data?.frmTotalNeeded - data?.frmCompleted);
        this.backgroundColor.push(this.garpCyan);
        this.borderColor.push(this.garpCyan);
      }
      if (data.scrCompleted !== null && data.scrCompleted !== undefined) {
        this.labels.push('SCR');
        this.completedCPD.push(data?.scrCompleted);
        this.remainingCPD.push(data?.scrTotalNeeded - data?.scrCompleted);
        this.backgroundColor.push(this.garpSaffrons);
        this.borderColor.push(this.garpSaffrons);
      }
      this.chart?.update();
    });
  }

  ngAfterViewInit(): void {
    this.generateChart();
  }

  generateChart(test?: boolean) {
    // For test purposes only
    // if(test) {
    //   this.labels = ['FRM', 'SCR'];
    //   this.completedCPD = [26, 15];
    //   this.remainingCPD = [14, 15];
    //   this.backgroundColor = [this.garpCyan, this.garpSaffrons];
    //   this.borderColor = [this.garpCyan, this.garpSaffrons];
    // }

    Chart.register(ChartDataLabels);

    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Current CPD',
            data: this.completedCPD,
            backgroundColor: this.backgroundColor,
            borderColor: this.borderColor,
            borderWidth: 1,
            borderRadius: 5
          },
          {
            label: 'Remaining CPD',
            data: this.remainingCPD,
            backgroundColor: [this.slateGray],
            borderColor: ['rgba(201, 203, 207, 1)', 'rgba(201, 203, 207, 1)'],
            borderWidth: 1,
            borderRadius: 5
          },
        ],
      },
      options: {
        responsive: false,
        indexAxis: 'y',
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        },
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            color: 'white',
            font: {
              family: 'Arial',
              weight: 'bold',
              size: 12
            }
          }
        },
      }
    });
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
