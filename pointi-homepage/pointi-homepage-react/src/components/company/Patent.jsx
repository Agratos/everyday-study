import React, { useState, useCallback} from 'react';
import styled, { css } from 'styled-components';

import Pagination from 'containers/pagenation/Pagination';
import Modal from 'components/modal/Modal';
import PatentModal from 'components/modal/PatentModal';

const Patent = ({data, device}) => {
    const [ limit ] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    
    const [ isOpenModal, setIsOpenModal ] = useState(false);
    const [ imageUrl, setImageUrl ] = useState(null);
    
    const onClickModal = useCallback(() => {
        setIsOpenModal(!isOpenModal);
    }, [isOpenModal]);

    return (
        <Wrapper id='patent'>
            {isOpenModal && 
                <Modal onClickModal={onClickModal}>
                    <PatentModal imageUrl={imageUrl} onClickModal={onClickModal}/>
                </Modal>
            }
            <Title>{data.title}</Title>
            <ListWrapper>
                { device !== 'Mobile' ? 
                    (<Tbody>
                        <TextWrapper none={true} weight={`bolder`}>
                                <DateWrapper>등록일자</DateWrapper>
                                <NumberWrapper>특허번호</NumberWrapper>
                                <ListTitleWrapper>특허명</ListTitleWrapper>
                        </TextWrapper>
                        {data.list.slice(offset, offset + limit).map(({date, number, name, image}, index) => (
                            <TextWrapper key={`patent-board${index}`} >
                                <DateWrapper>{date}</DateWrapper>
                                <NumberWrapper>{number}</NumberWrapper>
                                <ListTitleWrapper onClick={() => {
                                    onClickModal();
                                    setImageUrl(image);
                                }}>{name}</ListTitleWrapper>
                            </TextWrapper>
                        ))}
                    </Tbody>) : (
                    <Tbody>
                        <TextWrapper none={true} weight={`bolder`}>
                                <MobilePatentWrapper>특허</MobilePatentWrapper>
                        </TextWrapper>
                        {data.list.slice(offset, offset + limit).map(({date, number, name}, index) => (
                            <TextWrapper key={`patent-board${index}`}>
                                <MobilePatentWrapper>
                                    <MobilePatentText>
                                        등록일자: {date}
                                    </MobilePatentText>
                                    <MobilePatentText>
                                        특허번호: {number}
                                    </MobilePatentText> 
                                    <MobilePatentText type={'특허명'}>
                                        <MobilePatentText width={'64px'}>
                                            특허명: 
                                        </MobilePatentText>
                                        <MobilePatentText width={'80%'}>
                                            {name}
                                        </MobilePatentText>
                                    </MobilePatentText>
                                </MobilePatentWrapper>
                            </TextWrapper>
                        ))}
                    </Tbody>
                )}
            </ListWrapper>
            <Pagination
                total={data.list.length}
                limit={limit}
                page={page}
                setPage={setPage}
            />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenterCenter}
    margin-bottom: 100px;
`;
const Title = styled.div`
    ${({theme}) => theme.fontCommon.companyTitle};
`;
const ListWrapper = styled.table`
    margin-top: 40px;
    table-layout: fixed;
`;
const Tbody = styled.tbody``;
const TextWrapper = styled.tr`
    &:hover {
        background-color: #cac5c5;
    }
    pointer-events: ${props => props.none && `none`};
`;
const DateWrapper = styled.td`
    border: 1px solid black;
    width: 50px;
    max-width: 100px;
    font-size: 1.1rem;
    padding: 8px;
    vertical-align: top;
`;
const NumberWrapper =styled(DateWrapper)`
    margin-left: 32px;
    min-width: 150px;
`;
const ListTitleWrapper = styled(NumberWrapper)`
    width: 60%;
    :hover{
        cursor: pointer;
    }
`;
const MobilePatentWrapper =styled(DateWrapper)`
    border-left: none;
`;
const MobilePatentText = styled.div`
    ${({type, theme}) => type === '특허명' && theme.divCommon.flex}
    width: ${({width}) => width};
`;
export default Patent;