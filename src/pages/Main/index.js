import Candidate from "../../components/Candidate";
import CountryPercentBar from "../../components/CountryPercentBar";
import RegionPercentBar from "../../components/RegionPercentBar";
import "./style.css";
import liveIcon from "../../images/live.png";
import RegionButton from "../../components/RegionButton";

export default function Main() {
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
          <Candidate name='LULA' />
          <Candidate name='JAIR BOLSONARO' />
        </div>
        <div id="region">
          <h3>Região</h3>
          <div id="region-bars">
            <RegionPercentBar region='norte' />
            <RegionPercentBar region='nordeste'/>
            <RegionPercentBar region='centro-oeste'/>
            <RegionPercentBar region='sul'/>
            <RegionPercentBar region='sudeste'/>
          </div>
        </div>
        <div>
          <RegionButton />
        </div>
      </article>
      <footer></footer>
    </div>
  )
}