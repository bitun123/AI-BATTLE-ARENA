import { RouterProvider } from "react-router-dom";
import { Approute } from "./appRoute/AppRoute";
import { ChatProvider } from "./features/chat/state/ChatContext";

function App() {
  return (
    <ChatProvider>
      <RouterProvider router={Approute} />
    </ChatProvider>
  );
}

export default App;
