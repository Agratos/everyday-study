# public 폴더에 저장
```
 - public
   - images

const imgUrl = '/images/이미지 파일명';

<img src={imgUrl}>
```
 - public에 저장할 경우 상대 경로를 이용하여 가져올 수 있다.

# src 폴더에 저장
```
 - src
   - assets
      - images

import ImageUrl from './assets/images/이미지파일명';

<img src={ImageUrl} />
```
 - src에 저장할 경우 import 해서 경로를 가져와야 한다.

# src에 저장 후 import 없이 사용할 경우
```
 - src
   - assets
      - images

<img src={require('assets/images/파일명')} />
```
 - image를 동적으로 자주 변경해야 한다면 import 보다는 image path를 불러와서 require를 사용하여 이미지를 불러오는 것이 좋아 보인다.