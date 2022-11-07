import { useState } from 'react';
import data from '../../data/apuracao.json';
import AllStatesGraphic from '../AllStatesGraphic';
import StateGraphic from '../StateGraphic';
import './style.css'

export default function RegionButton() {
  const { candidatos } = data.return.data;
  const [state, setState] = useState('rr');
  const { votos_estados } = candidatos[0];
  const states = Object.keys(votos_estados);

  return (
    <div>
      <div id="region-bottom">
        {
          states.map((initials) => (
            <button key={initials} onClick={() => setState(initials)}>{initials.toUpperCase()}</button>
          ))
        }
        <button style={{ width: 'max-content' }} key="todas" onClick={() => setState('todas')}>TODAS</button>
      {
        state !== 'todas' ?
        <StateGraphic initials={state} /> :
        <AllStatesGraphic />
      }
      </div>
    </div>
  )
}