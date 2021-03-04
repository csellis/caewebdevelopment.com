import Header from "./header";
import Footer from "./footer";

function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="text-gray-900 flex-1">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
