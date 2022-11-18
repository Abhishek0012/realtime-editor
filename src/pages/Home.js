import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid';
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomID] = useState('');
  const [userName,setUserName] = useState('');
  const createNewRoom = (e)=>
  { 
     e.preventDefault();
     const id = uuidv4();
     setRoomID(id);
     toast.success('Created a new room');
  }
  const joinRoom = (e)=>
  {
    if(!roomId || !userName)
    {
        toast.error("ROOM ID & USERNAME IS REQUIRED");
        return;
    }
    // redirect
    navigate(`/editor/${roomId}`,{
      state: {
        userName,
      },
    })
  };
  const handleInputEnter = (e) => {
    if(e.code == 'Enter')
    {
        joinRoom();
    }
  }
  return (
    <div className="HomePageWrapper">
        <div className="FormWrapper">
            <img src="/code_collab.png" alt="code-sync-logo " className='mainLogo'/>
            <h4 className="mainLabel">Paste invitation ROOM ID</h4>
            <div className="inputGroup">
                <input
                 type="text" 
                 className="inputBox" 
                 placeholder='ROOM ID'
                 onChange ={(e)=>setRoomID(e.target.value)}
                 value = {roomId}
                 onKeyUp ={handleInputEnter}
                 />
                <input 
                type="text" 
                className="inputBox" 
                placeholder='Username'
                onChange ={(e)=>setUserName(e.target.value)}
                value = {userName}
                onKeyUp ={handleInputEnter}
                />
                <button onClick={joinRoom} className="btn joinBtn">Join</button>
                <span className='CreateInfo'>
                 If you don't have invite then create &nbsp;
                 <a onClick={createNewRoom} href="" className='createNewBtn'>New Room</a>
                </span>
            </div>
        </div>
        <footer>
            <h4>
                Built with Love by <a href="https://github.com/Abhishek0012">Abhishek</a>
            </h4>
        </footer>
    </div>
  )
}

export default Home
