Absolutely, here's an updated section in the README file:

---

## AI Chatbot with OpenAI GPT-3.5

### Prerequisites

- Node.js installed on your machine

### Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Paul-Okello/node-chat.git
   cd your-repository
   ```

2. **Create Environment File:**

   - Create a new file named `.env` in the root directory.
   - Add your OpenAI API key in this format:
     `bash
    OPENAI_API_KEY=YOUR_API_KEY_HERE
    `
     Replace `YOUR_API_KEY_HERE` with your actual OpenAI API key.

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Running the Chatbot:**

   - Execute the following command in your terminal:
     ```bash
     node chat.js
     ```

5. **Chatting with the AI:**
   - Once the script is running, interact with the chatbot by typing messages after the "You:" prompt. To exit the chat, type "exit".

---

This updated guide ensures that users create an `.env` file to securely store their OpenAI API key before running the chatbot script.
