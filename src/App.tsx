import './App.css'; 
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import About from './component/About/About';
import Products from './component/Products/Products'
import Services from './component/Services/Services';
import Achievements from './component/Achievements/Achievements';
import Customer from './component/Customer/Customer';
import Cumminity from './component/Cumminity/Cumminity';
import Cta from './component/CTA/Cta';
import Footer from './component/Footer/Footer';
function App() {
   return (
    <div className=" ">
      <Navbar />
      <Home />
      <Services />
      <About />
      <Achievements />
      <Products />
      <Customer />
      <Cumminity />
      <Cta />
      <Footer />
    </div>
   )
}

export default App
