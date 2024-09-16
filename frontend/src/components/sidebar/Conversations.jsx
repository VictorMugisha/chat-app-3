import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";
import { getRandomEmoji } from "../../utils/emojis";

export default function Conversations() {
  const { loading, conversations } = useGetConversations();
  return (
    <div className="flex flex-col overflow-auto py-2">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading ? (
        <span className="loading loading-spinner mx-auto text-white"></span>
      ) : null}
    </div>
  );
}
