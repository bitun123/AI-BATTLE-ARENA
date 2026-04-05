import { createContext, useState, type ReactNode } from "react";

type ChatContextType = {
  // Define any state or functions you want to share across components here
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const ChatContext = createContext<ChatContextType>(
  {} as ChatContextType,
);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <ChatContext.Provider value={{ open, setOpen }}>
      {children}
    </ChatContext.Provider>
  );
};
