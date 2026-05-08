import { NavLink, Outlet } from 'react-router-dom'
import { ToastRegion } from '../../state/toast/ToastRegion'

const getNavClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-link nav-link--active' : 'nav-link'

export function AppLayout() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <header className="app-header">
        <div className="app-header__inner">
          <div className="brand" aria-label="Project name">
            Practice-12
          </div>
          <nav aria-label="Primary">
            <ul className="nav-list">
              <li>
                <NavLink to="/" className={getNavClassName} end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className={getNavClassName}>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" className={getNavClassName}>
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main" className="app-main" tabIndex={-1}>
        <Outlet />
      </main>

      <footer className="app-footer">
        <small>Practice 12</small>
      </footer>

      <ToastRegion />
    </div>
  )
}

