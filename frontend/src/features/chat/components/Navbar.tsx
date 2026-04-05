import { useContext } from "react";
import { ChatContext } from "../state/ChatContext";
import { Menu } from "lucide-react";

function Navbar() {
  const { open, setOpen } = useContext(ChatContext)!;

  return (
    <div
      className={`${open ? "w-full" : "w-16"} h-16 bg-[#0B1326] flex items-center justify-between px-4 text-white fixed top-0 left-0 z-10`}
    >
      <div className="block md:hidden lg:hidden">
        <Menu onClick={() => setOpen((prev) => !prev)} />
      </div>
    </div>
  );
}

export default Navbar;
