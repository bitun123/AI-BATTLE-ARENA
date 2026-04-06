import { useContext } from "react";
import { ChatContext } from "../state/ChatContext";
import { Menu } from "lucide-react";

function Navbar() {
  const { open, setOpen } = useContext(ChatContext)!;

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950/95 px-4 text-white backdrop-blur md:h-20 md:px-6">
      <button
        type="button"
  
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-slate-100 transition hover:border-slate-500 hover:bg-slate-800 md:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Menu size={20} />
      </button>

   
    </header>
  );
}

export default Navbar;
