import './style.css';

export default function Footer() {
  const linkedinIcon = "https://img.icons8.com/color/48/undefined/linkedin.png";
  const githubIcon = "https://img.icons8.com/ios/50/ffffff/github--v1.png";
  const portfolioIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEkElEQVR4nO2aW2gcVRjH/9+ZZrMxbR+azlpiFrK52IgPog8SWyyCqVQRjYgBFbQgKELRttbGphX2wW6aPpR6e7AgXigUUoQUFaEtFEEbEAvii6m7uehuo80ktdrGzW4y5/NBWnRzJrucOesUM7/H78z85pv/zmVn5gAhISEhISEhyxWqpnxgouE26YpuBnUB3AggDqC+zGqzALIAXwDoNIQc6kvMjFSrx6oEkMrENhLxQQY2GFJ+LZl272ubOmvIdx2jASQnG2+K5BeOAPy0Se81CHy0UBd5Idk4+ac5pyEG0muaXGGdAHCXKacH5yzpdve2X8qZkBkJIJleszoixFmAbjfhKwcB5wtivjOZuHzZgMsfgwwrM25/BsYWj0UkgGECn5JMPwmB2aV8UqIeRM0CvJmBTgBCtRwBXxRanIeTBOmn/xV+VgaA9Jj9LMFz588w0fa9LVPfa6iTB8Zid0jwYTDuKx1k4MGaUfsZwPlQw30dX0fAoWxT3Vyx8COAJoX57baEs6OH4PrZxiDDyozah0HYphjORiO163fGc3ldv/LwqpS5+cJTUO08cHxPwnnZ784DQA/B3dPqvMTAJ4rheL5YeNKP31cAxHhMUb5Sw2IbEdiP+1/bITBJ60UAf5SOCaDbj1s7gEPZpjoG7i+tE9ORV9suTvlpSkVf+68Ogd4vrTOwOTneHNX1agcwV5yLA1i0YRZ8QtdZDiIeUpSjlpyN6zq1AyCJRlU9Ml/zg66zHJYUymcCS7Cyl0rQvw0K0QDFaf7KrZMzu7SlS7Or9aJzYNzuKa27Rc7oOvUDIBaqy5zJi5/a7Rw36fR1F/g/EAYQdANBEwYQdANBEwYQdANBEwYQdANBEwYQdANB4/udoAlS6dg9ZLHqzVJFCNcd1n1NfkMEAME7mPGE7urSsnoAaD0kLftTIAwg6AaCZtkHcENcBPtanUWvubxIjdpG3zgt+yNAPwAm5UdJ5urNOvF0e/RSCdoBsJDTqnp/Zt1aXWc5UuOxmKpOxI6uU/8IkPhFWbfcDm1nGYik0j3PHr1UgHYA0Ug0C2CutE6SHtV1loOkULnzrqjP6jq1A9gZz+UJOFVaZ+Ln94/Fbtb1epFKr7MZ/JxieyeTiYlFP0Sl+LoLSED1rW4VmN81eTFkBrFw3wOwunSMmHx9i/QVQF2k9hiARYcfAY/3j9pvDTIsP34ASJ7BitSY/Q5B9Smefi6K+mN+/L5/pf0ZeysRPlAOMr5kC9v3JpzvdNz9aftOFngTwL0e/q19bc5HOu5r+A4gyRCRMftTAA95LCKJ8Q0TnQR4gghXl/IxYyVAzcT8ABPuhvckqc8LLc4jfidJGTlPB0bWrnJrMPxfTZMDMCKw0Pla62+/+xUZ+Svc2zF9xZJyC4BzJnxl+FYuyC4TOw8YfBbobb+UK9bVbCLwUVPOEpgIH0cjtZv2rZ+5YEpalf/tb2RiGwTxQQAbTfgY+Iok7e5rnxo24fsnVZ0unxpv6IAU3QB3AXQL/p5St7LMalcB5ADOEej0AvHQ6y3T56vZZ0hISEhISMjy5C9QJmWiY6hpcQAAAABJRU5ErkJggg==";

  return (
    <footer>
      <p>Powered by <strong>Gabriel Gomes Rodrigues</strong></p>
      <section>
        <a href="https://br.linkedin.com/in/gabrielgr" target="_blanked">
          <img width="30px" alt="Logo linkedin" src={ linkedinIcon } />
        </a>
        <a href="https://github.com/gabrielgr99/" target="_blanked">
          <img width="30px" alt="Logo github" src={ githubIcon } />
        </a>
        <a target="_blanked" href="https://my-portfolio-gabrielgr99.vercel.app/">
          <img width="30px" alt="Ícone G" src={ portfolioIcon } />
        </a>
        <p id="icon-reference">all icons by <strong><a target="_blanked" href="https://icons8.com">Icons8</a></strong></p>
      </section>
    </footer>
  )
}
