# 설치
```
npm install react-router-dom 설치

import { useParams } from 'react-router-dom';
```

# 사용법
 - router 부분
```
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<BrowserRouter>
  <Routes>
    <Route path="est/:id/:click" element={<TestPage />} />
  </Routes>
</BrowserRouter>
```
 - 위와 같은 경우 TestPage 에서 파라미터를 받는 방법
```
// TestPage
import { useParams } from 'react-router-dom';

// 객체로 받을때
const params = useParams();
// 원하는 객체만 받을 때 파라미터 이름을 정확히 입력해야한다.
const { id } = useParams(); // 1개
const { id, click} = useParams(); // 2개... 
```
![image](https://user-images.githubusercontent.com/66058308/172792273-3bdbec7d-dfc5-4761-90f0-e574b59e36a4.png)
 - id 나 click 대신 다른 것을 사용시 undefined 뜸
 - 두 번째 는 객체로 받을 때