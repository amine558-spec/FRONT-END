import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-chart-rm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart-rm.html',
  styleUrls: ['./chart-rm.scss']
})
export class ChartRmComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    this.chart = new Chart('MyChart', {
      type: 'line',
      data: {
        labels: ['J-30', 'J-25', 'J-20', 'J-15', 'J-10', 'J-5', 'Aujourd\'hui'],
        datasets: [
          {
            label: 'Évolution du 1RM - Développé Couché (kg)',
            data: [80, 82.5, 85, 85, 87.5, 90, 92.5],
            backgroundColor: 'rgba(201, 243, 29, 0.35)',
            borderColor: '#151714',
            borderWidth: 3,
            fill: true,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: { color: '#151714' }
          }
        },
        scales: {
          x: { ticks: { color: '#7e8179' }, grid: { color: 'rgba(21, 23, 20, 0.1)' } },
          y: { ticks: { color: '#7e8179' }, grid: { color: 'rgba(21, 23, 20, 0.1)' } }
        }
      }
    });
  }
}
