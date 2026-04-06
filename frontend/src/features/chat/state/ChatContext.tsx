import {
  createContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

type ChatContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
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
