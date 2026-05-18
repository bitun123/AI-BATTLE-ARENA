import { RouterProvider } from "react-router-dom";
import { AppRoute } from "./appRoute/AppRoute";
import { ChatProvider } from "./features/chat/state/ChatContext";

function App() {
  return (
    <ChatProvider>
      <RouterProvider router={AppRoute} />
    </ChatProvider>
  );
}

export default App;
