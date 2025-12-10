import { ActiveTagProvider } from "../contexts/useActiveTag";
import { SearchbarValueProvider } from "../contexts/useSerchbarValue";
import Header from "./header";
import MainContent from "./mainContent";

const Home = () => {
  return (
    <main className="min-h-screen bg-background-primary select-none">
      <ActiveTagProvider>
        <SearchbarValueProvider>
          <Header />
          <MainContent />
        </SearchbarValueProvider>
      </ActiveTagProvider>
    </main>
  );
};

export default Home;
