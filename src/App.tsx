import { About } from "./components/About";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="new-container pt-24">
        <About />
      </main>
    </div>
  );
}

export default App;
