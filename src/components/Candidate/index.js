import data from '../../data/apuracao.json';
import './style.css';

export default function Candidate({name}) {
  const candidato = data.return.data.candidatos.find((candidato) => candidato.candidato === name);

  return (
    <div id='candidate'>
      <img src={ candidato.foto } height='150px' alt='candidate' />
      <ul>
        <li>Nome: {candidato.candidato}</li>
        <li>Partido: {candidato.nome_partido}</li>
        <li>Número: {candidato.num_candidato}</li>
        <li>Votos: {candidato.total_votos}</li>
        <li>{candidato.votos_percent} %</li>
      </ul>
    </div>
  )
}