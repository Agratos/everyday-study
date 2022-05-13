import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    width: 15vw;
    margin: auto;
    //position: static;
`;
const KategorieWrapper = styled.div`
    //display: flex;
    justify-content: ${props => props.justify};
    flex-wrap: ${props => props.isWrap || 'wrap'};
    margin: 32px 0;
    border-bottom: 3px solid #3d74a7;
    border-top: 3px solid #3d74a7;
    line-height: 16px;
    &:hover {
        cursor: pointer;
    }
    ${props => props.subtitle && 
        css`
            border-bottom: 1px solid black;
        `
    }
`;
const Kategorie = styled.div`
    //width: fit-content;
    margin: 8px 0;
    padding: 8px 24px;
    border-radius: 24px;
    font-size: 1.2rem;
    word-break: break-word;
    &{
        ${ props => props.id === props.isClick && `
            color: #5DB2FF;
            //border: 1px solid #5DB2FF;
            padding: 8px 24px;
            width: fit-content;
        `}
    }
`;

const MenuKategorieLeft = ({ kategorie, justify, subtitle, setIsClick, isClick, setSubjectKategorie, setSubtitleKategorie, isWrap}) => {
    const onClick = (e) => {
        setIsClick(e.target.id);
        subtitle ? setSubtitleKategorie(document.getElementById(e.target.id).innerText)
        : setSubjectKategorie(document.getElementById(e.target.id).innerText);
    }
    
    return(
        <Wrapper>
            <KategorieWrapper justify={justify} subtitle={subtitle} wrap={isWrap}>
                { kategorie.map(({title,id}, index) => (
                    <>
                        <Kategorie 
                            key={`menuKategroie${title}`} 
                            id={id}  
                            onClick={(e) => onClick(e)}
                            isClick={isClick}
                        >
                            {title}
                            
                        </Kategorie>
                        {kategorie.length - 1 !== index && <hr/>}
                    </>
                ))}
            </KategorieWrapper>
        </Wrapper>
    )
}

export default MenuKategorieLeft;