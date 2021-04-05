import Header from './header'
import Footer from './footer'

function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen max-w-screen w-full">
      <Header />
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
