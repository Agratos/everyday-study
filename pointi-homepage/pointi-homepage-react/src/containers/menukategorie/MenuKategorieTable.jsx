import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
`;
const KategorieWrapper = styled.table`
    display: flex;
    justify-content: ${props => props.justify};
    flex-wrap: ${props => props.isWrap || 'wrap'};
    margin: 32px 0;
    border-bottom: 2px solid #3d74a7;
    //border-top: 3px solid #3d74a7;
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
const Kategorie = styled.td` 
    //margin: 8px 0;
    padding: 12px 24px;
    //border-radius: 24px;
    font-size: 1.2rem;
    border: 1px solid black;
    //border-bottom: none;
    &{
        ${ props => props.id === props.isClick && `
            color: #5DB2FF;
            // border: 1px solid #5DB2FF;
            padding: 12px 24px;
        `}
    }
`;

const MenuKategorieTable = ({ kategorie, justify, subtitle, setIsClick, isClick, setSubjectKategorie, setSubtitleKategorie, isWrap}) => {
    const onClick = (e) => {
        setIsClick(e.target.id);
    }

    return(
        <Wrapper>
            <KategorieWrapper justify={justify} subtitle={subtitle} wrap={isWrap}>
                { kategorie.map(({title,id}, index) => (
                    <Kategorie 
                        key={`menuKategroieLeftTable${title}`} 
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

export default MenuKategorieTable;