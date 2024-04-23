import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <NavLink to="/admin" end>
        Meu abrigo
      </NavLink>
      <NavLink to="/admin/pets">Pets</NavLink>
      <NavLink to="/">Sair</NavLink>
    </nav>
  )
}
