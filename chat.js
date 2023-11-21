import { openai } from "./openai.js";
import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function formatMessage(userInput) {
  return {
    role: "user",
    content: userInput,
  };
}

// Create a new message
const newMessage = async (input) => {
  // Hit Openai API
  console.log("AI is thinking...");
  const results = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [formatMessage(input)],
  });

  //   console.log("Results--->", results);
  //   console.log("AI--->", results.choices[0].message.content);
  return results.choices[0].message;
};

// Start the chat
async function chat() {
  const history = [
    {
      role: "assistant",
      content: "Hello, I'm a chatbot. How can I help you today?",
    },
  ];

  function start() {
    rl.question("You: ", async (userInput) => {
      if (userInput.toLowerCase() === "exit") {
        rl.close();
        return;
      }

      const userMessage = formatMessage(userInput);
      const aiMessage = await newMessage(userInput);

      history.push(userMessage, aiMessage);
      console.log(`\nAI: ${aiMessage.content}\n`);

      start();
    });
  }

  start();
}

console.log("Welcome to our chatbot. Type 'exit' to quit.");
chat();
