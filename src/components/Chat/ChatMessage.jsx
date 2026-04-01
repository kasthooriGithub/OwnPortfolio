import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { cn } from '../../lib/utils';

/**
 * ChatMessage component displays an individual chat message.
 * 
 * @param {Object} props
 * @param {string} props.text - Content of the message.
 * @param {any} props.createdAt - Firestore timestamp.
 * @param {string} props.userId - ID of the sender.
 * @param {boolean} props.isMe - True if the message is from the current user.
 */
const ChatMessage = ({ text, createdAt, userId, isMe }) => {
  // Format the Firestore timestamp
  const dateObj = createdAt?.toDate();
  const timeString = dateObj ? dateObj.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  }) : '';

  // Get a consistent color gradient for user avatars based on the userId string
  const getUserColor = (id) => {
    const colors = [
      'bg-blue-500', 
      'bg-purple-500', 
      'bg-pink-500', 
      'bg-orange-500', 
      'bg-green-500', 
      'bg-cyan-500'
    ];
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
        hash = id.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <div className={cn(
      "flex w-full mb-4 px-4 items-end gap-2 group animate-in fade-in slide-in-from-bottom-2 duration-300",
      isMe ? "flex-row-reverse" : "flex-row"
    )}>
      {/* Avatar */}
      <Avatar className={cn("w-8 h-8 shrink-0", getUserColor(userId))}>
        <AvatarImage src="" />
        <AvatarFallback className="text-white text-[10px] font-bold">
          {userId.substring(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      {/* Message Bubble Container */}
      <div className={cn(
        "flex flex-col max-w-[70%]",
        isMe ? "items-end" : "items-start"
      )}>
        {/* User ID - Subtle */}
        <span className="text-[10px] text-muted-foreground mb-1 px-1 opacity-0 group-hover:opacity-100 transition-opacity">
          {userId}
        </span>

        {/* Bubble */}
        <div className={cn(
          "px-4 py-3 rounded-2xl text-sm break-words shadow-sm",
          isMe 
            ? "bg-primary text-primary-foreground rounded-br-none" 
            : "bg-muted text-foreground rounded-bl-none border border-border/40"
        )}>
          {text}
        </div>

        {/* Timestamp */}
        <span className="text-[10px] text-muted-foreground/60 mt-1 px-1">
          {timeString}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;
