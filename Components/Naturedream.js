import styled, { keyframes } from 'styled-components'
import axios from 'axios';
import React,{useState, useEffect} from 'react'
import "aos/dist/aos.css";
import Aos from 'aos';
import ReactTyped from 'react-typed';
import 'react-typed/dist/animatedCursor.css';

const InitialAnimation = keyframes`
0% {
    transform: translateY(0%);
}
100% {
    transform: translateY(-100%);
}
`
const Initial = styled.div`
    width: 100%;
    height: 100%;
    background-color: #a91054;
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    list-style: -10px;
    font-size: 350px;
    animation: ${InitialAnimation} 1s forwards;
    animation-delay: .5s;
    overflow: hidden;
`
const Content = styled.div`
    img {
        filter: drop-shadow(0px 0px 4px rgba(0,0,0,0.5));
    }
`
const ContentItemOne = styled.div`
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    max-width: 1200px;
    margin: 300px auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    flex-direction: row-reverse;
`
const ContentItemOneText = styled.div`
    margin-right: 30px;
    flex-basis: 50%;
    font-size: 48px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    a {
        font-size: 32px;
        background-color: #a91054;
        padding: 0 5px;
        &:hover {
            color: white;
        }
    }
    span {
        width: fit-content;
        padding: 0 5px;
        background-color: #a91054;
        color: white;
    }
    p {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }
`
const ContentItemTwo = styled.div`
    display: flex;
    justify-content: center;
`
const ContentItemTwoProblems = styled.div`
    margin-right: 15px;
`
const ContentItemTwoSolutions = styled.div`
    display: flex;
    margin-left: 15px;
    align-items: flex-end;
`
const ContentItemTwoTextWrap = styled.div`
    width: 300px;
    h3 {
        width: fit-content;
        padding: 0 5px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-weight: normal;
        font-size: 32px;
        background-color: #a91054;
        color: white;
    }
`
const ContentItemTwoImagesWrap = styled.div`
    position: relative;
    width: 500px;
    height: 800px;
    background-color: white;
    filter: drop-shadow(0px 0px 4px rgba(0,0,0,0.5));
`
const ContentItemTwoImageBefore = styled.div`
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("./Images/backimg2.png");
    z-index: 1;
`
const ContentItemTwoImageAfter = styled.div`
    width: 100%;
    height: 100%;
    position: absolute; 
    top: 0;
    left: 0;
    background-image: url("./Images/foreimg2.png");
`
const Input = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    appearance: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    z-index: 1;
    &::-webkit-slider-thumb {
        position: relative;
        appearance: none;
        width: 2px;
        height: 800px;
        background: #a91054;
        cursor: pointer;
    }
`
const ContentItemTwoImagesButton = styled.div`
    position: absolute;
    top: 50%;
    left: calc(50% - 10px);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #a91054;
    pointer-events: none;
    z-index: 1;
    &::before {
        position: absolute;
        content: "";
        width: 2px;
        height: 50%;
        top: 25%;
        transform: translateX(-50%);
        left: 8px;
        background-color: white;
    }
    &::after {
        position: absolute;
        content: "";
        width: 2px;
        height: 50%;
        top: 25%;
        transform: translateX(-50%);
        left: 12px;
        background-color: white;
    }
`
const ContentItemThree = styled.div`
    max-width: 1200px;
    margin: 300px auto;
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    justify-content: space-between;
    h3 {
        width: fit-content;
        background-color: #a91054;
        color: white;
        padding: 0 5px;
    }
`
const ContentItemThreeText = styled.div`
    max-width: 400px;
    h3 {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-weight: normal;
        font-size: 32px;
    }
    p {
        margin: 0;
        margin-right: 70px;
        font-size: 18px;
        &:nth-child(1) {
            margin-bottom: 10px;
        }
    }
`
const ContentItemFour = styled.div`
    position: relative;
    &::after {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        left: 17%;
        top: -20%;
        position: absolute;
        content: "Color & Fonts";
        font-size: 32px;
        background-color: #a91054;
        padding: 0 5px;
        color: white;
    }
