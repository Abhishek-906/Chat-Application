// import React, { useEffect } from 'react'
// import Message from './Message'
// import useGetMessages from '../../hooks/useGetMessages'

// const Messages = () => {
//   const {messages, loading} = useGetMessages()
 
//   const lastMessageRef = useRef()
//   useEffect(()=>{
//     setTimeout(()=>{
//       lastMessageRef.current?.scrollIntoView({behaviour:"smooth"})
//     })
//   } , [messages])

//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//       {!loading && messages.length===0 && (
//         <p className='text-center' >Start conversation by sending a message</p>
//       )}
//       {!loading && messages.length>0 && messages.map((message)=>(
//         <div key={message._id} ref={lastMessageRef}>
//           <Message message={messages}/>
//         </div>
//       ))}
      
//     </div>
//   )
// }

// export default Messages



import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';

const Messages = () => {
  const { messages, loading } = useGetMessages();

  const lastMessageRef = useRef(null); // Initialize with null

  useEffect(() => {
    // Scroll into view when the messages change
    if (messages.length > 0) {
      setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Adding a slight delay to ensure rendering
    }
  }, [messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length === 0 && (
        <p className='text-center'>Start conversation by sending a message</p>
      )}

      {!loading && messages.length > 0 && messages.map((message, index) => (
        <div
          key={message._id}
          ref={index === messages.length - 1 ? lastMessageRef : null} // Apply ref only to the last message
        >
          <Message message={message} />
        </div>
      ))}

      {loading && <span className='loading loading-spinner'></span>}
    </div>
  );
};

export default Messages;
