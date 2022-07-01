type EType = "Chat" | "Contact";

interface IType {
  type: EType;
}

interface IHandleModalVisibility {
  handleModalVisibility: (type: EType) => void;
}

interface IAuth {
  session: string | null;
  phone: string | null;
  username: string | null;
 }

interface IContact {
  username: string;
  phone: string;
}

type IContacts = IContact[];

interface IMessage {
  sender: IContact;
  message: string;
  time: string;
}

type IMessages = IMessage[];

interface IChat {
  chatId: string;
  recipients: IRecipients;
  messages: IMessages;
}

type IChats = IChat[];
