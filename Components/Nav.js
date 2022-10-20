import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Header = styled.div`
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 95px;
    top: 0;
`
const HeaderWrap = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
`
const HeaderLogo = styled.div`
    width: 71px;
    height: 71px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;

`
const HeaderMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-right: 50px;
`
const HeaderMenuItem = styled.li`
    padding: 0 20px;
`
const HeaderMenuItemLink = styled.a`
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: -1px;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    &::after {
        content: "";
        position: absolute;
        width: 0%;
        height: 1px;
        background-color: black;
        bottom: 0;
        left: 0;
        transition: all .3s;
    }
    &:hover::after {
        width: 100%;
    }
    &.on::after {
        width: 100%;
    }
`
function Nav() {
    // 페이지 변환시 navigation index 설정.
    const pageNavChanger = useSelector((state) => state.listIndex.data)
    // const dispatch = useDispatch() 
    
    // Nav.json 파일 import 및 출력 세팅.
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const response = await axios.get(
            'Nav.json'
        );
        setUsers(response.data);
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
    <>
        <Header>
            <HeaderWrap>
                <HeaderLogo><img src='./Images/Asset 9.png' alt='mainLogo'/></HeaderLogo>
                <HeaderMenu>
                    {
                        users.map((e,index)=>{
                            return <HeaderMenuItem key={e.id}><HeaderMenuItemLink href={e.page} className={(index === pageNavChanger) ? "on" : null}>{e.nav}</HeaderMenuItemLink></HeaderMenuItem>
                        }) 
                    }
                </HeaderMenu>   
            </HeaderWrap>
        </Header>
    </>
    )
}

export default Nav














