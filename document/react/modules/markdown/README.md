# 마크다운 모듈들
 - markdown-it
 - marked
 - remarkable
 - showdown
![image](https://user-images.githubusercontent.com/66058308/174740907-2db2bf7e-f7c0-4cd4-8d85-e1323a0b68bb.png)
npm trends에서 보면 marked를 가장 많이 사용 그래서 marked 채택!

# 설치
- react
```
npm i marked
yarn add marked
```
- typescript 사용시
```
npm i marked @types/marked
yarn add marked @types/marked
```

# 사용 방법
- 마크다운 바로 작성
```
import { marked } from 'marked';

const App = () => {
  const markdown = marked('마크다운 작성')
  
  return (
    <div className="App">
      <article dangerouslySetInnerHTML={{__html: markdown}}></article> // 마크 다운 html에 넣어주고 보여주기!
    </div>
  );
}

export default App;
```
- 외부 마크다운 file 불러와 적용
```
import React, { useState, useEffect} from 'react';
import { marked } from 'marked';

import MainMd from 'assets/dummies/main.md';

const App = () => {
  const [mdText, setMdText] = useState('');

  useEffect(() => {
    fetch(MainMd).then(res => res.text()).then(text => setMdText(marked(text)));
  })

  return (
    <div className="App">
      <article dangerouslySetInnerHTML={{__html: mdText}}></article>
    </div>
  );
}

export default App;
```

# 옵션
![image](https://user-images.githubusercontent.com/66058308/174741947-180465a7-1926-4c8c-88fc-d9fb5d412bd9.png)
