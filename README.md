# Nordic-Robot AI Chatbot

A specialized AI assistant for generating code and providing guidance for Nordic platforms, developed as part of the VIP Project at Georgia Tech.

## Overview

Nordic-Robot AI is a chatbot interface powered by Google's Gemini 2.0 Flash model, designed specifically to assist with code generation and technical guidance for Nordic microcontrollers and related platforms. This tool provides context-aware responses, code examples, and explanations tailored to embedded systems development.

## Features

- **AI-Powered Code Generation**: Generate code snippets for Nordic platforms with context-aware understanding
- **Knowledge Base Integration**: Custom context provision for more accurate and relevant responses
- **Code Syntax Highlighting**: Clear visualization of generated code with language-specific highlighting
- **Multiple Chat Sessions**: Maintain separate conversations with different contexts
- **Dark/Light Theme**: Toggle between interface themes for comfortable viewing
- **Mobile Responsive**: Use the tool seamlessly across devices of different sizes

## Technology Stack

- **Frontend**: Next.js, React, Tailwind CSS with shadcn/ui components
- **Backend**: Next.js API routes
- **AI Model**: Google Gemini 2.0 Flash
- **Styling**: Tailwind CSS with shadcn/ui components
- **Markdown & Code Parsing**: React-Markdown with custom code block handling

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- A Google Gemini API key (obtain from [Google AI Studio](https://ai.google.dev/))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/NordicCodeGen_Chabot.git
   cd NordicCodeGen_Chabot
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Create a `.env.local` file in the root directory with your Gemini API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Using the Knowledge Base

The knowledge base feature allows you to provide additional context to the AI model, improving the relevance and accuracy of generated responses:

1. Click the database icon in the interface
2. Add technical documentation, code examples, or guidelines relevant to your project
3. Upload text files (.txt, .md, .json, .csv) or paste content directly
4. Save the knowledge base to apply it to future conversations

## Key Insights and Challenges

- **Built using Gemini 2.0 Flash**: Leverages Google's advanced AI model for code generation and technical assistance.

- **Knowledge Base Integration**: Keeps the AI focused on Nordic platforms, providing additional context for more accurate and relevant code output.

- **Customizable Context**: The knowledge base is easily updatable, allowing for quick iteration and adaptation as project needs evolve.

- **Challenges**: 
  - Occasional hallucinations and coding errors might occur
  - The model may sometimes generate plausible-sounding but incorrect information
  - Complex code structures might require additional validation

- **Prompt Quality**: The quality of output directly correlates with prompt clarity — precise and detailed prompts typically yield better results.

## Contributing

Contributions to the Nordic-Robot AI Chatbot are welcome! Please feel free to submit pull requests, create issues, or suggest enhancements.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Georgia Tech VIP Program
- Google Gemini AI Platform
- Nordic Semiconductor
- Contributors to the shadcn/ui component library
