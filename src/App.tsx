import "./App.css";
import Header from "./components/header";
import MainContent from "./components/mainContent";
import { ActiveTagProvider } from "./contexts/useActiveTag";

function App() {
  return (
    <main className="min-h-screen bg-background-primary select-none">
      <ActiveTagProvider>
        <Header />
        <MainContent />
      </ActiveTagProvider>
    </main>
  );
}

export default App;
