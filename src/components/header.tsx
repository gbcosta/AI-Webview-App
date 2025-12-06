import { IoSearchOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
//import { getCurrentWebview } from "@tauri-apps/api/webview";
import icon from "../assets/icon.png";

const Header = () => {
  return (
    <header
      className="bg-zinc-950 w-full text-zinc-400 p-4 border-b-zinc-700 border-b-2"
      onKeyDown={async (e) => {
        if (e.key == "p") {
          console.log("a");
          //         await getCurrentWebview().setZoom(0.66);
        }
      }}
    >
      <div className="flex w-full zinc-100">
        <div className="flex gap-2">
          <div className="flex gap-4 items-center">
            <div className="max-w-10 rounded-md">
              <img src={icon} className="rounded-lg" />
            </div>
            <div className="">
              <h1 className="text-zinc-100 text-md font-bold">Synapse Hub</h1>
              <span>AI Hub</span>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center ">
          <div
            className="flex border-2 max-w-[500px] w-full border-zinc-700
            rounded-xl items-center bg-zinc-900"
          >
            <IoSearchOutline className="mx-2 text-2xl" />
            <input
              placeholder="search AI"
              className="outline-none w-full text-zinc-100"
            />
          </div>
        </div>
        <div className="flex items-center text-3xl cursor-pointer hover:text-zinc-100">
          <CiSettings />
        </div>
      </div>
    </header>
  );
};

export default Header;
