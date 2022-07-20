# react-router-dom history
```
import { useHistory } from 'react-router-dom';

const ReactRouterDomHistory = () => {
  const history = useHistory();
  
  return (
    <button onClick={() => {history.push('/가고싶은 페이지 url')}}> history </button>
  )
}
``` 
 - 기능 URL 변경
 - 해당 페이지로 이동
 - history.push('path');
 - props 넘겨줄때!
```
import { useHistory } from 'react-router-dom';

const ReactRouterDomHistory = () => {
  const history = useHistory();
  
  return (
    <button onClick={() => {history.push({
      pathname: '가고싶은 페이지 url',
      state: {age: 1, name: 'agratos'}
    })}}> history </button>
  )
}
```
```
import { useLocation } from 'react-router-dom';

const location = useLocation();
const age = location.state.age;
const name = location.state.name;
const {age, name} = location.state; // ??
```
# window history
```
const WindowHistory = () => {
  return(
    <button onClick={() => {window.history.pushState('/가고싶은 페이지 url')}}> window history </button>
  )
}
```
 - window 의 안에 있는 history의 pushState를 사용해준다.
 - 그냥 url 변경 페이지 이동 X
 - replaceState도 url 변경을 하지만 전에 있던 state를 변경
 - props 넘겨줄 때
```
history.pushState({age: 1, name:'agratos'}, 'commit  message랑 같은 역할', '가고 싶은 url');
```
```
const age = window.location.state.age;
const name = window.location.state.name;
```

### pushState vs replaceState
pustState: history stack에 push
replaceState: history stack에 pop후 push

# 결론
 - url만 변경을 할 때만 window history pushState를 사용
 - relpaceState는 현재 페이지에서 다음 페이지로 url을 변경 후 뒤로 가기 눌렀을 때 이전 페이지로 못 가게 할 때! (악의적....같은데....)
 - url과 페이지 변경이 필요하면 react-router-dom history를 사용