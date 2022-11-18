import React,{useState} from 'react'
import Client from './Client';
const EditorPage = () => {
  const [clients,setClients] = useState([
    {socketId : 1 , username : 'Abhishek Tyagi'},
    {socketId : 2 , username : 'Disha Singh Chahuhan'}
  ]);
  return (
    <div className="mainWrapper">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img className='logoImage' src="/code_collab.png" alt="log" />
          </div>
          <h3>connected</h3>
          <div className="clientList">
             {
               clients.map((client) => (
               <Client key= {client.socketId} username={client.username}/>
               ))}
          </div>
          <div>
            <button className="btn copyBtn">Copy Room Id</button>
            <button className="btn leaveBtn">Leave Room</button>
          </div>
        </div>
      </div>
      <div className="editorWrap">Editor goes here</div>
    </div>
  )
}

export default EditorPage
