import logo from "./assets/chatbot.png";
import * as React from 'react';
import Chatwindow from './components/Chatwindow.jsx';


// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

function App() {
  const [open, setOpen] = React.useState(false);
  const [prompt , setPrompt] = React.useState("");
  const [response,setResponse] = React.useState("");
  const [loading,setLoading] = React.useState(false);
  const handleOpen = () =>  {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <div className="app">
      <img  className="main-logo" src={logo} />
      <Chatwindow  open={open}
      handleOpen={handleOpen} 
      handleClose={handleClose} 
      prompt={prompt} 
      setPrompt={setPrompt}
      response={response}
      setResponse={setResponse}
      loading={loading}
      setLoading={setLoading}
      />
     
    </div>


  
    
  );
}

export default App
