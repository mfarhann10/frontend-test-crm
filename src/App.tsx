import { About } from "./components/About";
import { Header } from "./components/Header";
import { Services } from "./components/Services";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="new-container pt-24">
        <About />
        <Services />
      </main>
    </div>
  );
}

export default App;
