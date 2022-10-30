import './style.css';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import data from '../../data/apuracao.json';
import { useLayoutEffect } from 'react';

export default function AllStatesGraphic() {
  const allStates = Object.keys(data.return.data.candidatos[0].votos_estados);
  const { candidatos } = data.return.data;

  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout,
        arrangeTooltips: false
      })
    );

    // Use only absolute numbers
    chart.getNumberFormatter().set("numberFormat", "#.#s");

    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
      })
    );

    let data = allStates.map((state) => (
      {
        votos: state.toUpperCase(),
        "JAIR BOLSONARO": -Number(candidatos[1].votos_estados[state].votos_percent.replace(",", ".")),
        "LULA": Number(candidatos[0].votos_estados[state].votos_percent.replace(",", ".")),
      }))
      
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "votos",
        renderer: am5xy.AxisRendererY.new(root, {
          inversed: true,
          cellStartLocation: 0.1,
          cellEndLocation: 0.9
        })
      })
    );

    yAxis.data.setAll(data);

    let xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {})
      })
    );

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function createSeries(field, labelCenterX, pointerOrientation, rangeValue) {
      let series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          xAxis: xAxis,
          yAxis: yAxis,
          valueXField: field,
          categoryYField: "votos",
          sequencedInterpolation: true,
          clustered: false,
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: pointerOrientation,
            labelText: "{categoryY}: {valueX}"
          })
        })
      );

      series.columns.template.setAll({
        height: am5.p100
      });

      series.bullets.push(function() {
        return am5.Bullet.new(root, {
          locationX: 1,
          locationY: 0.5,
          sprite: am5.Label.new(root, {
            centerY: am5.p50,
            text: "{valueX}",
            populateText: true,
            centerX: labelCenterX
          })
        });
      });

      series.data.setAll(data);
      series.appear();

      let rangeDataItem = xAxis.makeDataItem({
        value: rangeValue
      });
      xAxis.createAxisRange(rangeDataItem);
      rangeDataItem.get("grid").setAll({
        strokeOpacity: 1,
        stroke: series.get("stroke")
      });

      let label = rangeDataItem.get("label");
      label.setAll({
        text: field.toUpperCase(),
        fontSize: "1.1em",
        fill: series.get("stroke"),
        paddingTop: 10,
        isMeasured: false,
        centerX: labelCenterX
      });
      label.adapters.add("dy", function() {
        return -chart.plotContainer.height();
      });

      return series;
    }

    createSeries("JAIR BOLSONARO", am5.p100, "right", -60);
    createSeries("LULA", 0, "left", 60);

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "zoomY"
    }));
    cursor.lineY.set("forceHidden", true);
    cursor.lineX.set("forceHidden", true);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100); 

    // root.current = root;

    return () => {
      root.dispose();
    };
  })

  return (
    <div>
      <h3 id="state-title">Todos os estados</h3>
      <div id="chartdiv" className="all-states"></div>
    </div>
  )
}