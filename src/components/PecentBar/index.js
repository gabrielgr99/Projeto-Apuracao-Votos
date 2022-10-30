import './style.css';

export default function PercentBar({percentC1, percentC2, totalPercent, widthBar}) {

  return (
    <div className='bar-component'>
      <div className='percent' style={{ width: widthBar }}>
        <span>{ percentC1 }%</span>
        <span>{ percentC2 }%</span>
      </div>
      <div className='bar' style={{ width: widthBar }}>
        <div style={{width: `${totalPercent}px`}}></div>
      </div>
    </div>
  )
}