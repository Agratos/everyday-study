import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
`;
const KategorieWrapper = styled.div`
    display: flex;
    justify-content: ${props => props.justify};
    flex-wrap: ${props => props.isWrap || 'wrap'};
    
    line-height: 16px;
    &:hover {
        cursor: pointer;
    }
    margin: 32px 0;
    border-bottom: 3px solid #3d74a7;
    ${props => props.subtitle && 
        css`
            border-bottom: 1px solid black;
        `
    }
`;
const Kategorie = styled.div`
    font-size: 1.2rem;
    margin: 8px 0;
    padding: 8px 24px;
    border-radius: 24px;
    &{
        ${ props => props.id === props.isClick && `
            color: #5DB2FF;
            border: 1px solid #5DB2FF;
            padding: 6px 24px;
        `}
    }
`;

const MenuKategorie = ({ kategorie, justify, subtitle, setIsClick, isClick, setSubjectKategorie, setSubtitleKategorie, isWrap}) => {
    const onClick = (e) => {
        setIsClick(e.target.id);
        subtitle ? setSubtitleKategorie(document.getElementById(e.target.id).innerText)
        : setSubjectKategorie(document.getElementById(e.target.id).innerText);
    }
    
    return(
        <Wrapper>
            <KategorieWrapper justify={justify} subtitle={subtitle} wrap={isWrap}>
                { kategorie.map(({title,id}, index) => (
                    <Kategorie 
                        key={`menuKategroie${title}`} 
                        id={id}  
                        onClick={(e) => onClick(e)}
                        isClick={isClick}
                    >
                        {title}
                    </Kategorie>
                ))}
            </KategorieWrapper>
        </Wrapper>
    )
}

export default MenuKategorie;