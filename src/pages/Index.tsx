import { useEffect, useRef } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDentalChat } from "@/hooks/useDentalChat";
import { Trash2 } from "lucide-react";

const Index = () => {
  const { messages, sendMessage, isLoading, clearChat } = useDentalChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="min-h-screen bg-medical-bg p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg border-medical-border">
          <CardHeader className="border-b border-medical-border bg-gradient-to-r from-medical-blue/5 to-medical-green/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🦷</span>
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-medical-text">
                    Dental Caries Detection Assistant
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    AI-powered dental health guidance
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={clearChat}
                className="hover:bg-destructive/10 hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-[500px] overflow-y-auto mb-4 space-y-4 scroll-smooth">
              {messages.map((message, index) => (
                <ChatMessage key={index} role={message.role} content={message.content} />
              ))}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <Card className="max-w-[80%] p-4 bg-card border-medical-border">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-medical-blue rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-medical-blue rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-medical-blue rounded-full animate-bounce delay-200" />
                    </div>
                  </Card>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <ChatInput onSendMessage={sendMessage} disabled={isLoading} />
          </CardContent>
        </Card>
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            This chatbot provides educational information only and is not a substitute for professional medical advice.
          </p>
          <p className="mt-1">Always consult with a qualified dentist for diagnosis and treatment.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
