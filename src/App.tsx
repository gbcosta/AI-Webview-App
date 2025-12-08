import "./App.css";
import Header from "./components/header";
import MainContent from "./components/mainContent";

function App() {
  return (
    <main className="min-h-screen bg-background-primary select-none">
      <Header />
      <MainContent />
    </main>
  );
}

export default App;
