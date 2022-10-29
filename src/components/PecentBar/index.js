import './style.css';

export default function PercentBar({percentC1, percentC2, totalPercent, widthBar}) {

  return (
    <div id='bar_component'>
      <div id='percent' style={{ width: widthBar }}>
        <span>{ percentC1 }%</span>
        <span>{ percentC2 }%</span>
      </div>
      <div id='bar' style={{ width: widthBar }}>
        <div style={{width: `${totalPercent}px`}}></div>
      </div>
    </div>
  )
}