import data from '../../data/apuracao.json';
import StateGraphic from '../StateGraphic';
import './style.css'

export default function RegionButton() {
  const { votos_estados } = data.return.data.candidatos[0];
  const states = Object.keys(votos_estados);

  return (
    <div>
      <div id="region-bottom">
        {
          states.map((initials) => <button key={initials}>{initials.toUpperCase()}</button>)
        }
        <button style={{ width: 'max-content' }} key="todas">TODAS</button>
      </div>
      <StateGraphic />
    </div>
  )
}