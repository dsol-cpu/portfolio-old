import "./topbarMenu.scss"
import { Link } from 'react-router-dom'

export default function TopbarMenu({id, title, active, setSelected}) {
  return (
    <div className={active ? "topbarMenu active": "topbarMenu"} onClick={() => setSelected(id)}>
      <Link to={'portfolio/' + id} className = "link"> {title} </Link>
    </div>
  )
}