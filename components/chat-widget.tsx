"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "👋 Hi there! How can I help you with selling your software licenses today?" },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const exampleQuestions = [
    "How do I sell my license?",
    "What types of licenses do you accept?",
    "How long does the process take?",
    "How do I get paid?",
  ]

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Mock AI response for demo purposes
      // In a real implementation, you would use the AI SDK with OpenAI
      const prompt = `
        You are a helpful assistant for SoftSell, a software license resale platform.
        Answer the following question about selling software licenses:
        ${input}
        
        Keep your answer concise, friendly, and focused on helping the user understand how to sell their software licenses through SoftSell.
      `

      // Simulate API call delay
      setTimeout(async () => {
        try {
          // This would be replaced with actual AI SDK call in production
          const mockResponse = getMockResponse(input)

          // Uncomment this for real implementation with OpenAI
          /*
          const { text } = await generateText({
            model: openai("gpt-4o"),
            prompt: prompt,
          });
          */

          setMessages((prev) => [...prev, { role: "assistant", content: mockResponse }])
        } catch (error) {
          console.error("Error generating response:", error)
          setMessages((prev) => [
            ...prev,
            { role: "assistant", content: "Sorry, I'm having trouble connecting. Please try again later." },
          ])
        } finally {
          setIsLoading(false)
        }
      }, 1000)
    } catch (error) {
      console.error("Error:", error)
      setIsLoading(false)
    }
  }

  // Mock responses for demo purposes
  const getMockResponse = (question: string) => {
    const lowerQuestion = question.toLowerCase()

    if (lowerQuestion.includes("sell") || lowerQuestion.includes("how do i")) {
      return "To sell your license, simply fill out our contact form with your license details. Our team will evaluate it and provide a valuation within 24 hours. Once you accept, we'll guide you through the transfer process and payment."
    } else if (lowerQuestion.includes("type") || lowerQuestion.includes("accept")) {
      return "We accept most major software licenses including Microsoft, Adobe, Autodesk, Oracle, SAP, and many others. Enterprise, volume, and perpetual licenses typically have the highest value."
    } else if (lowerQuestion.includes("time") || lowerQuestion.includes("long") || lowerQuestion.includes("take")) {
      return "The entire process typically takes 3-7 business days. Valuation is provided within 24 hours, and payment is processed within 3 business days after the license transfer is complete."
    } else if (lowerQuestion.includes("pay") || lowerQuestion.includes("money")) {
      return "We offer multiple payment methods including bank transfer, PayPal, and check. You can select your preferred method during the process. We typically pay within 3 business days after the license transfer is complete."
    } else {
      return "Thanks for your question. Our team specializes in software license resale and can help you convert unused licenses into cash. For specific details about your licenses, please fill out our contact form and our experts will assist you personally."
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 md:right-8 z-50 w-[350px] md:w-[400px]"
          >
            <Card className="shadow-lg border-primary/10">
              <CardHeader className="bg-primary/5 border-b">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-semibold">SoftSell Assistant</CardTitle>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[350px] overflow-y-auto p-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-4 ${message.role === "user" ? "flex justify-end" : "flex justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start mb-4">
                      <div className="max-w-[80%] rounded-lg p-3 bg-muted">
                        <Loader2 className="h-5 w-5 animate-spin" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                {messages.length === 1 && (
                  <div className="px-4 pb-4">
                    <p className="text-sm text-muted-foreground mb-2">Suggested questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {exampleQuestions.map((question, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="text-xs"
                          onClick={() => {
                            setInput(question)
                            setMessages((prev) => [...prev, { role: "user", content: question }])
                            setTimeout(() => {
                              setIsLoading(true)
                              setTimeout(() => {
                                setMessages((prev) => [
                                  ...prev,
                                  { role: "assistant", content: getMockResponse(question) },
                                ])
                                setIsLoading(false)
                              }, 1000)
                            }, 500)
                          }}
                        >
                          {question}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="border-t p-3">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSend()
                  }}
                  className="flex w-full gap-2"
                >
                  <Input
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:right-8 z-50 rounded-full h-14 w-14 shadow-lg"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </>
  )
}
