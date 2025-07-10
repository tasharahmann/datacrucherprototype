# 🤖 AI Chat Assistant

A simple, modern web application that provides a chat-style interface for asking natural language questions to an AI assistant.

## 🚀 For Product Managers - Getting Started

### What is this?
This is a Next.js web application that creates a chat interface similar to ChatGPT, where users can:
- Ask questions in natural language
- Receive AI-style responses
- Have a conversation-like experience

### How to run the application

1. **Open your terminal/command prompt**
   - On Mac: Press `Cmd + Space`, type "Terminal", press Enter
   - On Windows: Press `Win + R`, type "cmd", press Enter

2. **Navigate to the project folder**
   ```bash
   cd chat-app
   ```

3. **Install dependencies** (first time only)
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your web browser** and go to:
   ```
   http://localhost:3000
   ```

### 🎯 Features

- **Modern Chat UI**: Clean, responsive design that works on desktop and mobile
- **Real-time Messaging**: Instant message display with typing indicators
- **Dark Mode Support**: Automatically adapts to system preferences
- **Message History**: All conversations are maintained during the session
- **Responsive Design**: Works beautifully on all screen sizes

### 🔧 Technical Details

- **Framework**: Next.js 14 (React-based)
- **Styling**: Tailwind CSS for modern, responsive design
- **Language**: TypeScript for better code reliability
- **State Management**: React hooks for managing chat state

### 🚀 Next Steps for AI Integration

Currently, this is a demo that simulates AI responses. To connect to a real AI service:

1. **Choose an AI Provider**:
   - OpenAI (ChatGPT API)
   - Anthropic (Claude API)
   - Google (Gemini API)
   - Azure OpenAI

2. **Add API Integration**:
   - Sign up for an API key from your chosen provider
   - Install the provider's SDK
   - Replace the demo response logic with real API calls

3. **Environment Variables**:
   - Create a `.env.local` file
   - Add your API keys securely

### 📊 Project Structure

```
chat-app/
├── src/
│   └── app/
│       ├── components/          # Reusable UI components
│       │   ├── ChatMessage.tsx  # Individual message display
│       │   └── ChatInput.tsx    # Message input form
│       ├── page.tsx            # Main chat page
│       ├── layout.tsx          # App layout
│       └── globals.css         # Global styles
├── package.json                # Dependencies and scripts
└── README.md                  # This file
```

### 🛠 Customization Ideas

- **Branding**: Update colors, fonts, and logos
- **Features**: Add file uploads, voice input, message search
- **AI Models**: Integrate different AI providers or models
- **Analytics**: Track user interactions and popular questions
- **Authentication**: Add user accounts and conversation history

### 📞 Need Help?

This application is ready to demo and can be easily extended. The code is well-structured and documented for future development needs.

---

**Built with ❤️ using Next.js and Tailwind CSS**
