import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  bar = {
    type: 'bar',
    data: {
      labels: [
        `${i18n('dashboard.charts.day')} 1`,
        `${i18n('dashboard.charts.day')} 2`,
        `${i18n('dashboard.charts.day')} 3`,
        `${i18n('dashboard.charts.day')} 4`,
        `${i18n('dashboard.charts.day')} 5`,
      ],
      datasets: [
        {
          label: i18n('dashboard.charts.red'),
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 82],
        },
      ],
    },
    options: {
      legend: {
        display: true,
      },
      scales: {
        xAxes: [
          {
            display: false,
          },
        ],
        yAxes: [
          {
            display: true,
          },
        ],
      },
    },
  };

  mix2 = {
    type: 'bar',
    options: {
      responsive: true,
      tooltips: {
        mode: 'label',
      },
      elements: {
        line: {
          fill: false,
        },
      },
      scales: {
        xAxes: [
          {
            display: false,
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            type: 'linear',
            display: false,
            position: 'left',
            id: 'y-axis-1',
            gridLines: {
              display: false,
            },
          },
          {
            type: 'linear',
            display: true,
            position: 'right',
            id: 'y-axis-2',
            gridLines: {
              display: false,
            },
          },
        ],
      },
    },
    data: {
      labels: [
        i18n('dashboard.charts.months.1'),
        i18n('dashboard.charts.months.2'),
        i18n('dashboard.charts.months.3'),
        i18n('dashboard.charts.months.4'),
        i18n('dashboard.charts.months.5'),
        i18n('dashboard.charts.months.6'),
        i18n('dashboard.charts.months.7'),
      ],
      datasets: [
        {
          label: i18n('dashboard.charts.orange'),
          type: 'line',
          data: [51, 65, 40, 49, 60, 37, 40],
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-2',
        },
        {
          type: 'line',
          label: i18n('dashboard.charts.blue'),
          data: [200, 185, 590, 621, 250, 400, 95],
          fill: false,
          backgroundColor: '#36A2EB',
          borderColor: '#36A2EB',
          hoverBackgroundColor: '#36A2EB',
          hoverBorderColor: '#36A2EB',
          yAxisID: 'y-axis-1',
        },
      ],
    },
  };

  doughnut = {
    type: 'doughnut',
    data: {
      labels: [
        i18n('dashboard.charts.red'),
        i18n('dashboard.charts.blue'),
        i18n('dashboard.charts.yellow'),
      ],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
          ],
        },
      ],
    },
  };

  mix1 = {
    type: 'bar',
    options: {
      responsive: true,
      tooltips: {
        mode: 'label',
      },
      elements: {
        line: {
          fill: false,
        },
      },
      scales: {
        xAxes: [
          {
            display: false,
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            type: 'linear',
            display: false,
            position: 'left',
            id: 'y-axis-1',
            gridLines: {
              display: false,
            },
          },
          {
            type: 'linear',
            display: false,
            position: 'right',
            id: 'y-axis-2',
            gridLines: {
              display: false,
            },
          },
        ],
      },
    },

    data: {
      labels: [
        i18n('dashboard.charts.months.1'),
        i18n('dashboard.charts.months.2'),
        i18n('dashboard.charts.months.3'),
        i18n('dashboard.charts.months.4'),
        i18n('dashboard.charts.months.5'),
        i18n('dashboard.charts.months.6'),
        i18n('dashboard.charts.months.7'),
      ],
      datasets: [
        {
          label: i18n('dashboard.charts.orange'),
          type: 'line',
          data: [51, 65, 40, 49, 60, 37, 40],
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-2',
        },
        {
          type: 'bar',
          label: i18n('dashboard.charts.blue'),
          data: [200, 185, 590, 621, 250, 400, 95],
          fill: false,
          backgroundColor: '#36A2EB',
          borderColor: '#36A2EB',
          hoverBackgroundColor: '#36A2EB',
          hoverBorderColor: '#36A2EB',
          yAxisID: 'y-axis-1',
        },
      ],
    },
  };

  radar = {
    type: 'radar',
    options: {
      scale: {
        display: false,
      },
    },
    data: {
      labels: [
        i18n('dashboard.charts.eating'),
        i18n('dashboard.charts.drinking'),
        i18n('dashboard.charts.sleeping'),
        i18n('dashboard.charts.designing'),
        i18n('dashboard.charts.coding'),
        i18n('dashboard.charts.cycling'),
        i18n('dashboard.charts.running'),
      ],
      datasets: [
        {
          label: `${i18n('dashboard.charts.grey')}`,
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [65, 59, 90, 81, 56, 55, 40],
        },
        {
          label: `${i18n('dashboard.charts.red')}`,
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [28, 48, 40, 19, 96, 27, 100],
        },
      ],
    },
  };

  horizontalBar = {
    type: 'bar',
    options: {
      scales: {
        xAxes: [
          {
            display: false,
          },
        ],
        yAxes: [
          {
            display: true,
          },
        ],
      },
    },
    data: {
      labels: [
        i18n('dashboard.charts.months.1'),
        i18n('dashboard.charts.months.2'),
        i18n('dashboard.charts.months.3'),
        i18n('dashboard.charts.months.4'),
        i18n('dashboard.charts.months.5'),
        i18n('dashboard.charts.months.6'),
      ],
      datasets: [
        {
          label: i18n('dashboard.charts.red'),
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    },
  };

  polar = {
    type: 'polarArea',
    data: {
      datasets: [
        {
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#36A2EB',
          ],
        },
      ],
      labels: [
        i18n('dashboard.charts.red'),
        i18n('dashboard.charts.green'),
        i18n('dashboard.charts.yellow'),
        i18n('dashboard.charts.grey'),
        i18n('dashboard.charts.blue'),
      ],
    },
  };

  line = {
    type: 'line',
    options: {
      scales: {
        xAxes: [
          {
            display: false,
          },
        ],
        yAxes: [
          {
            display: true,
          },
        ],
      },
    },
    data: {
      labels: [
        i18n('dashboard.charts.months.1'),
        i18n('dashboard.charts.months.2'),
        i18n('dashboard.charts.months.3'),
        i18n('dashboard.charts.months.4'),
        i18n('dashboard.charts.months.5'),
        i18n('dashboard.charts.months.6'),
        i18n('dashboard.charts.months.7'),
      ],
      datasets: [
        {
          label: i18n('dashboard.charts.green'),
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    },
  };
}
