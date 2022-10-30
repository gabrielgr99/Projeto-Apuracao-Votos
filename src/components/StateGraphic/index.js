import data from '../../data/apuracao.json';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import './style.css';
import { useLayoutEffect } from 'react';

export default function StateGraphic() {
  const { candidatos } = data.return.data;

  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none",
        paddingLeft: 50,
        paddingRight: 40
      })
    );

    const data = [
      {
        name: candidatos[0].candidato,
        steps: Number(candidatos[0].total_votos),
        pictureSettings: {
          src: candidatos[0].foto
        }
      },
      {
        name: candidatos[1].candidato,
        steps: Number(candidatos[1].total_votos),
        pictureSettings: {
          src: candidatos[1].foto
        }
      }
    ];

    let yRenderer = am5xy.AxisRendererY.new(root, {});
    yRenderer.grid.template.set("visible", false);

    let yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "name",
        renderer: yRenderer,
        paddingRight:40
      })
    );

    let xRenderer = am5xy.AxisRendererX.new(root, {});
    xRenderer.grid.template.set("strokeDasharray", [3]);

    let xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        renderer: xRenderer
      })
    );

    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Income",
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: "steps",
        categoryYField: "name",
        sequencedInterpolation: true,
        calculateAggregates: true,
        maskBullets: false,
        tooltip: am5.Tooltip.new(root, {
          dy: -30,
          pointerOrientation: "vertical",
          labelText: "{valueX}"
        })
      })
    );
    
    series.columns.template.setAll({
      strokeOpacity: 0,
      cornerRadiusBR: 10,
      cornerRadiusTR: 10,
      cornerRadiusBL: 10,
      cornerRadiusTL: 10,
      maxHeight: 50,
      fillOpacity: 0.8
    });
    
    let currentlyHovered;
    
    series.columns.template.events.on("pointerover", function(e) {
      handleHover(e.target.dataItem);
    });
    
    series.columns.template.events.on("pointerout", function(e) {
      handleOut();
    });
    
    function handleHover(dataItem) {
      if (dataItem && currentlyHovered !== dataItem) {
        handleOut();
        currentlyHovered = dataItem;
        const bullet = dataItem.bullets[0];
        bullet.animate({
          key: "locationX",
          to: 1,
          duration: 600,
          easing: am5.ease.out(am5.ease.cubic)
        });
      }
    }
    
    function handleOut() {
      if (currentlyHovered) {
        const bullet = currentlyHovered.bullets[0];
        bullet.animate({
          key: "locationX",
          to: 0,
          duration: 600,
          easing: am5.ease.out(am5.ease.cubic)
        });
      }
    }
    
    
    const circleTemplate = am5.Template.new({});
    
    series.bullets.push(function(root, series, dataItem) {
      const bulletContainer = am5.Container.new(root, {});
      bulletContainer.children.push(
        am5.Circle.new(
          root,
          {
            radius: 34
          },
          circleTemplate
        )
      );
    
      const maskCircle = bulletContainer.children.push(
        am5.Circle.new(root, { radius: 27 })
      );
    
      // only containers can be masked, so we add image to another container
      const imageContainer = bulletContainer.children.push(
        am5.Container.new(root, {
          mask: maskCircle
        })
      );
    
      // not working
      imageContainer.children.push(
        am5.Picture.new(root, {
          templateField: "pictureSettings",
          centerX: am5.p50,
          centerY: am5.p50,
          width: 60,
          height: 60
        })
      );
    
      return am5.Bullet.new(root, {
        locationX: 0,
        sprite: bulletContainer
      });
    });
    
    // heatrule
    series.set("heatRules", [
      {
        dataField: "valueX",
        min: am5.color(0xe5dc36),
        max: am5.color(0x5faa46),
        target: series.columns.template,
        key: "fill"
      },
      {
        dataField: "valueX",
        min: am5.color(0xe5dc36),
        max: am5.color(0x5faa46),
        target: circleTemplate,
        key: "fill"
      }
    ]);
    
    series.data.setAll(data);
    yAxis.data.setAll(data);
    
    const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineX.set("visible", false);
    cursor.lineY.set("visible", false);
    
    cursor.events.on("cursormoved", function() {
      const dataItem = series.get("tooltip").dataItem;
      if (dataItem) {
        handleHover(dataItem)
      }
      else {
        handleOut();
      }
    })

    series.appear();
    chart.appear(1000, 100);

    root.current = root;

    return () => {
      root.dispose();
    };
  }, [])

  return (
    <div>
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    </div>
  )
}