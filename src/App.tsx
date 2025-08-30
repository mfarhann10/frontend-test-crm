import { About } from "./components/About";
import { Enjoy } from "./components/Enjoy";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Review } from "./components/Review";
import { Services } from "./components/Services";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="new-container pt-24">
        <About />
        <Services />
        <Enjoy />
        <Review />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
