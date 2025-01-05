import HomeHero from "./spesific_page_components/home/HomeHero";
import HomeTopDestinations from "./spesific_page_components/home/HomeTopDestinations";
import WorkWithUs from "./spesific_page_components/home/WorkWithUS";
import HomeContact from "./spesific_page_components/home/HomeContact";


function Home() {
    return ( 
      <>
      <HomeHero />
      <HomeTopDestinations />
      <WorkWithUs />
      <HomeContact />
      </>
    )
  }

  export default Home;