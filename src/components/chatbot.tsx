import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
// import axios from "axios"
import { Bot, Heart, Mic, MicOff, Phone, Send, Shield, Badge, User } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface Message {
  id: string
  content: string
  timestamp: Date
  isBot: boolean
  type?: "text" | "options" | "symptom-check" | "vaccination"
  options?: string[]
}

const quickReplies = [
  { icon: Heart, text: "Symptom Checker", color: "destructive" },
  { icon: Shield, text: "Vaccination Schedule", color: "healthcare" },
  { icon: Phone, text: "Emergency Numbers", color: "warning" },
]

export function Chatbot() {

  async function get_ai_names() {
    try {
      const res = await fetch("/get-ai-list", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }

      const result = await res.json();

      return result.names;
    } catch (error) {
      console.error("Failed to get AI names:", error);
      return [];
    }
  }

  const [aiNamesList, setAiNamesList] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState("");
  const [myReq, setmyReq] = useState('')
  const [hist, setHist] = useState(false)

  useEffect(() => {
    get_ai_names().then((names) => {
      setAiNamesList(names);
      setModel(names[0] || "");
      setLoading(false);
    });
  }, []);

  // API Key from .env
  // const OPENROUTER_API_KEY = import.meta.env.OPENROUTER_API_KEY_TWO;

  async function generateAnswer(ques?:string) {
    setLoading(true);
    setAnswer("");
    setmyReq(ques);
    setQuestion(ques);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mess: [
            {
              role: "system",
              content: "You are a helpful health assistant. You can explain general uses of medicines, basic health tips, and give general awareness about symptoms. ⚠️ Always add: 'This is not medical advice. Please consult a qualified doctor for proper diagnosis or treatment.' Never give dosage or prescriptions.",
            },
            { role: "user", content: ques },
          ],
          mod: model,
          hist: hist,
        }),
      });
      const result = await res.json()
      setAnswer(result.data);
    }catch (error) {
      console.error("Error:", error?.response || error.message);
      setAnswer(
        " Error: " + (error.response?.data?.error?.message || error.message)
      );
    } finally {
      setLoading(false);
    }
  }


  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "नमस्ते! मैं आपका स्वास्थ्य सहायक हूँ। मैं आपकी स्वास्थ्य संबंधी जानकारी में सहायता कर सकता हूँ। Hello! I'm your health assistant. How can I help you today?",
      timestamp: new Date(),
      isBot: true,
      type: "text"
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isListening, setIsListening] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]')
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight
      }
    }
  }
  useEffect(() => {
    scrollToBottom()
  }, [messages])
  const handleSendMessage = (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      timestamp: new Date(),
      isBot: false
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(content)
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }
  const generateBotResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase()
    
    if (input.includes("fever") || input.includes("बुखार")) {
      return {
        id: Date.now().toString(),
        content: "I understand you're experiencing fever. Here are some immediate steps:\n\n• Rest and stay hydrated\n• Monitor your temperature\n• Take paracetamol as per dosage\n• Seek medical attention if fever persists over 3 days\n\n⚠️ This is not medical advice. Please consult a doctor for proper diagnosis.",
        timestamp: new Date(),
        isBot: true,
        type: "text"
      }
    }
    
    if (input.includes("vaccine") || input.includes("टीका")) {
      return {
        id: Date.now().toString(),
        content: "I can help you with vaccination information. Please provide your age or date of birth to get a personalized vaccination schedule.",
        timestamp: new Date(),
        isBot: true,
        type: "vaccination"
      }
    }
    
    return {
      id: Date.now().toString(),
      content: "Thank you for your message. I'm here to help with health information, symptoms, and vaccination schedules. How can I assist you further?",
      timestamp: new Date(),
      isBot: true,
      type: "text"
    }
  }
  const handleQuickReply = (text: string) => {
    handleSendMessage(text)
  }
  const toggleVoice = () => {
    setIsListening(!isListening)
    // Voice functionality would be implemented here
  }

  return (
    <>
      <Card className="flex flex-col h-[650px] w-full max-w-[46rem] mx-auto border-0 shadow-[var(--shadow-strong)] rounded-3xl overflow-hidden">
        {/* Chat Header */}
        <div className="gradient-primary p-4 text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-2xl">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Health Assistant</h3>
              <p className="text-white/80 text-sm">Available 24/7 for health guidance</p>
            </div>
            <label className="model-label ml-[30px]">
              Choose Model:
              <select className="m-2 rounded-md p-2 bg-cyan-800" value={model} onChange={(e) => setModel(e.target.value)}>
                <option value={aiNamesList[0]}>{aiNamesList[0]}</option>
                <option value={aiNamesList[1]}>{aiNamesList[1]}</option>
                <option value={aiNamesList[2]}>{aiNamesList[2]}</option>
                <option value={aiNamesList[3]}>{aiNamesList[3]}</option>
              </select>
            </label>
            <div className=" bg-white h-5 w-5 rounded-full hover:cursor-pointer" onClick={() => {setHist(!hist)}}>
              {
                hist && (
                  <div className="h-full w-full bg-red-500 rounded-full"></div>
                )
              }
            </div>
          </div>
        </div>

        {/* Quick Replies */}
        <div className="p-4 border-b bg-muted/30">
          <div className="flex gap-2 flex-wrap">
            {quickReplies.map((reply, index) => (
              <Button
                key={index}
                variant="chat"
                size="sm"
                // onClick={() => handleQuickReply(reply.text)}
                onClick={(e) => {generateAnswer(reply.text)}}
                className="text-xs"
                disabled={loading}
              >
                <reply.icon className="h-3 w-3" />
                {reply.text}
              </Button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
          <div className="space-y-4">
            {loading && <p className="loading">⏳ Thinking...</p>}
            {answer && (
              <div className="answer-box">
                <div className="my-req w-full flex justify-end">
                  <div className="max-w-[50%] bg-[#6CA9E6] rounded-md m-2 p-2 text-clip overflow-x-clip">
                    {myReq}
                  </div>
                </div>
                <div className="ai-res max-w-[50%] bg-[#5bbca8] rounded-md m-2 p-2">
                  {/* <b>Response:</b> */}
                  <p>{answer}</p>
                </div>
              </div>
            )}
            {/* {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}
              >
                <div className={`flex items-start gap-2 max-w-[85%] ${message.isBot ? '' : 'flex-row-reverse'}`}>
                  <div className={`p-2 rounded-full ${message.isBot ? 'bg-primary' : 'bg-healthcare'}`}>
                    {message.isBot ? (
                      <Bot className="h-4 w-4 text-white" />
                    ) : (
                      <User className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div className={`${message.isBot ? 'chat-bubble-bot' : 'chat-bubble-user'}`}>
                    <p className="whitespace-pre-line leading-relaxed">{message.content}</p>
                    <div className="flex items-center justify-between mt-2 text-xs opacity-70">
                      <span>{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      {!message.isBot && <Badge variant="secondary" className="text-xs">Sent</Badge>}
                    </div>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 border-t bg-background">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Input
                // value={inputValue}
                value={question}
                // onChange={(e) => setInputValue(e.target.value)}
                onChange={(e) => setQuestion(e.target.value)}
                // onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                onKeyDown={(e) => e.key === 'Enter' && generateAnswer(question)}
                placeholder="Type your health question... / अपना स्वास्थ्य प्रश्न लिखें..."
                className="rounded-2xl border-2 pr-12 h-12 text-base focus:border-primary"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleVoice}
                className={`absolute right-1 top-1 h-10 w-10 rounded-xl ${isListening ? 'bg-destructive text-white' : ''}`}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </Button>
            </div>
            <Button
              // onClick={() => handleSendMessage(inputValue)}
              onClick={() => generateAnswer(question)}
              // onClick={generateAnswer}
              size="icon"
              className="h-12 w-12 rounded-2xl"
              disabled={!question.trim() || loading}
              // disabled={!inputValue.trim() || loading}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            This chatbot provides general health information. Always consult healthcare professionals for medical advice.
          </p>
        </div>
      </Card>
    </>
  )
}