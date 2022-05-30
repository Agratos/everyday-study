# socket.io
- 서버 코드
```
const app = require('express')()
const server = require('http').createServer(app)
const cors = require('cors');
const { listenerCount } = require('process');
const io = require('socket.io')(server,{
    cors : {
        origin : "*",
        Credential : true
    }
});
```
```
// 서버에 접속하는 소켓을 감지
io.on('connection', socket=>{}
```
```
// 해당 소켓에 이벤트 발생
socket.on('이벤트이름', (파라미터) => {

})
```
```
// 서버에서 데이터 전송
io.emit('이벤트이름', (파라미터))
```

# socket.io-client
- 클라이언트 코드
```
import io from "socket.io-client";
```
```
// connect 뒤에는 접속할 호스트와 포트
const socketRef = useRef() // 소켓 정보를 담고 있을 변수
socketRef.current = io.connect("http://localhost:4000")
```
```
// 서버에서 데이터가 오는지 감지
socketRef.current.on("이벤트 이름", (파라미터) => {  ...  })
```

# study
1. 객체 {}
    - key : value
    - 추가방법 - 객체이름[키] =  값
    - 삭제방법 - delete 객체이름[키]

2. useState
    - [ 변수, 조작할 변수 이름] = useState
    - 조작할 변수 이름 ex) [ name, setName ] 으로 사용
    - 변수가 객체이거나 배열일때 추가방법
        - setName([ ...name, {name : "lee"}])
        - ...name : 기존의 객체를 복사

3. filter
    - 객체나, 배열을 조건을 통하여 구분
    - ```
        let first = [{message:'1', name:'1'}, {message:'2', name:'2'}]
        let second = first.filter( data => data.name != '1')
      ```