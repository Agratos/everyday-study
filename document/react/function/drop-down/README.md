# drop-down hover
```
import React from 'react';
import styled from 'styled-components';

const DropDownWrapper = styled.div`
    background-color: white;
    text-align: left;
    position: absolute;
    //display: none; // transition 적용x
    opacity: 0;
    transition: all 0.8s;
`;
const MenuBarText = styled.div`
    display: inline-block;
    color: white;
    font-weight: bolder;
    font-size: 16px;
    &:hover ${DropDownWrapper}{
        opacity: 1;
    }
`;
const DropDownText = styled.div`
    font-weight: normal;
    color: black;
    &:hover {
        background-color: #5db2ff;
    }
    //transition: all 1s;
`;

<MenuBarText>
    Carrers
    <DropDownWrapper>
        <DropDownText>인재관리철학&amp;인재상</DropDownText>
        <DropDownText>입사지원&amp;채용공고</DropDownText>
    </DropDownWrapper>
</MenuBarText>    
```
transition 사용 안할시 display: none, display: block 사용 가능
transition 사용 할 때 display: none 사용시 작동 x