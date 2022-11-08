import Candidate from "../../components/Candidate";
import CountryPercentBar from "../../components/CountryPercentBar";
import RegionPercentBar from "../../components/RegionPercentBar";
import "./style.css";
import RegionButton from "../../components/RegionButton";
import data from '../../data/apuracao.json';
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Main() {
  const regionNames = ['norte', 'nordeste', 'centro-oeste', 'sul', 'sudeste'];
  const { candidatos } = data.return.data;
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  )
}