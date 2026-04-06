import { Cross, History, Plus, Settings } from "lucide-react";
import { useContext } from "react";
import { ChatContext } from "../state/ChatContext";

function Sidebar() {
  const { open, setOpen } = useContext(ChatContext)!;

  const menu = [
    {
      name: "History",
      icon: <History />,
    },
    {
      name: "Settings",
      icon: <Settings />,
    },
    {
      newChat: "New Chat",
      icon: <Plus />,
    },
  ];

  return (
    <>
      <aside
        className={` fixed inset-y-0 left-0 z-30 w-[15rem]  py-5 min-h-screen overflow-hidden bg-blue-950/95 backdrop-blur transition-transform duration-300 md:relative md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-100"}`}
      >
        <button
          type="button"
          className=" absolute right-4 top-4 md:hidden"
          onClick={() => setOpen(false)}
        >
          <Cross />
        </button>
        <h1>
          <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-center text-2xl font-bold text-transparent">
            Chat App
          </span>
        </h1>
        <ul className="space-y-2 p-4">
          {menu.map((item, index) => (
            <li
              key={index}
              className="flex cursor-pointer items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
            >
              {item.icon}
              <span>{item.name || item.newChat}</span>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
