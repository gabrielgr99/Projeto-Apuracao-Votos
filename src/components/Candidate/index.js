import data from '../../data/apuracao.json';
import './style.css';

export default function Candidate({name}) {
  const candidato = data.return.data.candidatos.find((candidato) => candidato.candidato === name);

  return (
    <div className='candidate'>
      <img src={ candidato.foto } height='150px' alt='candidate' />
      <ul>
        <li>{candidato.candidato}</li>
        <li>{candidato.partido} - {candidato.num_candidato}</li>
        <li>{Number(candidato.total_votos).toLocaleString()}</li>
        <li>{candidato.votos_percent} %</li>
      </ul>
    </div>
  )
}