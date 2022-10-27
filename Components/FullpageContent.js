    import React, { useState, useEffect } from 'react'
    import ReactFullpage from '@fullpage/react-fullpage'
    import styled, { keyframes } from 'styled-components'
    import axios from 'axios'
    import { useDispatch, useSelector } from 'react-redux'
    import { ChangeIndex, ChangeSvgIndex } from '../store'
    import { createManagedSvgPatternLibrary  } from 'react-svg-patterns'

    const {
        ManagedSvgPatternLibrary,
        registerSvgPattern,
        useSvgPattern,
    } = createManagedSvgPatternLibrary();

    const ContentWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1200px;
    height: 820px;
    color: transparent;
    position: relative;
    margin: 0 auto;
    transition: all .6s;
    z-index: 999;
    `
    const SectionOneContentItem = styled.div`
    opacity: 0;
    cursor: pointer;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 350px;
    position: absolute;
    overflow: hidden;
    background-color: ${(props) => props.color || "skyblue"};
    width: ${(props) => props.width || "415px"};
    height: ${(props) => props.height || "310px"};
    top: ${(props) => props.top || "80px"};
    left: ${(props) => props.left || "0"};
    transform: rotate(${(props) => props.rotate || 0});
    transition: all .3s ${(props) => props.delay || "0s"};
    &.loading{
        opacity: 1;
    }
    &.on{
        opacity: 0;
    }
    &:hover {
        div {
            opacity: 1;
        }
    }
    `
    const SectionOneContentItemText = styled.div`
    opacity: 0;
    color: white;
    transition: all .6s;
    &.textOn {
        opacity: 1;
    }
    `
    const SectionTwoContentText = styled.div`
    font-size: 80px;
    color: black;
    position: absolute;
    top: ${(props) => props.top || "0"};
    left: ${(props) => props.left || "0"};
    display: flex;
    flex-direction: column;
    p {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }
    `
    const SectionTwoContentSvgTextWrap = styled.svg`
    position: absolute;
    width: 350px;
    height: 230px;
    display: flex;
    flex-direction: column;
    top: ${(props) => props.top || "0"};
    left: ${(props) => props.left || "0"};
    display: flex;
    flex-direction: column;
    `
    const TextDrawer = keyframes`
    0% { 
        stroke-dashoffset: 750; 
    } 
    100% { 
        fill: black;
        stroke-dashoffset: 0; 
    }
    `
    const SectionTwoContentSvgText = styled.text`
    font-size: 80px;
    fill: transparent;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    stroke-dashoffset: 750; 
	stroke-dasharray: 750; 
    stroke-width: 1.5px;
    stroke: black;
    &.on {
        animation: ${TextDrawer} 1.5s linear;
        animation-fill-mode: forwards;
    }
    `
    const SectionTwoContentImage = styled.div`
    width: 810px;
    height: 490px;
    background: url("https://via.placeholder.com/810x490");
    background-position: center;
    background-size: cover;
    filter: hue-rotate(160deg) invert(90%);
    z-index: -1;
    `
    const userGradient = {
    background: `url("./Images/daegu_night.jpg")`, 
    backgroundSize: "cover",
    WebkitBackgroundClip : "text",
    color: "transparent"
    };
    const SectionThreeContentLeft = styled.div`
    position: relative;
    margin-right: 210px;
    height: 650px;
    p {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }
    `
    const SectionThreeContentRight = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 500px;
    height: 420px;
    justify-content: space-evenly;
    `
    const SectionThreeContentText = styled.div`
    position: absolute;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: ${(props) => props.fontSize || "56px"};
    color: black;
    top: ${(props) => props.top || "-50px"};
    left: ${(props) => props.left || "0"};
    width: ${(props) => props.width || "fit-content"};
    height: ${(props) => props.height || "fit-content"};
    p {
        font-family: notoSans;
    }
    `
    const SectionThreeContentImage = styled.div`
    background: url("./Images/about1.jpg");
    width: 430px;
    height: 650px;
    `
    const SectionThreeContentRightImages = styled.div`
    width: 125px;
    height: 125px;
    border-radius: 50%;
    margin: 0 20px;
    background-size: 50%;
    background-position: center;
    background-repeat: no-repeat;
    `
    const SectionFourContentTextWrap = styled.div`
    color: black;
    font-size: 18px;
    line-height: 33px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    `
    const SectionFourContentIconsWrap = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 100px;
    `
    const SectionFourContentIconWrap = styled.div`
    width: 50px;
    height: 50px;
    background: ${(props) => props.background || "none"};
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    `
    const FooterInfos = styled.div`
    width: 100%;
    height: 80px;
    background-color: black;
    color: white;
    display: grid;
    grid-template-columns: repeat(3, 33%);
    justify-content: center;
    text-align: center;
    align-items: center;
    `
    // 풀페이지 세팅 및 출력
    function FullpageContent() {
        const dispatch = useDispatch();

        const pageNavChanger = useSelector((state) => state.svgListIndex.data)
        const [users, setUsers] = useState([]);
        const [users2, setUsers2] = useState([]);

        const fetchUsers = async () => {
            const response = await axios.get(
            'Img.json'
            );
            setUsers(response.data.skills);
            setUsers2(response.data.portfolios);
        };
        useEffect(() => {
            fetchUsers();
        }, []);
    // 이니셜 페이지 로더
    function loading(){
        setTimeout(function(){
        const el = document.querySelectorAll(".section.home > div> div > div");
        for(let k = 0; k < el.length; k++){
            el[k].classList.add("loading")
        }
        }, 500)
    }
    loading()
    // 이니셜 페이지 포트폴리오 선택 효과
    const clickEvent = function(index, link) {
        const MainEl = document.querySelectorAll("#fullpage");
        const el = document.querySelectorAll(".section.home > div > div > div");
        const Mel = document.querySelectorAll(".home > div > div");
        const Text = document.querySelectorAll(".home > div > div > div > div");
        for(let k = 0; k < el.length; k++){
            if(k !== index) {
                el[k].classList.add("on")
            }
            if(k === index) {
                Text[k].classList.add("textOn")
                setTimeout(function() {
                    MainEl[0].style.zIndex = "999";
                    Mel[0].style.width = "100%"
                    Mel[0].style.height = "1089px"
                    el[k].style.width = "100%"
                    el[k].style.height = "100%"
                    el[k].style.top = "0"
                    el[k].style.left = "0"
                    el[k].style.transform = "rotate(0deg)"
                    el[k].style.position = "absolute"
                    el[k].style.transition = "all .6s"
                },1500)
                setTimeout(function(){
                    window.location.replace(link);
                },2500)
            }
        }
    }
    return (
        <>
        <ReactFullpage
        //fullpage options
        licenseKey = {''}
        scrollingSpeed = {1000}
        anchors={['firstPage', 'secondPage', 'thirdPage', 'fourthPage']}
        afterLoad={(origin, destination, direction) =>  {
            dispatch(ChangeIndex(destination.index > 1 ? destination.index-1 : destination.index))
            dispatch(ChangeSvgIndex(destination.index))
        }}
        // 렌더 옵션
        render={({ state, fullpageApi }) => {
            return (
            <ReactFullpage.Wrapper>
                <div className="section home">
                    <ContentWrap> 
                        {
                        users2.map((e,index)=>{
                            return <SectionOneContentItem 
                            onClick={()=> clickEvent(index, e.link)} 
                            key={e.id} 
                            color={e.color} 
                            width={e.width} 
                            height={e.height} 
                            top={e.top} 
                            left={e.left} 
                            rotate={e.rotate} 
                            delay={e.delay}>
                            <SectionOneContentItemText>{e.title}</SectionOneContentItemText>
                            </SectionOneContentItem>
                        })
                        }
                    </ContentWrap>
                </div>
                <div className="section">
                    <ContentWrap>
                        <SectionTwoContentSvgTextWrap>
                            <SectionTwoContentSvgText x="2px" y="28%" className={(pageNavChanger === 1 && 'on')}>Test</SectionTwoContentSvgText>
                            <SectionTwoContentSvgText x="2px" y="61%" className={(pageNavChanger === 1 && 'on')}>Work</SectionTwoContentSvgText>
                            <SectionTwoContentSvgText x="2px" y="92%" className={(pageNavChanger === 1 && 'on')}>& Improve.</SectionTwoContentSvgText>
                        </SectionTwoContentSvgTextWrap>
                        <SectionTwoContentImage></SectionTwoContentImage>
                        <SectionTwoContentSvgTextWrap top='586px' left='853px'>
                            <SectionTwoContentSvgText x="0" y="28%" className={(pageNavChanger === 1 && 'on')}>Publisher</SectionTwoContentSvgText>
                            <SectionTwoContentSvgText x="0" y="61%" className={(pageNavChanger === 1 && 'on')}>In Daegu.</SectionTwoContentSvgText>
                        </SectionTwoContentSvgTextWrap>
                    </ContentWrap>
                </div>
                <div className="section">
                    <ContentWrap>
                        <SectionThreeContentLeft>
                            <SectionTwoContentText left='-150px' top='-70px'>
                        <SectionTwoContentSvgTextWrap style={{width: "607px"}}>
                            <SectionTwoContentSvgText style={{fontSize: "56px"}} x="0" y="28%" className={(pageNavChanger === 2 && 'on')}>I love</SectionTwoContentSvgText>
                            <SectionTwoContentSvgText style={{fontSize: "56px"}} x="0" y="61%" className={(pageNavChanger === 2 && 'on')}>Clean, Neat</SectionTwoContentSvgText>
                            <SectionTwoContentSvgText style={{fontSize: "56px"}} x="0" y="92%" className={(pageNavChanger === 2 && 'on')}>Easy Maintenance.</SectionTwoContentSvgText>
                        </SectionTwoContentSvgTextWrap>
                            </SectionTwoContentText>
                        <SectionThreeContentImage></SectionThreeContentImage>
                        <SectionThreeContentText fontSize='18px' top='565px' left='300px' width='510px'>
                        <p>
                            간결한 디자인을 정돈된 코드 위에 표현하는 것을 좋아하고, 자유롭게 그려내는 웹 퍼블리셔가
                            되는 것을 목표로 하고 있습니다.</p>
                        <p style={{marginTop: "40px"}}> 
                            모든 일의 100%에 도달하는데 있어 가장 큰 장애물은 99%에서 "여기까지 했으면 다 했지." 라고 말하며 
                            그 현실에 안주하는 것이라고 생각합니다. 저는 그 1%의 차이를 아는 퍼블리셔를 추구합니다.</p>
                        </SectionThreeContentText>
                        </SectionThreeContentLeft>
                        <SectionThreeContentRight>
                        {
                            users.map((e,index)=>{
                            return <SectionThreeContentRightImages key={e.id} style={{backgroundImage: `url(${e.img})`}}></SectionThreeContentRightImages>
                            }) 
                        }
                        </SectionThreeContentRight>
                    </ContentWrap>
                </div>  
                <div className="section">
                    <ContentWrap>
                        <SectionFourContentTextWrap>
                            <h1 style={{marginBottom: "30px", fontFamily: "hands", fontSize: "72px", fontWeight: "normal"}}>Contacts_</h1>
                            <h3>Phone</h3>
                            <p>010-2071-7252</p>
                            <h3>mail</h3>
                            <p>mhhuh12@naver.com</p>
                        </SectionFourContentTextWrap>
                    </ContentWrap>
                    <FooterInfos>
                        <p style={{fontFamily: "hands", fontSize: "32px", gridColumn: "1/2", paddingLeft: "100px"}}>Thanks for watching! -- End of Contents.</p>
                        <span style={{fontFamily: "notoSans", fontSize: "14px", gridColumn: "2/3", width: "100%"}}>ⓒ All rights reserved. RideMeToTheMoon. JW H.</span>
                        <SectionFourContentIconsWrap style={{gridColumn: "3/4"}}>
                            <SectionFourContentIconWrap background={"url('./Images/kakao.png')"}></SectionFourContentIconWrap>
                            <SectionFourContentIconWrap background={"url('./Images/github.png')"}></SectionFourContentIconWrap>
                        </SectionFourContentIconsWrap>
                    </FooterInfos>
                </div>
            </ReactFullpage.Wrapper>
            );
            }}
            />
        </>
    );
    }
    export default FullpageContent