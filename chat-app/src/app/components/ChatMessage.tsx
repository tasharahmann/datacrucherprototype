interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[70%] ${isUser ? 'order-1' : 'order-2'}`}>
        <div
          className={`px-4 py-3 rounded-lg ${
            isUser
              ? 'bg-blue-500 text-white ml-auto'
              : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600'
          }`}
        >
          <p className="text-sm leading-relaxed">{message.text}</p>
        </div>
        <div className={`mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {message.timestamp.toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </span>
        </div>
      </div>
      
      {/* Avatar */}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
        isUser ? 'bg-blue-500 text-white order-2 ml-3' : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 order-1 mr-3'
      }`}>
        {isUser ? 'U' : 'AI'}
      </div>
    </div>
  );
}