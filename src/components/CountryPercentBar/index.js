import data from '../../data/apuracao.json';
import PercentBar from '../PecentBar';

export default function CountryPercentBar() {
  const { candidatos } = data.return.data;
  const widthBar = 900;
  const PL = candidatos.find((candidate) => candidate.partido === 'PL');
  const PT = candidatos.find((candidate) => candidate.partido === 'PT');
  const PTpercent = Number(PT.votos_percent.replace(",", "."));
  const PLpercent = Number(PL.votos_percent.replace(",", "."));
  const totalPercent = (widthBar / (PTpercent + PLpercent)) * PTpercent;

  return (
    <PercentBar
      percentC1={ PTpercent }
      percentC2={ PLpercent }
      totalPercent={ totalPercent }
      widthBar={ widthBar }
    />
  )
}