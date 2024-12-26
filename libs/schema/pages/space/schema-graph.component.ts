import { CommonModule, DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  Component,
  ElementRef,
  Inject,
} from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'bp-schema-graph',
  imports: [CommonModule],
  template: `<p>schema-graph works!</p>
    <div class="mGraph-wrapper w-full">
      <div
        class="mGraph w-full"
        id="mGraph_sale"></div>
    </div>`,
  styles: `
    .mGraph-wrapper {
      width: 100%;
      height: 239px;
      background: #fff;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .mGraph-wrapper .mGraph {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  `,

})
export class SchemaGraphComponent {
  constructor(
    private elm: ElementRef,
    @Inject(DOCUMENT) private _document: Document
  ) {
    afterNextRender(() => {
      const w = this._document.getElementById('mGraph_sale');
      const myChart = echarts.init(w);
      myChart.on('click', function (params) {
        console.log(params);
        if (params.componentType === 'markPoint') {
          // Clicked on the markPoint
          if (params.seriesIndex === 5) {
            // clicked on the markPoint of the series with index = 5
          }
        } else if (params.componentType === 'series') {
          if (params.seriesType === 'graph') {
            if (params.dataType === 'edge') {
              // clicked at the edge of graph.
            } else {
              // clicked at the node of graph.
            }
          }
        }
      });
      myChart.setOption({
        title: {
          text: 'Basic Graph',
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            label: {
              show: true,
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              fontSize: 20,
            },
            data: [
              {
                name: 'Node 1',
                x: 300,
                y: 300,
              },
              {
                name: 'Node 2',
                x: 800,
                y: 300,
              },
              {
                name: 'Node 3',
                x: 550,
                y: 100,
              },
              {
                name: 'Node 4',
                x: 550,
                y: 500,
              },
            ],
            // links: [],
            links: [
              {
                source: 0,
                target: 1,
                symbolSize: [5, 20],
                label: {
                  show: true,
                },
                lineStyle: {
                  width: 5,
                  curveness: 0.2,
                },
              },
              {
                source: 'Node 2',
                target: 'Node 1',
                label: {
                  show: true,
                },
                lineStyle: {
                  curveness: 0.2,
                },
              },
              {
                source: 'Node 1',
                target: 'Node 3',
              },
              {
                source: 'Node 2',
                target: 'Node 3',
              },
              {
                source: 'Node 2',
                target: 'Node 4',
              },
              {
                source: 'Node 1',
                target: 'Node 4',
              },
            ],
            lineStyle: {
              opacity: 0.9,
              width: 2,
              curveness: 0,
            },
          },
        ],
      });
    });
  }
}
