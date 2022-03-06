import React from "react";

export default function App() {

   const [message, setMessages] = React.useState(["a", "b"])

   return (
      <div>
         {
            message.length === 0
            ? <h1>You're all caught up!</h1>
            : <h1>You have {message.length} unread {message.length === 1 ? `message` : `messages`}</h1>
         }
      </div>
   )
}