import { ActiveTagProvider } from "../contexts/useActiveTag";
import { SearchbarValueProvider } from "../contexts/useSerchbarValue";
import Header from "./header";
import MainContent from "./mainContent";

const Home = () => {
  return (
    <ActiveTagProvider>
      <SearchbarValueProvider>
        <div className="flex flex-col h-screen bg-background-primary select-none">
          <Header />
          <MainContent />
        </div>
      </SearchbarValueProvider>
    </ActiveTagProvider>
  );
};

export default Home;
