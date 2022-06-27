# 만들때 고려해야 할 것
 - use로 시작하는 파일을 만든다.
 - useState, useEffect, useReducer, useCallbak등 Hook을 사용하여 원하는 기능을 구현
 - 컴포넌트에서 사용하고 싶은 값들을 반환 해주면 끝!
 - custom Hook은 동시에 사용할 수 있어야한다.
하나의 컴포넌트에서 여러 개의 custom Hooks 사용시 state 업데이트는 고유성을 유지해야 하며 서로에세 영향을 주어선 안된다.
즉 공통된 값을 다루지 말아야 한다.

# 장점
 - custom hook은 재사용이 가능하도록 로직을 분리하여 추상화시켜주는 동시에 컴포넌트의 간결함을 유지할 수 있게 해준다.

# Hooks 규칙
 - 최상위(at the Top Level)에서만 Hook을 호출해야 한다.
반복문 조건문 혹은 중첩된 함수 내에서 Hook을 호출 하면 안된다.
이 규칙을 따르면 컴포넌트가 렌더링 될 때마다 항상 동일한 순서로 Hook이 호출되는 것이 보장된다.
이러한 점은 React가 useState와 useEffect가 여러번 호출 되는 중에도 Hook의 상태를 올바르게 유지할 수 있도록 해준다.
 - 오직 React 함수 내에서 Hook을 호출해야 한다.
이 규칙을 지키면 컴포넌트의 모든 상태 관련 로직을 소스코드에서 명확하게 보이도록 할 수 있다

# 예시 (핀다가 쓰고있는 custom hooks)
```
/// usePrevious
import { useEffect, useRef } from 'react';

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]); 

  return ref.current;
}

export default usePrevious;
```
 - 이전 렌더링에서의 값을 기억해두어야 하는 경우에 사용할 수 있다.
 - 현재 렌더링과 이전 렌더링의 값을 비교할 필요가 있을 때 사용
```
function MyComponent() {
  const [alphabet, set] = useState('A');
  const prevAlphabet = usePrevious(alphabet);
  
  useEffect(() => {
    if (alphabet === 'C' && prevAlphabet === 'B') {
       doSomething();
    }
  }, [alphabet]);
  // ..
}
```
 - 알파벳이 C이고 전이 B였으면 특정한 수행을해라!
 - 내부에서 값을 저장할대 useState가 아닌 useRef를 사용한이유는 re-rendering을 방지하기 위해서
 - usePrevious가 반환하는 값은 당장 UI를 그리는데에는 영향을 주지 않기 때문에 usePrevious내부에서의 값 변경이 re-rendering을 유발해서는 안된다.