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
    -webkit-background-clip: text;
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
    background: url("./Images/about1.jpg");
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
    font-weight: bold;
    top: ${(props) => props.top || "-50px"};
    left: ${(props) => props.left || "0"};
    width: ${(props) => props.width || "fit-content"};
    height: ${(props) => props.height || "fit-content"};
    p {
        font-family: notoSans;
    }
    `
    const SectionThreeContentImage = styled.div`
    background: url("./Images/about2.jpg");
    background-position: center;
    background-size: 120%;
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
    // ???????????? ?????? ??? ??????
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
    // ????????? ????????? ??????
    function loading(){
        setTimeout(function(){
        const el = document.querySelectorAll(".section.home > div> div > div");
        for(let k = 0; k < el.length; k++){
            el[k].classList.add("loading")
        }
        }, 500)
    }
    loading()
    // ????????? ????????? ??????????????? ?????? ??????
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
        // ?????? ??????
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
                            <img style={{width: "320px", height: "320px"}} src='./Images/daegu_night.jpg' alt='22' />
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
                        <SectionThreeContentText fontSize='18px' top='570px' left='295px' width='510px'>
                        <p>
                            ????????? ???????????? ????????? ?????? ?????? ???????????? ?????? ????????????, ???????????? ???????????? ??? ???????????????
                            ?????? ?????? ????????? ?????? ????????????.</p>
                        <p style={{marginTop: "14px"}}> 
                            ?????? ?????? 100%??? ??????????????? ?????? ?????? ??? ???????????? 99%?????? "???????????? ????????? ??? ??????." ?????? ????????? 
                            ??? ????????? ???????????? ???????????? ???????????????. ?????? ??? 1%??? ????????? ?????? ??????????????? ???????????????.</p>
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
                        <span style={{fontFamily: "notoSans", fontSize: "14px", gridColumn: "2/3", width: "100%"}}>??? All rights reserved. RideMeToTheMoon. JW H.</span>
                        <SectionFourContentIconsWrap style={{gridColumn: "3/4"}}>
                            <SectionFourContentIconWrap background={"url('./Images/kakao.png')"}></SectionFourContentIconWrap>
                            <SectionFourContentIconWrap style={{filter: "invert(100%)"}}background={"url('./Images/github.png')"}></SectionFourContentIconWrap>
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