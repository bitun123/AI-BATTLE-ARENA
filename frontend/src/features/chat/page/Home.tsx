
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";



function Home() {

  return (
    <div className="w-full min-h-screen bg-[#0B1326]">
      {/* headers */}

      <header>
    <Navbar />
      </header>

      {/* sidebar */}
      <aside>
        <Sidebar />
      </aside>

      {/* main content */}
      <div></div>
    </div>
  );
}

export default Home;
