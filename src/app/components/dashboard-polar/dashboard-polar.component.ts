import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-polar',
  templateUrl: './dashboard-polar.component.html',
  styleUrls: ['./dashboard-polar.component.css']
})
export class DashboardPolarComponent implements OnInit {
  data: any;
  options: any;

  constructor() { }

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    
    this.data = {
        datasets: [
            {
                data: [11, 16],
                backgroundColor: [
                    documentStyle.getPropertyValue('--red-500'),
                    documentStyle.getPropertyValue('--green-500'),
                ],
                label: 'SERVIES AND JOBS DATA'
            }
        ],
        labels: ['JOBS', 'SERVICES']
    };
    
    this.options = {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            r: {
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
  }

}
