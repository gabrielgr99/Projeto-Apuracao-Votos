import liveIcon from "../../images/live.png";
import "./style.css";

export default function Header() {
  return (
    <header>
      <div id="logo">
        <span>BR|News</span>
        <img src={ liveIcon } alt='live icon' height='80px' />
      </div>
      <h1>APURAÇÃO DOS VOTOS SEGUNDO TURNO <br /> PRESIDÊNCIA</h1>
    </header>
  )
}