import React, { useState, useEffect, useRef } from 'react';
import '../Components-Employer/Chatbox.css'
import { useJobs } from '../JobContext';
<<<<<<< HEAD
 
//**JMessenger***//
export const JMessenger = () => {
   
    //{POV : Logged in as Ajeeth }
    const CurrentUser = 2; //(here we can able to change the Profile in otherjobseekers view)
   
    const { chats, setChats, isChatEnded,setNotificationsData } = useJobs(); // from Context
 
    const [input, setInput] = useState("");
 
    const scrollRef = useRef(null);
   
    const myChatData = chats.find(c => c.id === CurrentUser);
 
    const employerProfile = chats.find(c => c.role === "employer");
 
    const hasMessages = myChatData?.messages && myChatData.messages.length > 0;
 
    useEffect(() => {
        if (myChatData?.messages.length > 0) {
            setNotificationsData(prev =>
                prev.map(notif =>
=======

//**JMessenger***//
export const JMessenger = () => {
    
    //{POV : Logged in as Harsha }
    const CurrentUser = 1; //(here we can able to change the Profile in otherjobseekers view)
    
    const { chats, setChats, isChatEnded,setNotificationsData } = useJobs(); // from Context

    const [input, setInput] = useState("");

    const scrollRef = useRef(null);
    
    const myChatData = chats.find(c => c.id === CurrentUser);

    const employerProfile = chats.find(c => c.role === "employer");

    const hasMessages = myChatData?.messages && myChatData.messages.length > 0;

    useEffect(() => {
        if (myChatData?.messages.length > 0) {
            setNotificationsData(prev => 
                prev.map(notif => 
>>>>>>> 05e6efb2d81f4bab7aab2ddeecd0689a11b8efbb
                    notif.targetId === CurrentUser ? { ...notif, isRead: true } : notif
                )
            );
        }
    }, [myChatData?.messages.length]);
<<<<<<< HEAD
 
    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [myChatData?.messages]);
 
    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim() || isChatEnded) return;
 
        const newMsg = {
            id: Date.now(),
            text: input,
            sender: "jobseeker",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
 
        setChats(prev => prev.map(chat =>
=======

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [myChatData?.messages]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim() || isChatEnded) return;

        const newMsg = {
            id: Date.now(),
            text: input,
            sender: "jobseeker", 
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setChats(prev => prev.map(chat => 
>>>>>>> 05e6efb2d81f4bab7aab2ddeecd0689a11b8efbb
            chat.id === CurrentUser ? { ...chat, messages: [...chat.messages, newMsg] } : chat
        ));
        setInput("");
    };
<<<<<<< HEAD
 
=======

>>>>>>> 05e6efb2d81f4bab7aab2ddeecd0689a11b8efbb
    return (
        <div className="messages-container">
            <div className="E-chat-name">
                <div style={{ height: "100vh" }} className="web-sidebar">
                    <div className="sidebar-header"><h2 style={{color:"#007bff",textAlign:"center"}}>Messages</h2></div>
                    {hasMessages && (
                        <div className="sidebar-item active">
                            <strong>{employerProfile?.name}</strong>
                        </div>
                    )}
                </div>
            </div>
<<<<<<< HEAD
 
=======

>>>>>>> 05e6efb2d81f4bab7aab2ddeecd0689a11b8efbb
            <div className="web-main-chat">
                {hasMessages ? (
                    <>
                        <header className="web-chat-header">
                            <strong>{employerProfile?.name}</strong>
                        </header>
<<<<<<< HEAD
                       
=======
                        
>>>>>>> 05e6efb2d81f4bab7aab2ddeecd0689a11b8efbb
                        <div className="web-chat-window" ref={scrollRef}>
                            {myChatData?.messages.map((m) => (
                                <div key={m.id} className="web-msg-row">
                                    <div className={`web-bubble ${m.sender === 'jobseeker' ? 'web-me' : 'web-friend'}`}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                            {isChatEnded && <div className="chat-end-label">--- Conversation Ended ---</div>}
                        </div>
                        <form className="web-input-bar" onSubmit={handleSend}>
<<<<<<< HEAD
                            <input
                                className="web-text-input"
                                value={input}
                                disabled={isChatEnded}  
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Reply to employer..."
=======
                            <input 
                                className="web-text-input" 
                                value={input} 
                                disabled={isChatEnded}  
                                onChange={(e) => setInput(e.target.value)} 
                                placeholder="Reply to employer..." 
>>>>>>> 05e6efb2d81f4bab7aab2ddeecd0689a11b8efbb
                            />
                            <button type="submit" disabled={isChatEnded} className="web-send-button">SEND</button>
                        </form>
                    </>
                ) : (
<<<<<<< HEAD
                   
=======
                    
>>>>>>> 05e6efb2d81f4bab7aab2ddeecd0689a11b8efbb
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}} className="no-messages-view">
                        <div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center"}} className="no-msg-content">
                            <h3>No Messages</h3>
                            <p>Waiting for the employer to start the conversation.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
<<<<<<< HEAD
};
 
=======
};
>>>>>>> 05e6efb2d81f4bab7aab2ddeecd0689a11b8efbb
