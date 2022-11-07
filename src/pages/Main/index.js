import Candidate from "../../components/Candidate";
import CountryPercentBar from "../../components/CountryPercentBar";
import RegionPercentBar from "../../components/RegionPercentBar";
import "./style.css";
import liveIcon from "../../images/live.png";
import RegionButton from "../../components/RegionButton";
import data from '../../data/apuracao.json';

export default function Main() {
  const regionNames = ['norte', 'nordeste', 'centro-oeste', 'sul', 'sudeste'];
  const { candidatos } = data.return.data;
  return (
    <div>
      <header>
        <div id="logo">
          <span>BR|News</span>
          <img src={ liveIcon } alt='live icon' height='80px' />
        </div>
        <h1>APURAÇÃO DOS VOTOS SEGUNDO TURNO <br /> PRESIDÊNCIA</h1>
      </header>
      <article>
        <CountryPercentBar />
        <div id="candidates">
          { candidatos.map((candidate) => <Candidate name={candidate.candidato} />) }
        </div>
        <hr size="2" width="900px" color="#1d1f96" />
        <div id="region">
          <h3>Região</h3>
          <div id="region-bars">
            { regionNames.map((name) => <RegionPercentBar region={name} key={name} />) }
          </div>
        </div>
        <hr size="2" width="900px" color="#1d1f96" />
        <br />
        <div>
          <RegionButton />
        </div>
      </article>
      <footer></footer>
    </div>
  )
}