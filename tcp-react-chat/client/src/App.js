import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import crypto from 'crypto-js';
import styled from 'styled-components';

function App() {
	const [ state, setState ] = useState({ message: "", name: "", encoding: ""}) // 입력값 저장
	const [ chat, setChat ] = useState([]) // 주고 받은 메시지 저장

	const secretKey = "gkdtkdqorhvmek";
	const socketRef = useRef()

	useEffect( // 로딩시 서버에 연결 하기위해서
		() => {
			socketRef.current = io.connect("http://localhost:4000")
			console.log(socketRef.current);
		},[]
	)

	useEffect( // 서버에서 메시지를 보내면 실행하기 위해서
		() => {
			socketRef.current.on("message", ({ name, message }) => {	
				if(message != null)
				{	// 디코딩 과정
					const bytes = crypto.AES.decrypt(message, secretKey);
					const orignText = bytes.toString(crypto.enc.Utf8)
					// 디코딩후 메시지 저장
					setChat([ ...chat, { name, message : orignText, encoding: message } ])
					
				} else 	return
			})

      // 이름입력시 server에서 누가 입장했는지 표시
      socketRef.current.on('name', ({ name, message }) => {
        setChat([ ...chat, { name, message }])
      }) 
		},
		[ chat ] 
	)

	const onTextChange = (e) => { // 입력한 텍스트 state에 저장
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const onMessageSubmit = (e) => {
		const { name, message } = state
		const ciphertext = crypto.AES.encrypt(message, secretKey).toString() // 인코딩 과정
		
		socketRef.current.emit("message", { name, message : ciphertext })

		e.preventDefault()
		setState({ message: "", name })
	}

  // 받은 메시지를 뿌려주는 함수
	const renderChat = () => {
		return chat.map(({ name, message }, index) => (
			<div key={index}>
				<h3>
					{name}: <span>{message}</span>
				</h3>
			</div>
		))
	}

  // 받은 인코딩 메시지를 뿌려주는 함수
	const renderEncodingChat = () => {
    // filter로 한번 걸러준 데이터를 map을 사용하여 뿌려주기
    return chat.filter( data => data.encoding != null ).map(({ name, encoding }, index) => (
      <div key={index}>
      <h3>
        {name}: <span>{encoding}</span>
      </h3>
    </div>
    ))
	}

  // 채팅방을 나갈때 알려주는 함수
	const quitMessage = () => {
    alert('서버와 종료합니다.') // 나중에 모달로 창 만들기
		socketRef.current.disconnect();
	}

  // 메시지를 보낼때 사용
  const sendMessage = () => {
    socketRef.current.emit('name',  state.name );
  }

	return (
		<BoardWrapper>
      <Board>
        <EnterBoardTitle>Input Your Nickname</EnterBoardTitle>
        <NameInput 
          name="name" 
          onChange={(e) => onTextChange(e)} 
          value={state.name} 
          label="Name"
          placeholder="사용할 이름을 입력해 주세요." />
          <Button onClick={sendMessage}>Enter Room</Button>
      </Board>
      <Board>
        <BoardTitle>Chat Log</BoardTitle>
        <Render>
          { renderChat()}
        </Render>
        <MessageInput 
          name="message"
          onChange={(e) => onTextChange(e)}
          value={state.message}
          label="Message"
          placeholder="상대방에게 보낼 메시지를 입력해 주세요."
        />
        <Button onClick={onMessageSubmit}>Send Message</Button>
      </Board>
      <Board>
        <BoardTitle>Encoding Chat Log</BoardTitle>
        <Render>
          {renderEncodingChat()}
        </Render>
        <Button onClick={quitMessage}>Quit Message</Button>
      </Board>
		</BoardWrapper>
	)
}

const BoardWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;

const Board = styled.div`
  width: 30vw;
  height: 70vh;
  border: 4px ridge black;
  border-radius: 32px;
  float: left;
  margin: 1vw;
  text-align: center;
  position: relative;
`;

const BoardTitle = styled.p`
  font-size: 32px;  
  margin: 8px;
`;

const EnterBoardTitle = styled.p`
  font-size: 32px;  
  margin-top: 23vh;
`;

const MessageInput = styled.input`
  margin-top: 32px;
  width: 20vw;
  ::placeholder{
    text-align: center;
  }
`;

const NameInput = styled(MessageInput)`
  text-align: center;
`

const Button = styled.button`
  margin-top: 32px;
`;

const Render = styled.div`
  width: 30vw;
  height: 50vh;
  background-color: #F5F5DC;
  overflow: auto;
`;

export default App
