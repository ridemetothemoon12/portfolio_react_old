import styled, { keyframes } from 'styled-components'
import React,{ useEffect } from 'react'
import "aos/dist/aos.css";
import Aos from 'aos';
import ReactTyped from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import { useSelector } from 'react-redux';


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
    background-color: #BD2137;
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
`
const ContentItemOneText = styled.div`
    margin-left: 30px;
    flex-basis: 50%;
    font-size: 48px;
    a {
        font-size: 32px;
        background-color: #BD2137;
        padding: 0 5px;
        &:hover {
            color: white;
        }
    }
    span {
        width: fit-content;
        padding: 0 5px;
        background-color: #BD2137;
        color: white;
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
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-weight: normal;
        font-size: 32px;
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
    background-image: url("../images/backimg.png");
    z-index: 1;
`
const ContentItemTwoImageAfter = styled.div`
    width: 100%;
    height: 100%;
    position: absolute; 
    top: 0;
    left: 0;
    background-image: url("../images/foreimg.png");
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
        background: #BD2137;
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
    background-color: #BD2137;
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
    background-color: #BD2137;
    border-radius: 50%;
    text-align: center;
    align-items: center;
    color: rgb(49, 49, 49);
    filter: drop-shadow(0px 0px 3px black);
    &:nth-child(3) {
        background-color: #e8f0f9;
    }
    &:nth-child(4) {
        background: rgb(255,255,255);
        background: linear-gradient(126deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%);
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
    img {
        max-width: 800px;
    }
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
            background-color: #BD2137;
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
            background-color: #BD2137;
            top: 10px;
            left: -60px;
        }
    }
`
const ContentItemFiveDescHeader = styled.div``
const ContentItemFiveDescContent1 = styled.div`
    padding-top: 400px;
`
const ContentItemFiveDescContent2 = styled.div`
    padding-top: 350px;
`
const ContentItemFiveDescContent3 = styled.div`
    padding-top: 380px;
`
const ContentItemFiveDescContent4 = styled.div`
    padding-top: 400px;
`
const ContentItemFiveDescFooter = styled.div`
    padding-top: 250px;
