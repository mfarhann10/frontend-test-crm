import { About } from "./components/About";
import { Enjoy } from "./components/Enjoy";
import { Header } from "./components/Header";
import { Services } from "./components/Services";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="new-container pt-24">
        <About />
        <Services />
        <Enjoy />
      </main>
    </div>
  );
}

export default App;
