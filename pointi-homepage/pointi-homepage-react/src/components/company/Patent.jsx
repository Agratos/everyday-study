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
                <Modal onClickModal={onClickModal} device={device}>
                    <PatentModal imageUrl={imageUrl} onClickModal={onClickModal}/>
                </Modal>
            }
            <Title>{data.title}</Title>
            <ListTableWrapper>
                { device !== 'Mobile' ? 
                    (<Tbody>
                        <TextWrapper none={true} weight={`bolder`}>
                                <ListDateWrapper top={true} >등록일자</ListDateWrapper>
                                <ListNumberWrapper top={true} >특허번호</ListNumberWrapper>
                                <ListTitleWrapper top={true} >특허명</ListTitleWrapper>
                        </TextWrapper>
                        {data.list.slice(offset, offset + limit).map(({date, number, name, image}, index) => (
                            <TextWrapper key={`patent-board${index}`} >
                                <ListDateWrapper>{date}</ListDateWrapper>
                                <ListNumberWrapper>{number}</ListNumberWrapper>
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
                        {data.list.slice(offset, offset + limit).map(({date, number, name, image}, index) => (
                            <TextWrapper 
                                key={`patent-board${index}`}
                                onClick={() => {
                                    onClickModal();
                                    setImageUrl(image);
                                }}
                            >
                                <MobilePatentWrapper>
                                    <MobilePatentText>
                                        등록일자: {date}
                                    </MobilePatentText>
                                    <MobilePatentText>
                                        특허번호: {number}
                                    </MobilePatentText> 
                                    <MobilePatentText type={'nameWrapper'}>
                                        <MobilePatentText width={'64px'} type={'특허명'}>
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
            </ListTableWrapper>
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
    width: 100%;
    margin-bottom: 100px;
`;
const Title = styled.div`
    ${({theme}) => theme.fontCommon.companyTitle};
`;
const ListTableWrapper = styled.table`
    margin-top: 40px;
    min-width: inherit;
`;
const Tbody = styled.tbody``;
const TextWrapper = styled.tr`
    &:hover {
        background-color: #cac5c54f;
    }
    pointer-events: ${props => props.none && `none`};
`;
const ListDateWrapper = styled.td`
    ${({top}) => top && css`
        text-align: center;
        background-color: #cac5c58c;
    `}
    font-size: 1.1rem;
    padding: 8px;
    vertical-align: top;
    width: 100px;
    border: 0.5px solid black;
`;
const ListNumberWrapper =styled(ListDateWrapper)`
    width: 136px;
`;
const ListTitleWrapper = styled(ListDateWrapper)`
    width: calc(100% - 240px);
    :hover{
        cursor: pointer;
    }
`;
const MobilePatentWrapper =styled(ListDateWrapper)`
    border: 0.1px solid black;
`;
const MobilePatentText = styled.div`
    ${({type, theme}) => type === 'nameWrapper' && theme.divCommon.flex}
    ${({type}) => type === '특허명' && css`
        margin-right: -8px;
    `}
    width: ${({width}) => width};
`;
export default Patent;