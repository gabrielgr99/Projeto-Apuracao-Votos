import data from '../../data/apuracao.json';
import PercentBar from '../PecentBar';

export default function CountryPercentBar() {
  const { candidatos } = data.return.data;
  const widthBar = 900;
  const percentC1 = Number(candidatos[0].votos_percent.replace(",", "."));
  const percentC2 = Number(candidatos[1].votos_percent.replace(",", "."));
  const totalPercent = (widthBar / (percentC1 + percentC2)) * percentC1;

  return (
    <PercentBar
      percentC1={ percentC1 }
      percentC2={ percentC2 }
      totalPercent={ totalPercent }
      widthBar={ widthBar }
    />
  )
}