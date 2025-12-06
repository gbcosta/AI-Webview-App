import "./App.css";
import Header from "./components/header";
import CategoryFillter from "./components/categoryFillter";
function App() {
  return (
    <main className="h-screen bg-background-primary">
      <Header />
      <CategoryFillter />
    </main>
  );
}

export default App;
