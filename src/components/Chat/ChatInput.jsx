import React, { useState } from 'react';
import { db } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

/**
 * ChatInput component handles message input and submission to Firestore.
 * 
 * @param {Object} props
 * @param {string} props.userId - Current user's unique identifier.
 */
const ChatInput = ({ userId = "anonymous-user" }) => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    setIsLoading(true);

    try {
      // 1. Store message in Firestore collection 'messages'
      const docRef = await addDoc(collection(db, 'messages'), {
        text: message.trim(),
        createdAt: serverTimestamp(),
        userId: userId,
      });

      // 2. Show how to access the document ID
      console.log("Message successfully sent! Document ID:", docRef.id);
      
      // 3. Clear input field after sending
      setMessage('');
      
      toast.success("Message sent!");
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Failed to send message.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2 p-4 pt-2">
      <Input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 rounded-2xl bg-muted/50 focus-visible:ring-primary h-12"
        disabled={isLoading}
      />
      <Button 
        type="submit" 
        size="icon" 
        disabled={isLoading || !message.trim()}
        className="rounded-full w-12 h-12 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
      >
        <Send className="w-5 h-5" />
        <span className="sr-only">Send message</span>
      </Button>
    </form>
  );
};

export default ChatInput;
