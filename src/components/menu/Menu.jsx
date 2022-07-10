import "./menu.scss";

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")} id="menu">
        <ul>
            <li>
                <a href="#gamedevelopment">Game Development</a>
            </li>
            <li>
                <a href="#softwaredevelopment">Software Development</a>
            </li>
            <li>
                <a href="#concepts">Concepts</a>
            </li>
            <li>
                <a href="#about-me">About Me</a>
            </li>
        </ul>
    </div>
  )
}
