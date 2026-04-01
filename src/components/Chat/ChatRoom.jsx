import React, { useEffect, useState, useRef } from 'react';
import { db } from '../../lib/firebase';
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot, 
  limit 
} from 'firebase/firestore';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import './Chat.css';
import { ScrollArea } from '../ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { MessageSquare, User } from 'lucide-react';

/**
 * ChatRoom component - The main real-time chat interface.
 */
const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [userId] = useState(() => {
    // Basic persistent user ID for demonstration
    const savedId = localStorage.getItem('chat-user-id');
    if (savedId) return savedId;
    const newId = `user-${Math.floor(Math.random() * 10000)}`;
    localStorage.setItem('chat-user-id', newId);
    return newId;
  });

  const scrollRef = useRef(null);

  // Real-time listener for messages
  useEffect(() => {
    // 1. Define query: collection 'messages', ordered by 'createdAt'
    const q = query(
      collection(db, 'messages'),
      orderBy('createdAt', 'asc'),
      limit(50)
    );

    // 2. Set up the onSnapshot listener for real-time updates
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messagesData);
    });

    // 3. Clean up the listener on unmount
    return () => unsubscribe();
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
        const scrollElement = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (scrollElement) {
            scrollElement.scrollTop = scrollElement.scrollHeight;
        }
    }
  }, [messages]);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl border-none bg-background/60 backdrop-blur-xl overflow-hidden flex flex-col h-[600px]">
      <CardHeader className="border-b bg-muted/30 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="bg-primary/20 p-2 rounded-xl text-primary">
                <MessageSquare className="w-6 h-6" />
             </div>
             <div>
                <CardTitle className="text-xl font-bold tracking-tight">Community Chat</CardTitle>
                <CardDescription className="flex items-center gap-1.5 text-xs text-muted-foreground/80">
                   <User className="w-3 h-3 text-green-500 fill-green-500" /> 
                   Live • {messages.length} messages
                </CardDescription>
             </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest px-2 py-0.5 rounded-full bg-muted/80">
              Your ID: {userId}
            </span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 p-0 overflow-hidden relative">
        <ScrollArea ref={scrollRef} className="h-full w-full py-4 px-2">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full opacity-30 mt-20">
               <MessageSquare className="w-12 h-12 mb-2" />
               <p className="text-sm font-medium">No messages yet. Say hi!</p>
            </div>
          ) : (
            messages.map((msg) => (
              <ChatMessage 
                key={msg.id} 
                {...msg} 
                isMe={msg.userId === userId} 
              />
            ))
          )}
        </ScrollArea>
      </CardContent>
      
      <div className="border-t bg-muted/20 pb-4">
        <ChatInput userId={userId} />
      </div>
    </Card>
  );
};

export default ChatRoom;
