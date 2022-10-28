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
    background-color: #183153;
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
        background-color: #183153;
        padding: 0 5px;
        &:hover {
            color: white;
        }
    }
    span {
        width: fit-content;
        padding: 0 5px;
        background-color: #183153;
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
        background-color: #183153;
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
    background-image: url("./Images/hiltonbefore.png");
    background-position: top;
    background-size: cover;
    z-index: 1;
`
const ContentItemTwoImageAfter = styled.div`
    width: 100%;
    height: 100%;
    position: absolute; 
    top: 0;
    left: 0;
    background-image: url("./Images/hiltonafter.png");
    background-position: center;
    background-size: cover;
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
        background: #183153;
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
    background-color: #183153;
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
        background-color: #183153;
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
        background-color: #183153;
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
    background-color: #183153;
    border-radius: 50%;
    text-align: center;
    align-items: center;
    color: white;
    filter: drop-shadow(0px 0px 3px black);
    &:nth-child(3) {
        color: rgb(49, 49, 49);
        background-color: #f8f8f8;
    }
    &:nth-child(4) {
        color: rgb(49, 49, 49);
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
        background-color: #183153;
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
            background-color: #183153;
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
            background-color: #183153;
            top: 10px;
            left: -60px;
        }
    }
`
const ContentItemFiveDescHeader = styled.div`
`
const ContentItemFiveDescContent1 = styled.div`
    padding-top: 340px;
`
const ContentItemFiveDescContent2 = styled.div`
    padding-top: 320px;
`
const ContentItemFiveDescContent3 = styled.div`
    padding-top: 260px;
