import data from '../../data/apuracao.json';
import PercentBar from '../PecentBar';
import './style.css';

export default function RegionPercentBar({region}) {
  const { candidatos } = data.return.data;
  const widthBar = 300;
  const PL = candidatos.find((candidate) => candidate.partido === 'PL');
  const PT = candidatos.find((candidate) => candidate.partido === 'PT');
  const PTpercent = Number(PT.votos_regiao[region]);
  const PLpercent = Number(PL.votos_regiao[region]);
  const totalPercent = (widthBar / (PTpercent + PLpercent)) * PTpercent;

  return (
    <div>
      <h4 className="region-title">{ region }</h4>
      <PercentBar
        percentC1={ PTpercent }
        percentC2={ PLpercent }
        totalPercent={ totalPercent }
        widthBar={ widthBar }
      />
    </div>
  )
}