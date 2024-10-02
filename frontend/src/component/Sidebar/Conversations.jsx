import React from "react"
import Conversation from "./Conversation"
import useGetConversations from "../../hooks/useGetConversations"

const Coversations = () => {
  const { loading, conversations } = useGetConversations()
  return (
    <div className="py-2 flex flex-col overflow-auto">
       {conversations.map((conversation, index) => (
         <Conversation 
           key={conversation._id}
          conversation={conversation}
          lastIndex={index === conversation.length - 1}
        />
      ))}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  )
}

export default Coversations















// import React from "react"
// import Conversation from "./Conversation"
// import useGetConversations from "../../hooks/useGetConversations"

// const Conversations = () => {
//   const { loading, conversations } = useGetConversations()

//   // Ensure conversations is an array before using map
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//       {Array.isArray(conversations) && conversations.length > 0 ? (
//         conversations.map((conversation, index) => (
//           <Conversation
//             key={conversation._id}
//             conversation={conversation}
//             lastIndex={index === conversations.length - 1}
//           />
//         ))
//       ) : (
//         <p>No conversations available</p> // Placeholder when conversations is empty or not an array
//       )}
//     </div>
//   )
// }

// export default Conversations