`
const ContentItemFourWrap = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 0;
`
const ContentItemFourColorsWrap = styled.div` 
    flex-wrap: wrap;
    flex-basis: 40%;
    display: flex;
    justify-content: space-around;
    p {
        margin: 10px 0;
    }
`
const ContentItemFourColorsItem = styled.div`
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    display: flex;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: #a91054;
    border-radius: 50%;
    text-align: center;
    align-items: center;
    color: rgb(49, 49, 49);
    filter: drop-shadow(0px 0px 3px black);
    &:nth-child(3) {
        background-color: #ffffff;
    }
    &:nth-child(4) {
        background: rgb(255,255,255);
        background: linear-gradient(126deg, rgba(255,250,239,1) 0%, rgba(207,216,239,1) 100%);
    }
`
const ContentItemFourFontsWrap = styled.div`
    flex-basis: 40%;
    span {
        margin-top: 5px;
        display: flex;
    }
`
const ContentItemFive = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 300px;
    margin-bottom: 200px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    img {
        max-width: 800px;
    }
`
const ContentItemFiveText = styled.div`
    margin-bottom: 30px;
    h3 {
        width: fit-content;
        font-size: 32px;
        padding: 0 5px;
        background-color: #a91054;
        color: white;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-weight: normal;
    }
`
const ContentItemFiveImagesDescWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`
const ContentItemFiveDescWrap = styled.div`
    width: 300px;
    height: 2000px;
    margin-top: 10px;
    margin-left: 40px;
    color: black;
    h3 {
        font-weight: normal;
        font-size: 32px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        text-decoration: underline;
        position: relative;
        &::before {
            position: absolute;
            content: "";
            width: 20px;
            height: 20px;
            background-color: #a91054;
            border-radius: 50%;
            top: 0;
            left: -10px;
            z-index: -1;
        }
        &::after {
            position: absolute;
            content: "";
            width: 60px;
            height: 2px;
            background-color: #a91054;
            top: 10px;
            left: -60px;
        }
    }
`
const ContentItemFiveDescHeader = styled.div`
`
const ContentItemFiveDescContent1 = styled.div`
    padding-top: 255px;
`
const ContentItemFiveDescContent2 = styled.div`
    padding-top: 240px;
`
const ContentItemFiveDescContent3 = styled.div`
    padding-top: 95px;
`
const ContentItemFiveDescContent4 = styled.div`
    padding-top: 395px;
`
const ContentItemFiveDescFooter = styled.div`
    padding-top: 300px;
`
const ContentNavigation = styled.div`
    top: 40%;
    left: 95%;
    position: fixed;
`
const ContentNavigationLi = styled.li`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 30px 0;
    transition: .3s;
    cursor: pointer;
    position: relative;
    background-color: ${(props) => props.color || "skyblue"};
    &:nth-child(2) {
        &:hover::after {
            content: "Ministry of culture";
        }
    }
    &:nth-child(3) {
        &:hover::after {
            content: "Nature dream";
        }
    }
    &:nth-child(4) {
        &:hover::after {
            content: "Hilton hotel";
        }
    }
    &:hover {
        transform: scale(1.8);
        &::after {
            position: absolute;
            top: -5px;
            left: -120px;
            width: 150px;
            height: 30px;
            font-size: 14px;
            background-color: black;
            color: white;
            text-align: center;
            line-height: 30px;
            filter: drop-shadow(0px 0px 0px black);
            transform: scale(0.5);
        }
    }
`
const clickEvent = function(link) {
    window.location.replace(link);
}
function handleChange(e) {
    console.log("changed")
    var pos = e.target.value;
    var tarWindow = document.querySelector(".TargetSelectionWindowChanger")
    var tarbutton = document.querySelector(".WindowChangerButton")
    tarWindow.style.width = `${pos}%`
    tarbutton.style.left = `calc(${pos}% - 10px)`
}