`
const ContentNavigation = styled.div`
    top: 40%;
    left: 95%;
    position: fixed;
    li {
        width: 20px;
        height: 20px;
        background-color: #BD2137;
        border-radius: 50%;
        margin: 30px 0;
        transition: .3s;
        cursor: pointer;
        position: relative;
        &:nth-child(2) {
            background-color: #a91054;
            &:hover::after {
                content: "Nature Dream.";
            }
        }
        &:nth-child(3) {
            background-color: skyblue;
            &:hover::after {
                content: "test";
            }
        }
        &:nth-child(4) {
            background-color: coral;
            &:hover::after {
                content: "test";
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
        &.on {
            transform: scale(1.8);
        }
    }
`
function handleChange(e) {
    console.log("changed")
    var pos = e.target.value;
    var tarWindow = document.querySelector(".TargetSelectionWindowChanger")
    var tarbutton = document.querySelector(".WindowChangerButton")
    tarWindow.style.width = `${pos}%`
    tarbutton.style.left = `calc(${pos}% - 10px)`
}
function Grandhyatt() {
    useEffect(() => {
        Aos.init();
        })
        const testNav = useSelector((state) => state.test.name)
    return (
    <>
    {testNav}
        <Initial>Grand Hyatt</Initial>
        <Content>
            <ContentItemOne>
                <img src="images/grand_main.png" alt="1" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1500"/>
                <ContentItemOneText data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1700">
                    <span>Grand Hyatt Hotel</span>
                    <p>Main page Redesign.</p>
                    <p><a href="#null">Original</a> <a href="#null">Redesign</a></p>
                </ContentItemOneText>
            </ContentItemOne>

            <ContentItemTwo>
                <ContentItemTwoProblems data-aos="fade-right" data-aos-offset="10" data-aos-duration="1500">
                    <ContentItemTwoTextWrap>
                        <h3>.Problems</h3>
                        <p>
                        해당 호텔의 이미지나 전체적인 분위기를 알 수 있는 사진이나 설명들이 미흡한 부분이 있습니다.
                        <br />이에 따라 중복되는 컨탠츠나 특정 컨탠츠에 대한 부가 설명이 존재하지 않는 부분들이 존재하여, 사용자가
                        호텔에 대한 정보를 얻을 수 없는 경우가 생길 수 있습니다.
                        <br />
                        마지막으로 계절에 맞지 않은 정보나, 기간이 지난 게시글이 수정되지 않아 사용자에게 혼란을 줄 수 있습니다.
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
                        호텔의 이미지나 분위기를 알 수 있도록 특정 컨탠츠에 대한 정보를 제목과 부제의 대비를 통해 간략하게 설명하였고,
                        중복된 이미지 사용이나 컨탠츠의 반복을 줄여, 전체적인 정보를 사용자가 알 수 있도록 설계하였습니다.
                        <br />
                        또한 사용자의 UX 관점을 생각하여, 여러 효과나 상호작용을 삽입하여 사용성을 높였습니다.
                        </p>
                    </ContentItemTwoTextWrap>
                </ContentItemTwoSolutions>
            </ContentItemTwo>

            <ContentItemThree>
                <img src="images/blender.png" alt="2" data-aos="fade-right" data-aos-offset="100"/>
                <img src="images/reactive_eng.png" alt="2"  style={{position: "absolute", left: "35%"}} data-aos="fade-right" data-aos-offset="100" data-aos-delay="300"/>
                <ContentItemThreeText>
                    <h3>UI & UX.</h3>
                    <p>PC뿐만 아니라 모바일 또는 태블릿 환경에서도 웹 페이지를 사용할 수 있도록 반응형으로 설계하였습니다.</p>
                    <p>호텔 사용자 특성상 외국인 사용자에게도 정보를 제공할 수 있도록 영문 페이지로도 구현하였습니다.</p>
                </ContentItemThreeText>
            </ContentItemThree>

            <ContentItemFour>
                <ContentItemFourWrap>
                    <ContentItemFourColorsWrap>
                        <p>그랜드 하얏트의 메인 컬러를 이용하여 중요한 정보를 나타내는 부분에 포인트를 넣어 강조하였습니다.</p>
                        <ContentItemFourColorsItem data-aos="fade-right" data-aos-duration="1500" data-aos-delay="150" data-aos-offset="10">BD2137</ContentItemFourColorsItem>
                        <ContentItemFourColorsItem data-aos="fade-right" data-aos-duration="1500" data-aos-delay="180" data-aos-offset="10">E8F0F9</ContentItemFourColorsItem>
                        <ContentItemFourColorsItem data-aos="fade-right" data-aos-duration="1500" data-aos-delay="210" data-aos-offset="10">Black & White</ContentItemFourColorsItem>
                    </ContentItemFourColorsWrap>
                    <ContentItemFourFontsWrap>
                        <p>얇고 각진 느낌이 나는 S-Core Dream 폰트를 사용하여 호텔에서 느낄 수 있는 깔끔하고 세련된 이미지를 강조하였습니다.</p>
                        <ReactTyped style={{fontSize: "18px"}}
                        strings={["Make your dreams come true.","S-Core Dream3. 18px", "에스코어 드림"]}
                        typeSpeed={100}
                        backSpeed={50}
                        loop >   
                        </ReactTyped>
                        <ReactTyped style={{fontSize: "22px"}}
                        strings={["Make your dreams come true.","S-Core Dream3. 22px", "에스코어 드림"]}
                        typeSpeed={100}
                        backSpeed={50}
                        loop >   
                        </ReactTyped>
                        <ReactTyped style={{fontSize: "32px"}}
                        strings={["Make your dreams come true.","S-Core Dream3. 32px", "에스코어 드림"]}
                        typeSpeed={100}
                        backSpeed={50}
                        loop >   
                        </ReactTyped>
                    </ContentItemFourFontsWrap>
                </ContentItemFourWrap>
            </ContentItemFour>
            <ContentItemFive>
                <img src="images/Artboard 1.png" alt='all' data-aos="fade-right" data-aos-duration="1500" data-aos-delay="150" data-aos-offset="10"/>
                <ContentItemFiveDescWrap>
                    <ContentItemFiveDescHeader>
                        <h3>Header.</h3>
                        <p>헤더에 들어가는 불필요한 정보를 최소화 하여, 사용자에게 필요한 정보만 제공하도록 재설계 했습니다.
                        또한 하단에 예약 퀵메뉴를 배치하여 사용성을 높였습니다.</p>
                    </ContentItemFiveDescHeader>
                    <ContentItemFiveDescContent1>
                        <h3>Overview.</h3>
                        <p>해당 호텔에 전경과 메인 로비 전경을 추가하고 전체적인 오버뷰를 설정하여 사용자에게 간략한 정보를 제공할 수 있도록 설계하였습니다.</p>
                    </ContentItemFiveDescContent1>
                    <ContentItemFiveDescContent2>
                        <h3>Curtain Slider.</h3>
                        <p>호텔의 주요 서비스를 커튼형식으로 배치하여, 사용자에게 정보를 제공함과 동시에, Hover 설정을 통해 원하는 경우 해당 사진을 자세하게 볼 수 있도록 
                        재설계 하였습니다.</p>
                    </ContentItemFiveDescContent2>
                    <ContentItemFiveDescContent3>
                        <h3>Accommodations.</h3>
                        <p>해당 호텔의 객실을 카테고리별 그룹화하여, 각 호실의 전체적인 분위기를 사용자가 예상할 수 있도록 재배치 하였습니다.</p>
                    </ContentItemFiveDescContent3>
                    <ContentItemFiveDescContent4>
                        <h3>Fine Dining.</h3>
                        <p>가장 큰 특징이라 할 수 있는 파인 다이닝 부분을 따로 컨탠츠화 하여, 전체적인 설명과 분위기, 그리고 운영시간을 한눈에 볼 수 있도록 설계하였습니다.
                        또한, 해당 부분을 슬라이더 형식으로 구현하여, 사용자가 원하는 부분을 선택하여 볼 수 있도록 만들었으며, 이 또한 Click event로 설정하여 해당 컨탠츠의
                        사진을 좀 더 크게 볼 수 있도록 사용성 부분을 신경써 재설계 하였습니다.</p>
                    </ContentItemFiveDescContent4>
                    <ContentItemFiveDescFooter>
                        <h3>Footer.</h3>
                        <p>이전 사이트의 불필요한 푸터 부분에 들어가는 정보들을 최대한 간략하게 설정하여 필수적인 정보나 운영에 필요한 부분만 축약하여 사용성을 높였습니다.</p>
                    </ContentItemFiveDescFooter>
                </ContentItemFiveDescWrap>
            </ContentItemFive>

            <ContentNavigation>
                <ul>
                    <li className='on'><a></a></li>
                    <li><a></a></li>
                    <li><a></a></li>
                    <li><a></a></li>
                </ul>
            </ContentNavigation>
        </Content>
    </>
  )
}

export default Grandhyatt