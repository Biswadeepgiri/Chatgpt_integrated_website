import React from "react";
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField  ,LinearProgress , CircularProgress} from "@mui/material";
import axios from "axios";
import Gptresponse from "./gptresponse.jsx";

import './chatwindow.css'
// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 700,
//   bgcolor: 'background.paper',
//   border: '2px solid #000 20px',
//   border-radius : '3px',
//   boxShadow: 24,
//   p: 4,
// };

function Chatwindow(props) {
    const handlequerysubmit = async(e) => {
        e.preventDefault();
        props.setResponse("");
        props.setLoading(true);

        const response = await axios.post("http://localhost:3000/chat",{prompt:props.prompt})
        props.setResponse(response);
        props.setLoading(false);
        console.log(response);

    }
    
    return (
        <>
             <button onClick={props.handleOpen} className="ask-btn">Ask me anything</button>
             <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="chatapp-window"
      >
        <Box className="chat-box">
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{marginBottom:'20px'}}>
            Ask me anything you want to know about!
          </Typography>
          <form style={{display:"flex", flexDirection:"column" , alignItems:"center" }} className="chat-form" onSubmit={(e)=>{handlequerysubmit(e)}}>
          <TextField  value={props.prompt} onChange={(e)=> props.setPrompt(e.target.value)} fullWidth label="Query" id="fullWidth" className="chat-input" />
          <button type="submit" className="ask-btn">Submit</button>
          </form>
          <br></br>
          {props.loading && <LinearProgress />}
          {
            props.response && <Gptresponse response1={props.response} />
          }
        </Box>
      </Modal>
        </>
    );
}

export default Chatwindow;