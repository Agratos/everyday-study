업데이트예정
# css 기본
 - 폰트를 줄때는 8단위 정 안되면 4단위로 지정
 - 기본 태그들은 블록 요소(한개의 블록 다음에는 밑으로 블록이 배치)
## padding & margin
```
padding: 8px // 4방향 같은
padding: 8px 16px // 위(8) 아래(8), 좌(16) 우(16)
padding: 8px 10px 16px // 위(8), 좌(10) 우(10), 아래(16)
padding: 8px 10px 12px 14px // 위(8) 오른쪽(10) 아래(12) 왼쪽(14)
```
 - padding 은 안쪽으로의 길이를 넓힌다.
 - maring 은 밖같쪽으로 길이를 넓힌다.

 ## 가로정렬 float 사용
```
<Box1 />
<Box2 />
<Box3 />
ㅁ
ㅁ
ㅁ
```

 1. 왼쪽
```
모든 박스
float: left;

<Box1 />
<Box2 />
<Box3 />
|ㅁㅁㅁ    |
<Box1> <Box2> <Box3>
```

 2. 오른쪽
```
모든 박스
float: right;

<Box1 />
<Box2 />
<Box3 />
|    ㅁㅁㅁ|
<Box3> <Box2> <Box1>
```

 3. 1개만 다르게주기
```
<Box1 /> float left
<Box2 /> float right
<Box3 /> float left
|ㅁㅁ   ㅁ|
<Box1> <Box3> <Box2>
```

 4. 2개는 float 1개는 해제
```
<Box1 /> float left
<Box2 /> float right
<Box3 /> clear both
|ㅁ    ㅁ|
|ㅁ      |
<Box1> <Box2>
<Box3>
```
