# Scroll Interaction
 - 스크롤 위치에 따른 상호작용 방법

# 준비
 1. 화면 전체 높이 확인
 2. 원하는 div 절대 위치 확인
 3. 스크롤 위치 확인
```
const [ scrollPosition, setScrollPosition ] = useState(0);
const [ windowHeight, setWindowHeightt ] = useState(window.innerHeight);
const [ mainFunctionHeight, setMainFunctionHeight ] = useState(10000);
const [ start, setStart] = useState(false);
const mainFunctionRef = useRef();

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true});
    setWindowHeightt(window.innerHeight);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
},[])

useEffect(() => {
    if(scrollPosition !== 0){
        const functionStart = windowHeight + scrollPosition > (mainFunctionHeight + 150);
        setMainFunctionHeight(mainFunctionRef.current.offsetTop);
        setStart([
            (start[0] !== true ? functionStart : true)
        ]);
}},[scrollPosition])

const handleScroll = (e) => {
    const position = window.scrollY;
    setScrollPosition(position);
}
```
### 코드 설명
```
const [ scrollPosition, setScrollPosition ] = useState(0); // 스크롤 위치 확인
const [ windowHeight, setWindowHeightt ] = useState(window.innerHeight); // 화면 높이 확인
const [ mainFunctionHeight, setMainFunctionHeight ] = useState(10000); // 원하는 div 의 높이 확인 처음 10000 이유는 바로 시작을 방지
const [ start, setStart] = useState(false); // 시작할지 말지 결정
const mainFunctionRef = useRef(); // 원하는 div의 ref에 적용
```
```
useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true});
    setWindowHeightt(window.innerHeight);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
},[])
```
 - 맨 처음 시작할 때 이벤트리스너를 handleScroll에 적용
 - 화면의 높이를 저장
```
useEffect(() => {
    if(scrollPosition !== 0){
        const functionStart = windowHeight + scrollPosition > (mainFunctionHeight + 150);
        setMainFunctionHeight(mainFunctionRef.current.offsetTop);
        setStart([
            (start[0] !== true ? functionStart : true)
        ]);
}},[scrollPosition])
```
 - 스크롤이 0 이 아닐 때 작동
 - 화면 높이 + 스크롤 높이 가 원하는 엘리먼트의 높이보다 높을 때 true 반환
 - setMainFunctionHeight(mainFunctionRef.current.offsetTop); 이유는 처음 높이는 Component 높이라서 전체 높이를 알기 위해 설정
```
const handleScroll = (e) => {
    const position = window.scrollY;
    setScrollPosition(position);
}
```
 - 스크롤 이벤트 리스너를 담아서 스크롤 위치를 계속 추적 


# 후기
 - 이렇게 코드를 짜도 되는지 걱정이다....