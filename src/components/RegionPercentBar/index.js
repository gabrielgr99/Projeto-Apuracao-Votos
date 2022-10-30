import data from '../../data/apuracao.json';
import PercentBar from '../PecentBar';
import './style.css';

export default function RegionPercentBar({region}) {
  const { candidatos } = data.return.data;
  const widthBar = 300;
  const percentC1 = Number(candidatos[0].votos_regiao[region]);
  const percentC2 = Number(candidatos[1].votos_regiao[region]);
  const totalPercent = (widthBar / (percentC1 + percentC2)) * percentC1;

  return (
    <div>
      <h4 className="region-title">{ region }</h4>
      <PercentBar
        percentC1={ percentC1 }
        percentC2={ percentC2 }
        totalPercent={ totalPercent }
        widthBar={ widthBar }
      />
    </div>
  )
}