function Grandhyatt() {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const response = await axios.get(
            'Img.json'
        );
        setUsers(response.data.portfolios);
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        Aos.init();
        })
  return (
    <>
        <Initial>Nature Dream</Initial>
        <Content>
            <ContentItemOne>
                <img src="./Images/nature_main.png" alt="1" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1700"/>
                <ContentItemOneText data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1500" >
                    <span>Nature Dream</span>
                    <p>Main page Redesign.</p>
                    <p><a target="_blank" href="http://www.icoop.or.kr/coopmall/">Original</a> <a target="_blank" href="https://ridemetothemoon12.github.io/naturedream_react/">Redesign</a></p>
                </ContentItemOneText>
            </ContentItemOne>

            <ContentItemTwo>
                <ContentItemTwoProblems data-aos="fade-right" data-aos-offset="10" data-aos-duration="1500">
                    <ContentItemTwoTextWrap>
                    <h3>.Problems</h3>
                    <p>
                    환경이나 사회에 긍정적인 영향을 주는 여러 활동들을 나열하여 해당 브랜드의 가치를 높인다는 취지는 좋습니다. 다만, 스크롤이
                    길고 해당 사이트를 이용하는 고객이 원하는 정보를 얻기 어렵게 설계되어 있습니다.
                    </p>
                    </ContentItemTwoTextWrap>
                </ContentItemTwoProblems>
                    <ContentItemTwoImagesWrap data-aos="fade" data-aos-offset="10" data-aos-duration="1500">
                    <ContentItemTwoImageBefore className='TargetSelectionWindowChanger'></ContentItemTwoImageBefore>
                    <ContentItemTwoImageAfter></ContentItemTwoImageAfter>
                    <Input type="range" min="0" max="100" defaultValue="50" onChange={(e) => {return handleChange(e)}}></Input>
                    <ContentItemTwoImagesButton className='WindowChangerButton'></ContentItemTwoImagesButton>
                    </ContentItemTwoImagesWrap>
                <ContentItemTwoSolutions>
                    <ContentItemTwoTextWrap alignItems="flex-end" data-aos="fade-left" data-aos-offset="10" data-aos-duration="1500">
                    <h3>Solutions.</h3>
                    <p>
                    해당 사이트의 사용성 측면을 생각하여, 배너를 축약시켜 스와이퍼로 분류하였고, 명확하고 간결한 디자인을 채택하여
                    깔끔하고 깨끗한 이미지를 느낄 수 있도록 리디자인 하였습니다.
                    </p>
                    </ContentItemTwoTextWrap>
                </ContentItemTwoSolutions>
            </ContentItemTwo>

            <ContentItemThree>
                <img src="./Images/blender2.png" alt="2" data-aos="fade-right" data-aos-offset="100"/>
                <img src="./Images/reactivenature.png" alt="2"  style={{position: "absolute", left: "35%", borderRadius: "30px"}} data-aos="fade-right" data-aos-offset="100" data-aos-delay="300"/>
                <ContentItemThreeText>
                <h3>UI & UX.</h3>
                <p>PC뿐만 아니라 사용자의 특성상, 대화면의 모바일 및 테블릿에서 사용하는 경우가 많은 점을 고려하여 테블릿 반응형으로 구현하였습니다.</p>
                </ContentItemThreeText>
            </ContentItemThree>

            <ContentItemFour>
                <ContentItemFourWrap>
                    <ContentItemFourColorsWrap>
                        <p>자연드림의 메인 컬러를 상단 헤더에 포인트 컬러로 넣어 전체적인 느낌을 부여하였고, 컨탠츠들의 시작과 끝을 알 수 있도록 전체 div를 감싸는 색상을 설정했습니다.</p>
                        <ContentItemFourColorsItem data-aos="fade-right" data-aos-duration="1500" data-aos-delay="150" data-aos-offset="10">#a91054</ContentItemFourColorsItem>
                        <ContentItemFourColorsItem data-aos="fade-right" data-aos-duration="1500" data-aos-delay="180" data-aos-offset="10">White</ContentItemFourColorsItem>
                        <ContentItemFourColorsItem data-aos="fade-right" data-aos-duration="1500" data-aos-delay="210" data-aos-offset="10">#cfd8ef & #fffaef</ContentItemFourColorsItem>
                    </ContentItemFourColorsWrap>
                    <ContentItemFourFontsWrap>
                        <p>얇고 각진 느낌이 나는 S-Core Dream 폰트를 사용하여 깨끗하고 정갈한 느낌을 낼 수 있도록 하였습니다.</p>
                        <ReactTyped style={{fontSize: "18px", fontFamily: "Score3"}}
                        strings={["Make your dreams come true.","S-Core Dream3. 18px", "에스코어 드림"]}
                        typeSpeed={100}
                        backSpeed={50}
                        loop >   
                        </ReactTyped>
                        <ReactTyped style={{fontSize: "22px", fontFamily: "Score4"}}
                        strings={["Make your dreams come true.","S-Core Dream4. 22px", "에스코어 드림"]}
                        typeSpeed={100}
                        backSpeed={50}
                        loop >   
                        </ReactTyped>
                        <ReactTyped style={{fontSize: "32px", fontFamily: "Score5"}}
                        strings={["Make your dreams come true.","S-Core Dream5. 32px", "에스코어 드림"]}
                        typeSpeed={100}
                        backSpeed={50}
                        loop >   
                        </ReactTyped>
                        
                    </ContentItemFourFontsWrap>
                </ContentItemFourWrap>
            </ContentItemFour>

            <ContentItemFive>
            <ContentItemFiveText>
                <h3>Main Page</h3>
            </ContentItemFiveText>
            <ContentItemFiveImagesDescWrap>
                <img src="./Images/Artboard 2.png" alt='all' data-aos="fade-right" data-aos-duration="1500" data-aos-delay="150" data-aos-offset="10"/>
                <ContentItemFiveDescWrap>
                    <ContentItemFiveDescHeader data-aos="fade-right" data-aos-duration="1500" data-aos-offset="30">
                        <h3>Header.</h3>
                        <p>헤더 메뉴에 필요한 정보를 압축하여 탭 메뉴 형식으로 구현하였고, 그 이외의 기능들을 아이콘으로 정렬시켜 배치하여 사용자의 편의성을 높였습니다.</p>
                    </ContentItemFiveDescHeader>
                    <ContentItemFiveDescContent1 data-aos="fade-right" data-aos-duration="1500">
                        <h3>Content 1.</h3>
                        <p>해당 컨탠츠의 정보를 두 줄로 나열하여, 상품의 다양성을 피력하였습니다. 깔끔하고 선명한 이미지를 통해 사용자의 눈길이 한번 더 갈 수 있도록 하였습니다.</p>
                    </ContentItemFiveDescContent1>
                    <ContentItemFiveDescContent2 data-aos="fade-right" data-aos-duration="1500">
                        <h3>Content 2.</h3>
                        <p>정보와 사진을 하나의 품목처럼 포장하여, 사용자에게 명확한 정보를 전달할 수 있도록 설계하였습니다. 가벼운 Background color 설정을 통해 컨탠츠의 반복성을 줄였습니다. </p>
                    </ContentItemFiveDescContent2>
                    <ContentItemFiveDescContent3 data-aos="fade-right" data-aos-duration="1500">
                        <h3>Content 3.</h3>
                        <p>사진의 배치에 변화를 줘 양식의 반복에서 나오는 지루함을 줄였습니다. 또한, 조합원가를 부각하기 위해 포인트 컬러를 씌워 돋보이게 만들었습니다.</p>
                    </ContentItemFiveDescContent3>
                    <ContentItemFiveDescContent4 data-aos="fade-right" data-aos-duration="1500">
                        <h3>Content Features.</h3>
                        <p>분류된 컨탠츠별 제목과 부제를 통해 해당 내용에 대한 전체적인 정보를 알 수 있도록 하였으며, 각각 다른 포인트 컬러를 사용하여 해당 컨탠츠가 가지고 있는 느낌을 나타내도록 설계하였습니다.</p>
                    </ContentItemFiveDescContent4>
                    <ContentItemFiveDescFooter data-aos="fade-right" data-aos-duration="1500">
                        <h3>Footer.</h3>
                        <p>과도하게 크게 설정되어 있거나, 필요하지 않은 정보나 부족한 정보가 있는 부분을 보완하여 Footer를 간결하게 배치하였습니다.</p>
                    </ContentItemFiveDescFooter>
                </ContentItemFiveDescWrap>
            </ContentItemFiveImagesDescWrap>
            </ContentItemFive>

            <ContentNavigation>
            <ul>
                {
                    users.map((e,index)=>{
                        return <ContentNavigationLi key={e.id} color={e.color} onClick={() => clickEvent(e.link)}></ContentNavigationLi>
                    }) 
                }
            </ul>
            </ContentNavigation>
        </Content>
    </>
  )
}

export default Grandhyatt