`
const ContentItemFiveDescContent4 = styled.div`
    padding-top: 275px;
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
        <Initial>Hilton Hotel</Initial>
        <Content>
            <ContentItemOne>
                <img src="./Images/Hilton_main.png" alt="1" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1700" />
                <ContentItemOneText data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1500" >
                    <p style={{fontSize: "24px", width: "100%", textAlign: "right"}}>Coding 100%.</p>
                    <span>Hilton Hotel</span>
                    <p>Main & Sub page Redesign.</p>
                    <p><a target="_blank" href="https://hilton.co.kr/">Original</a> <a target="_blank" href="https://ridemetothemoon12.github.io/hliton_/">Redesign</a></p>
                </ContentItemOneText>
            </ContentItemOne>

            <ContentItemTwo>
                <ContentItemTwoProblems data-aos="fade-right" data-aos-offset="10" data-aos-duration="1500">
                    <ContentItemTwoTextWrap>
                    <h3>.Problems</h3>
                    <p>
                    하나의 화면이 담고 있는 내용이 과도하여 가독성이 떨어지는 설계로 이루어져 있습니다. 이 때문에 각 컨텐츠에서 강조해야 하는 정보나 사진들이
                    정돈되지 않은 상태로 흩어진 느낌을 줘 사용자에게 피로감을 더해줄 수 있습니다.
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
                    호텔 사이트라는 점을 최대한 고려하여, 고급진 느낌을 낼 수 있도록 색상과 사진 그리고 폰트를 통일감을 줄 수 있도록 설계하였습니다. 또한 각 컨텐츠별로
                    정리하여, 사용자에게 정확한 의도를 가지고 정보를 전달할 수 있도록 하였습니다.
                    </p>
                    </ContentItemTwoTextWrap>
                </ContentItemTwoSolutions>
            </ContentItemTwo>

            <ContentItemThree>
                <img src="./Images/hiltoncontentmain.png" alt="2" data-aos="fade-right" data-aos-offset="100"/>
                <img src="./Images/hiltonsub1.png" alt="2"  style={{position: "absolute", left: "50%", top: "15%"}} data-aos="fade-right" data-aos-offset="100" data-aos-delay="300"/>
                <img src="./Images/hiltonsub2.png" alt="2"  style={{position: "absolute", left: "35%", top: "20%"}} data-aos="fade-right" data-aos-offset="100" data-aos-delay="400"/>
                <ContentItemThreeText>
                <h3>UI & UX.</h3>
                <p>PC 화면이 주는 넓은 느낌을 잘 전달할 수 있도록 Fullpage로 구현하였습니다. 서브페이지 또한 비슷한 흐름을 사용하되, 다른 배치와 효과를 줘 특징점을 부여하였습니다.</p>
                </ContentItemThreeText>
            </ContentItemThree>

            <ContentItemFour>
                <ContentItemFourWrap>
                    <ContentItemFourColorsWrap>
                        <p>힐튼호텔의 고유 색상을 사용하여 지루할 수 있는 부분에 포인트 컬러로 사용하여, 변칙적인 느낌을 줄 수 있도록 하였습니다.</p>
                        <ContentItemFourColorsItem data-aos="fade-right" data-aos-duration="1500" data-aos-delay="150" data-aos-offset="10">#072745</ContentItemFourColorsItem>
                        <ContentItemFourColorsItem data-aos="fade-right" data-aos-duration="1500" data-aos-delay="180" data-aos-offset="10">#f8f8f8</ContentItemFourColorsItem>
                        <ContentItemFourColorsItem data-aos="fade-right" data-aos-duration="1500" data-aos-delay="210" data-aos-offset="10">#cfd8ef & #fffaef</ContentItemFourColorsItem>
                    </ContentItemFourColorsWrap>
                    <ContentItemFourFontsWrap>
                        <p>힐튼 호텔의 고급스러운 느낌을 잘 표현해주는 각진 나눔 스퀘어 폰트와 영어에는 Cinzel 폰트를 사용했습니다.</p>
                        <ReactTyped style={{fontSize: "18px", fontFamily: "nanumR"}}
                        strings={["Pristine and superb.","Nanum-square Regular. 18px", "나눔 스퀘어"]}
                        typeSpeed={100}
                        backSpeed={50}
                        loop >   
                        </ReactTyped>
                        <ReactTyped style={{fontSize: "22px", fontFamily: "nanumR"}}
                        strings={["Pristine and superb.","Nanum-square Regular. 22px", "나눔 스퀘어"]}
                        typeSpeed={100}
                        backSpeed={50}
                        loop >   
                        </ReactTyped>
                        <ReactTyped style={{fontSize: "32px", fontFamily: "cinzelR"}}
                        strings={["Pristine and superb.","Cinzel Regular. 32px", "Cinzel Regular"]}
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
                <img src="./Images/hiltonmain.png" alt='all' data-aos="fade-right" data-aos-duration="1500" data-aos-delay="150" data-aos-offset="10"/>
                <ContentItemFiveDescWrap>
                    <ContentItemFiveDescHeader data-aos="fade-right" data-aos-duration="1500" data-aos-offset="30">
                        <h3>Header.</h3>
                        <p>힐튼 호텔만의 느낌을 알 수 있도록 Swiper로 배너를 설정하였습니다. 또한 사용성 측면을 고려하여 하단부에 숙박예약 관련 Quick menu를 배치하였습니다.</p>
                    </ContentItemFiveDescHeader>
                    <ContentItemFiveDescContent1 data-aos="fade-right" data-aos-duration="1500">
                        <h3>Rooms.</h3>
                        <p>기존사이트가 담고 있는 객실의 사진들을 끊이지 않고 이어지는 Swiper 스크롤 형태로 구현하였습니다.</p>
                    </ContentItemFiveDescContent1>
                    <ContentItemFiveDescContent2 data-aos="fade-right" data-aos-duration="1500">
                        <h3>Offers.</h3>
                        <p>한 화면에 해당 컨텐츠에 관련된 사진을 Background로 배치하여 사진과 내용이 조화롭게 보일 수 있도록 설계하였습니다. 또한, Clickevent를 통해 각 컨텐츠를 클릭을 통해 이동할 수 있도록 하였습니다.</p>
                    </ContentItemFiveDescContent2>
                    <ContentItemFiveDescContent3 data-aos="fade-right" data-aos-duration="1500">
                        <h3>Dining.</h3>
                        <p>각 파인 다이닝 메뉴의 특징이 될만한 음식 사진을 통해 사용자에게 기초적인 정보를 제공할 수 있도록 설계하였습니다. 또한 해당 사진에 Hover 효과를 줘 이에 관련하여 자세한 정보를 알려줄 수 있도록 구현하였습니다.</p>
                    </ContentItemFiveDescContent3>
                    <ContentItemFiveDescContent4 data-aos="fade-right" data-aos-duration="1500">
                        <h3>Promotions.</h3>
                        <p>현재 진행중인 프로모션들을 배치하였습니다. 사진 우측에 해당 내용에 대한 정보를 간략하게 설명한 텍스트를 배치하여 사용성을 높였습니다.</p>
                    </ContentItemFiveDescContent4>
                    <ContentItemFiveDescFooter data-aos="fade-right" data-aos-duration="1500">
                        <h3>Footer & Map.</h3>
                        <p>호텔의 위치를 Google maps API로 받아와 상단에 배치하였습니다. 하단부에는 footer와 관련된 정보를 배치하여 부가적인 정보를 제공할 수 있도록 설계하였습니다.</p>
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