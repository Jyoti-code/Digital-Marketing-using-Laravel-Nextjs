import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Footer from "./footer/Footer";

export default function Layout({children}) {
  return (
    <>
      <Navbar/>
      {children}
      <Home/>
      <Footer/>
    </>
  );
}
