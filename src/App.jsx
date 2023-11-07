    import "./app.scss"
import Hero from "./componants/Hero/hero";
import Navbar from "./componants/navbar/Navbar";
import Parellex from "./componants/parellex/parellex";
 const App = () => {
  return <div>
    <section id="hero"> 
      <Navbar/>
      <Hero/>
    </section>
    <section id="services"><Parellex type="services "/></section>
    
    <section>services</section>
    <section id="services"><Parellex type="portfolio"/></section>
   
    <section>portfoli2</section>
    <section>portfolio3</section>
    <section>Contact</section>

    </div>;
};

export default App;
