import React from 'react';
import ChatRoom from '../components/Chat/ChatRoom';
import { Button } from '../components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChatPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#030303] text-foreground p-4 md:p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" />

      {/* Navigation */}
      <div className="w-full max-w-2xl mb-6 flex items-center justify-between">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')} 
          className="gap-2 hover:bg-white/5 text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Home
        </Button>
      </div>

      {/* Chat Room */}
      <ChatRoom />

      {/* Footer info */}
      <div className="mt-8 text-center text-xs text-muted-foreground/40 max-w-sm">
        <p>Built with React, Firebase Firestore, and Tailwind CSS. <br/> Integrated with real-time listeners and premium UI components.</p>
      </div>
    </div>
  );
};

export default ChatPage;
