import { History, Plus, Settings } from "lucide-react";
import { useContext } from "react";
import { ChatContext } from "../state/ChatContext";


function Sidebar() {
const { open, setOpen } = useContext(ChatContext)!;
console.log(open, )


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
    <div className={`min-h-screen bg-[#0B1326] border-r-2 border-gray-700 fixed top-0 left-0 transition-all duration-300 ease-in-out ${open ? "w-[15rem]" : "w-0 overflow-hidden"} `}>
      <div className="w-full h-16 bg-[#0B1326] flex items-center justify-center flex-col gap-4 ">
        <h1 className="text-white uppercase text-xl font-md bg-linear-to-r from-blue-700 to-yellow-800 p-1 rounded">ai battle arena</h1>
        <div className="flex items-center gap-2 text-white flex-col">
          {menu.map((item, index) => (
            <button key={index} className="flex items-center gap-2 text-white">
              <span>{item.icon}</span>
              <span>{item.name || item.newChat}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
