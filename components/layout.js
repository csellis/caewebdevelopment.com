import Header from './header'
import Footer from './footer'
import { initGA, logPageView } from '../utils/analytics'
import CookiesComponent from './CookiesComponent'
import { useEffect } from 'react'

function Layout(props) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      if (!window.GA_INITIALIZED) {
        initGA()
        window.GA_INITIALIZED = true
      }
      logPageView()
    }
  }, [])
  return (
    <div className="flex flex-col min-h-screen max-w-screen w-full">
      <Header />
      <main>{props.children}</main>
      <CookiesComponent />
    </div>
  )
}

export default Layout
