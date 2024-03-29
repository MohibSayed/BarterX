import React, { useState, useEffect, useRef } from 'react';
import {BiPhoneCall, BiVideo, BiInfoCircle} from "react-icons/bi"
import { useParams } from 'react-router-dom';
import axios from "axios";
import "./Chat.css";
const Chat = () => {
  const lastMessageRef = useRef(null);
    const [profileName, setProfileName] = useState('');
    const [receiverName, setReceiverName] = useState('');
    const [messages, setMessages] = useState([]);
    // const [messageInput, setMessageInput] = useState('');
    const [message, sendMessage] = useState("");
    const userid = localStorage.getItem("token");
    const sellerid = useParams();
    console.log(sellerid.id);
    const [messageInput, setMessageInput] = useState('');
    const toUserId = sellerid.id; 
    const fromUserId = userid; 
    const [chatMessages, setChatMessages] = useState([]);
    const [fetchTrigger, setFetchTrigger] = useState(false);
    const [chatNames, setChatNames] = useState([])
    // const scrollToBottom = () => {
    //   const messagesContainer = document.querySelector('.messages-container');
    //   if (messagesContainer) {
    //     const lastMessage = messagesContainer.lastElementChild;
    //     if (lastMessage) {
    //       lastMessage.scrollIntoView({ behavior: 'smooth' });
    //     }
    //   }
    // };
    const scrollToLastMessage = () => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    useEffect(() => {
      const getChatMessages = async () => {
        try {
          
          const response = await axios.get(`http://localhost:8800/api/chat/retrieveMessages/${toUserId}/${fromUserId}`);
          if(response.status === 200){
            setChatMessages(response.data.messages);
            // console.log(response);
            console.log(chatMessages);
            console.log("5seconds");
          }
          setFetchTrigger(false);
          
        } catch (error) {
          console.error('Error fetching user chats:', error.message);
        }
      }
      // getChatMessages();
      if (fetchTrigger) {
        getChatMessages();
        setFetchTrigger(false); // Reset the fetchTrigger
      }

      const fetchChatMessagesPeriodically = () => {
        getChatMessages();
        setFetchTrigger(false); // Reset the fetchTrigger
      };
  
      // Initially fetch chat messages
      fetchChatMessagesPeriodically();
  
      // Set up an interval to fetch chat messages every 5 seconds
      const intervalId = setInterval(fetchChatMessagesPeriodically, 10000); // 5000 milliseconds = 5 seconds
  
      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    },[fetchTrigger]);


    useEffect(() => {
        const getUserName = async () => {
          try {
            const userData = await axios.get(`http://localhost:8800/api/users/${userid}`);
            const userName = userData.data.name;
            console.log(userName);
            setProfileName(userName);
          } catch (error) {
            console.error('Error fetching user data:', error.message);
          }
        }
        const getReceiverName = async () => {
            try {
              const recvData = await axios.get(`http://localhost:8800/api/users/${sellerid.id}`);
              const recvName = recvData.data.name;
              console.log(recvName);
              setReceiverName(recvName);
            } catch (error) {
              console.error('Error fetching user data:', error.message);
            }
          }
          const getChats = async () => {
            try {
              const recvChatsData = await axios.get(`http://localhost:8800/api/chat/retrieveChats/${userid}`);
              // const recvName = recvChatsData.data.name;
              console.log(recvChatsData.data[0]);
              // const chatData = recvChatsData.data[0];
              // setChatNames(recvChatsData.data[0])

              // // Filter out chat data where participants' IDs match with IDs in local storage
              // const filteredMessages = chatData.participants.filter(participants => {
              //   const listparticipants = chatData.participants;
              //   console.log(listparticipants);
              //   console.log(userid)
              //   const filteredpart = listparticipants.filter(participantId => participantId != userid);
              //   console.log(filteredpart);
              //   return filteredpart;
              // });
              // console.log(filteredMessages);
              // // Create a new chat object with the filtered messages
              // // const filteredChat = {participants: filteredMessages };

              // // console.log(filteredChat);
            } catch (error) {
              console.error('Error fetching user data:', error.message);
            }
          }
        getUserName();
        getChats();
        getReceiverName();
        scrollToLastMessage();
      }, []);
      
      
    
      const sendMsg = () => {
        fetch('http://localhost:8800/api/chat/sendMessage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ messageInput, toUserId, fromUserId }),
        })
          .then((response) => {response.json()
          console.log("data gaya")
          // scrollToBottom();
          scrollToLastMessage();
          setFetchTrigger(true);
          })
          .then((data) => {
            console.log(data);
            // window.location.reload();
            setMessageInput('')
          })
          .catch((error) => {
            console.error(error);
          });
      };
  return (
    <div id="frame">
      <div id="sidepanel">
        <div id="profile">
            <div className="wrap">
            <img id="profile-img" src="http://emilcarlsson.se/assets/mikeross.png" className="online" alt="" />
            <p>{profileName}</p>
            <i className="fa fa-chevron-down expand-button" aria-hidden="true"></i>
            <div id="status-options">
                <ul>
                <li id="status-online" className="active"><span className="status-circle"></span> <p>Online</p></li>
                <li id="status-away"><span className="status-circle"></span> <p>Away</p></li>
                <li id="status-busy"><span className="status-circle"></span> <p>Busy</p></li>
                <li id="status-offline"><span className="status-circle"></span> <p>Offline</p></li>
                </ul>
            </div>
            <div id="expanded">
                <label htmlFor="twitter"><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></label>
                <input name="twitter" type="text" value="mikeross" />
                <label htmlFor="twitter"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></label>
                <input name="twitter" type="text" value="ross81" />
                <label htmlFor="twitter"><i className="fa fa-instagram fa-fw" aria-hidden="true"></i></label>
                <input name="twitter" type="text" value="mike.ross" />
            </div>
            </div>
        </div>
        <div id="search">
            <label htmlFor=""><i className="fa fa-search" aria-hidden="true"></i></label>
            <input type="text" placeholder="Search contacts..." />
        </div>
        <div id="contacts">
            <ul>
            <li className="contact">
                <div className="wrap">
                <span className="contact-status online"></span>
                <img src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
                <div className="meta">
                    <p className="name">Louis Litt</p>
                    <p className="preview">You just got LITT up, Mike.</p>
                </div>
                </div>
            </li>
            <li className="contact">
                <div className="wrap">
                <span className="contact-status online"></span>
                <img src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
                <div className="meta">
                    <p className="name">Mark Tyson</p>
                    <p className="preview">You just got LITT up, Mike.</p>
                </div>
                </div>
            </li>
            {/* Add more contact items here */}
            </ul>
        </div>
        <div id="bottom-bar">
            <button id="addcontact"><i className="fa fa-user-plus fa-fw" aria-hidden="true"></i> <span>Add contact</span></button>
            <button id="settings"><i className="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Settings</span></button>
        </div>
      </div>
      <div className="content">
        <div className="contact-profile">
          {/* Contact profile content */}
          <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
            <p>{receiverName}</p>
            <div className="social-media">
                <BiPhoneCall size="1.3em" className="icon" />
                <BiVideo size="1.3em" className="icon" />
                <BiInfoCircle size="1.3em" className="icon" />
            </div>
        </div>
        <div className="messages messages-container">
          <ul>
            {chatMessages.map((message, index) => (
              <li
               ref={index === chatMessages.length -1 ? lastMessageRef : null}
                key={index}
                className={message.from === fromUserId ? 'replies' : 'sent'}
              >
                <img src={message.senderAvatar} alt={message.sender} />
                <p>{message.text}</p>
              </li>
            ))}
           
          </ul>
        </div>
        <div className="message-input">
          <div className="wrap">
            <input
              type="text"
              placeholder="Write your message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <i className="fa fa-paperclip attachment" aria-hidden="true"></i>
            <button
              className="submit"
              onClick={sendMsg}
            >
              <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
