import "./App.css";
import CategoryFilter from "./components/categoryFilter";
import CategoryInfos from "./components/categoryInfos";
import Header from "./components/header";
import CategoryCards from "./components/categoryCards";

function App() {
  return (
    <main className="h-screen bg-background-primary select-none">
      <Header />
      <div className="p-6">
        <CategoryFilter />
        <CategoryInfos />
      </div>
      <div className="flex h-full">
        <CategoryCards />
      </div>
    </main>
  );
}

export default App;
