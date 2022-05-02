import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mainData from 'assets/dummy/main.json';
import mainSoultionImg from 'assets/imgs/main/main_solution.jpg';
import { IoIosGlobe, IoIosBarcode, IoIosRadio, IoIosStats  } from "react-icons/io";

const Wrapper = styled.div`
    margin: 4vh 10vw;
    height: fit-content;
`;
const MainTitle = styled.div`
    font-size: 48px;
    text-align: center;
    margin: 10vh 0;
`;
const MainIntroSolutionWrapper = styled.div`
    display: flex;
`;
const MainIntro = styled.div`
    text-align: center;
    width: 60%;
`;
const MainIntroTitle = styled.div`
    font-size: 24px;
    font-weight: bolder;
    margin-bottom: 24px;
`;
const MainIntroText = styled.div`
    text-align: left;
    font-size: 16px;
    margin-bottom: 40px;
`;
const SolutionOutWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const ReactIconWrapper = styled.div`
    color:#007BFF;
`;
const SolutionWrapper = styled.div`
    width: 40%;
    padding: 40px 24px;
    background: linear-gradient(-135deg, transparent 32px, #F0F9FD 0);
    &:hover {
        color: white !important;
        background: linear-gradient(-135deg, transparent 32px, #1B9CE3 0);
    }
    &:hover ${ReactIconWrapper} {
        color: white;
    }
    margin-bottom: 32px;
`;
const SolutionTitle = styled.div`
    font-size: 24px;
    font-weight: bolder;
`;
const SolutionText = styled.div`
    font-size: 14px;
    margin-top: 8px;
`;
const MainSolution = styled.div`
    justify-content: center;
    border: 4px solid #d1ebf9;
    width: 30%;
    padding: 20px;
    margin-left: 5%;
`;
const MainSolutionImg = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    height: 40vh;
`;
const MainSolutionTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin: 24px 0;
`;
const MainSolutionText = styled.div`
    margin: 24px 0;
    line-height: 24px;
    color: #555454;
`;
const MainSolutionButton = styled(Link)`
    color: white;
    background-color: #007BFF;
    padding: 12px;
    border-radius: 12px;
    width: fit-content;
    text-decoration-line: none;
    &:hover {
        cursor: pointer;
    }
`;

const Main = () => {
    //ScrollToMoveId();

    return (
        <Wrapper>
            <MainTitle>{mainData.title}</MainTitle>
            <MainIntroSolutionWrapper>
                <MainIntro>
                    <SolutionOutWrapper>
                        <MainIntroTitle>{mainData.intro.title}</MainIntroTitle>
                        <MainIntroText>{mainData.intro.text}</MainIntroText>
                        { mainData.solution.map((solution, index) => (
                            <SolutionWrapper key={`solutionWrapper${index}`}>
                                <ReactIconWrapper>
                                {
                                    index === 0 ? <IoIosGlobe size={56} />
                                    : (index === 1 ? <IoIosBarcode size={56}/>
                                    : (index === 2 ? <IoIosRadio size={56}/>
                                    : <IoIosStats size={56}/>))
                                }
                                </ReactIconWrapper>
                                { solution.map((data, index) =>(
                                    index === 0 ? <SolutionTitle key={`solution${index}`}>{data}</SolutionTitle>
                                    : <SolutionText key={`solution${index}`}>{data}</SolutionText>
                                ))}
                            </SolutionWrapper>
                        ))}
                    </SolutionOutWrapper>
                </MainIntro>
                <MainSolution>
                    <MainSolutionImg img={mainSoultionImg}/>
                    <MainSolutionTitle>{mainData.mainSolution.title}</MainSolutionTitle>
                    <MainSolutionText>{mainData.mainSolution.text[0]}</MainSolutionText>
                    <MainSolutionText>{mainData.mainSolution.text[1]}</MainSolutionText>
                    <MainSolutionButton to='/solution'>{mainData.mainSolution.title}</MainSolutionButton>
                </MainSolution>
            </MainIntroSolutionWrapper>
        </Wrapper>
    )
}

export default Main;