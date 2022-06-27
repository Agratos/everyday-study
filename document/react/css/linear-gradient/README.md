# linear-gradient
## 사용법
- 기본 : 2가지 색 이상만 추가해주면 된다.
- 방향 전환
- 대각선 그레이디언트
- 각도 사용(더 정밀하게 방향을 지정 하고 싶다면)
  - 각도를 사용할 대 0 deg는 아래쪽에서 진행하는 선형 그레이디언트
  - 90deg는 왼쪽에서 오른쪽으로
  - 음의 각도는 시계 반대 반향
```
background-color : linear-gradient(blue, pink)
background-color : linear-gradient(to right, blue, pink)
background-color : linear-gradient(to bottom right, blue, pink)
background-color : linear-gradient(70deg, blue, pink)
```
![image](https://user-images.githubusercontent.com/66058308/164343220-0799cc7e-f5c4-4c76-9193-76044b6d4c28.png)
![image](https://user-images.githubusercontent.com/66058308/164343326-e17a7197-5281-4985-b827-73dd0d91e1ef.png)
![image](https://user-images.githubusercontent.com/66058308/164343382-9a672992-14fe-4e51-a643-2937c38c1689.png)
![image](https://user-images.githubusercontent.com/66058308/164343444-77fa6b89-ba22-4f51-a722-8e1b00d60115.png)

## div 위쪽 대각선 자르기
```
background: linear-gradient(-135deg, transparent 32px, #F0F9FD 0);
```


## [추가 정보](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Images/Using_CSS_gradients)

