import { IoSearchOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import icon from "../assets/icon.png";
import { useSearchbarValue } from "../contexts/useSerchbarValue.tsx";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

const Header = ({
  setIsSettingsMenuActive,
}: {
  setIsSettingsMenuActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <header
      className="bg-background-primary w-full text-text-secondary p-4
      border-b-border-primary border-b-2"
    >
      <div className="flex w-full">
        <SynapseLogo />
        <Searchbar />
        <div
          className="flex items-center text-3xl cursor-pointer hover:text-zinc-100"
          onClick={() => {
            setIsSettingsMenuActive(true);
          }}
        >
          <CiSettings />
        </div>
      </div>
    </header>
  );
};

const Searchbar = () => {
  const searchbarValueContext = useSearchbarValue();
  return (
    <div className="flex flex-1 justify-center ">
      <div
        className="flex border-2 max-w-[500px] w-full border-border-primary
            rounded-xl items-center bg-background-secondary"
      >
        <IoSearchOutline className="mx-2 text-2xl" />
        <input
          placeholder="search AI"
          className="outline-none w-full text-text-primary"
          value={searchbarValueContext.value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            searchbarValueContext.changeValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

const SynapseLogo = () => {
  return (
    <div className="flex gap-4 items-center">
      <div className="max-w-10 rounded-md">
        <img src={icon} className="rounded-lg" />
      </div>
      <div className="">
        <h1 className="text-text-primary text-md font-bold">Synapse Hub</h1>
        <span className="text-sm text-text-secondary">AI Hub</span>
      </div>
    </div>
  );
};

export default Header;
