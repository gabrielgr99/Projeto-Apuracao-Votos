import { useState } from 'react';
import data from '../../data/apuracao.json';
import StateGraphic from '../StateGraphic';
import './style.css'

export default function RegionButton() {
  const { candidatos } = data.return.data;
  const [state, setState] = useState('rr');
  const { votos_estados } = data.return.data.candidatos[0];
  const states = Object.keys(votos_estados);

  return (
    <div>
      <div id="region-bottom">
        {
          states.map((initials) => (
            <button key={initials} onClick={() => setState(initials)}>{initials.toUpperCase()}</button>
          ))
        }
        <button style={{ width: 'max-content' }} key="todas">TODAS</button>
      </div>
      <h3 id="state-title">{candidatos[0].votos_estados[state].name}</h3>
      <StateGraphic initials={state} />
    </div>
  )
}