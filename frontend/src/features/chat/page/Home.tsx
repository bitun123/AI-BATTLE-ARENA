import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


function Home() {

  return (
    <div className="min-h-screen bg-slate-950 md:flex">
      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <Navbar />

        <main className="flex-1 p-4 text-slate-100 md:p-6">
          <div className="grid min-h-[calc(100vh-8rem)] place-items-center rounded-3xl border border-dashed border-slate-800 bg-slate-900/40 px-6 text-center">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold md:text-4xl">
                Responsive chat layout
              </h2>
              <p className="max-w-xl text-sm leading-6 text-slate-400 md:text-base">
                Use the menu button on mobile to open the sidebar. On desktop,
                the sidebar stays visible as a persistent column.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
