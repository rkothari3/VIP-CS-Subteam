# Nordic-Robot AI

Created for VIP Mechatronics for Motivation

## About

- **💬 AI-Powered Chat**: Chat with the Gemini AI model
- **💻 Code Generation**: Generate code with proper syntax highlighting
- **⚡ Real-time Responses**: Stream responses as they're generated
- **📋 Copy Functionality**: Copy entire messages or individual code blocks
- **📚 Knowledge Base**: Upload custom knowledge to provide context to the AI
- **🌙 Dark/Light Mode**: Toggle between dark and light themes
- **📱 Responsive Design**: Works on desktop and mobile devices
- **🔍 Markdown Support**: Full markdown rendering in AI responses

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- A [Google AI Studio](https://ai.google.dev/) account for Gemini API access

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/your-username/nordic-robot-ai.git
   cd nordic-robot-ai
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Create a `.env.local` file in the root directory:
   \`\`\`
   GEMINI_API_KEY=your_api_key_here
   \`\`\`

4. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage Guide

### Basic Chat

- Type your question or request in the input box at the bottom
- Press "Generate" or Enter to send your message
- The AI will respond with text, markdown, or code

### Code Generation

When asking for code, specify the language you want:

\`\`\`
Write a Python function to calculate the Fibonacci sequence
\`\`\`

The AI will respond with properly formatted and syntax-highlighted code.

### Using the Knowledge Base

1. Click the "Knowledge Base" button in the sidebar
2. Either:
   - Type or paste information into the text area
   - Upload a text file by clicking "Upload File"
3. Click "Save Knowledge Base"
4. The AI will now use this information when generating responses

### Managing Chats

- Create a new chat by clicking "New Chat"
- View chat history in the sidebar
- Delete a chat by hovering over it and clicking the trash icon

## Project Structure

\`\`\`
nordic-robot-ai/
├── app/                  # Next.js app directory
│   ├── api/              # API routes
│   │   └── chat/         # Chat API endpoint
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main chat interface
├── components/           # React components
│   ├── code-block.tsx    # Code block with syntax highlighting
│   ├── knowledge-base.tsx# Knowledge base modal
│   ├── message-content.tsx# Message content with markdown support
│   ├── theme-toggle.tsx  # Dark/light mode toggle
│   └── ui/               # UI components (from shadcn/ui)
├── utils/                # Utility functions
│   └── code-parser.ts    # Code block parser
├── public/               # Static assets
└── ...                   # Config files
\`\`\`

## Core Components

### ChatbotInterface (app/page.tsx)

The main component that manages:
- Chat state and history
- Message sending and receiving
- UI layout and responsiveness

### MessageContent (components/message-content.tsx)

Renders AI messages with:
- Markdown formatting
- Code block detection and highlighting
- Copy functionality

### CodeBlock (components/code-block.tsx)

Displays code with:
- Language-specific syntax highlighting
- Language indicator
- Copy button

### KnowledgeBase (components/knowledge-base.tsx)

Modal for:
- Adding custom knowledge for context
- File uploading
- Knowledge management

## API

The application uses a Next.js API route to communicate with the Gemini API:

### POST /api/chat

**Request Body:**
\`\`\`json
{
  "message": "User message here",
  "chatId": "unique-chat-id",
  "knowledgeBase": "Optional knowledge base content"
}
\`\`\`

**Response:**
\`\`\`json
{
  "response": "AI response text with markdown formatting"
}
\`\`\`

## Environment Variables

Create a `.env.local` file with the following variables:

\`\`\`
GEMINI_API_KEY=your_gemini_api_key
\`\`\`

## Security Considerations

- The Gemini API key is stored in a `.env.local` file which is not committed to version control
- API requests are made server-side to prevent exposing your API key to clients
- The application includes basic safety settings for the Gemini API

## Development

### Adding New Features

1. Fork the repository
2. Create a feature branch
3. Implement your changes
4. Submit a pull request

### Modifying the Theme

The application uses Tailwind CSS for styling. You can customize the theme in:

- `app/globals.css` - Color variables
- `tailwind.config.ts` - Theme configuration

## Troubleshooting

### API Key Issues

If you see "API key not found" errors:
- Ensure your `.env.local` file exists in the root directory
- Verify the `GEMINI_API_KEY` variable is set correctly
- Restart the development server after adding the key

### Blank Responses

If the AI returns blank responses:
- Check your API key permissions in Google AI Studio
- Ensure you have access to the Gemini models
- Verify your account has available quota

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Google Gemini](https://ai.google.dev/) - AI model

---

Made with ❤️ by Your Name
\`\`\`
