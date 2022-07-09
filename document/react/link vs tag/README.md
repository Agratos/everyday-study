# a tag
```
<a href='' target=''>a tag</a>
```
 - html에서 사용하는 tag
 - href의 path로 이동
 - 기존 데이터들을 버리고 새로운 데이터들을 가져옴(새로 고침)

# link
```
import { Link } from 'react-router-dom';

<Link to=''>Link tag</Link>
```
 - react-router-dom 에서 지원
 - to의 path로 이동
 - 새로 고침 일어나지 않음
 - 필요한 데이터만 가져옴(이전 페이지에서 데이터가 변경되지 않는다면 데이터를 새로 불러오지 않는다.)

# 결과
 - 그냥 react-router-dom에서 지원하는 Link를 사용하자
 - a tag를 사용하면 react의 장점이 없어진다.... 화면 변경할 때마다 새로 고침 발생.....