import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: ${props => props.isWrap || 'wrap'};
    max-width: 1200px;
    width: ${props => props.width};
    line-height: 16px;
    &:hover {
        cursor: pointer;
    }
    margin-bottom: 48px;
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

const MenuKategorie = ({ kategorie, width, setIsClick, isClick, isWrap}) => {

    const onClick = (e) => {
        setIsClick(e.target.id)
    }
    
    return(
        <Wrapper width={width} wrap={isWrap}>
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
        </Wrapper>
    )
}

export default MenuKategorie;