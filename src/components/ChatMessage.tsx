import { Card } from "@/components/ui/card";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export const ChatMessage = ({ role, content }: ChatMessageProps) => {
  return (
    <div className={`flex ${role === "user" ? "justify-end" : "justify-start"} mb-4`}>
      <Card 
        className={`max-w-[80%] p-4 ${
          role === "user" 
            ? "bg-primary text-primary-foreground" 
            : "bg-card border-medical-border"
        }`}
      >
        <div className="flex items-start gap-3">
          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
            role === "user" ? "bg-primary-foreground/20" : "bg-medical-blue/10"
          }`}>
            {role === "user" ? (
              <span className="text-sm">👤</span>
            ) : (
              <span className="text-sm">🦷</span>
            )}
          </div>
          <div className="flex-1 whitespace-pre-wrap text-sm leading-relaxed">
            {content}
          </div>
        </div>
      </Card>
    </div>
  );
};
