import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom"
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';

const Nav = styled.div`
    background-color: ${({ theme }) => theme.card_light};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    max-width: 1200px;
`

const NavLogo = styled(LinkR)`
    width: 80%;
    padding: 0 6px;
    display: flex;
    justify-self: self-start;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    @media screen and (max-width: 640px){
        padding: 0 0px;
    }
`

const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 50%);
        font-size: 1.8rem;
        cursor: pointer;
        color: ${({ theme }) => theme.text_primary};
    }
`

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    list-style: none;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    @media screen and (max-width: 640px){
        display: none;
    }
`

const GithubButton = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.primary};
    border: 1.8px solid ${({ theme }) => theme.primary};
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    height: 70%;

    &:hover {
        background-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};
    }

    @media screen and (max-width: 640px){
        font-size: 0.8rem;
    }
`

const Span = styled.span`
    padding: 0 4px;
    padding-left: 10px;
    font-weight: bold;
    font-size: 18px;
`
const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light + 99};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`

const MobileLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
    color: ${({ theme }) => theme.primary};
    }

    &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const theme = useTheme()
    return (
        <Nav>
            <NavContainer>
                <NavLogo to='/'>
                    <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
                        {/*<DiCssdeck size="3rem" />*/} <Span>Jon Code</Span>
                    </a>
                </NavLogo>
                <MobileIcon>
                    <FaBars onClick={() => {
                        setIsOpen(!isOpen)
                    }} />
                </MobileIcon>
                <NavItems>
                    <NavLink href="#about">Sobre</NavLink>
                    <NavLink href='#skills'>Skills</NavLink>
                    <NavLink href='#experience'>Experiência</NavLink>
                    <NavLink href='#projects'>Projetos</NavLink>
                    <NavLink href='#education'>Educação</NavLink>
                </NavItems>
                <ButtonContainer>
                    <GithubButton href="/" target="_blank">Github Profile</GithubButton>
                </ButtonContainer>
                {
                    isOpen &&
                    <MobileMenu isOpen={isOpen}>
                        <MobileLink href="#about" onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Sobre</MobileLink>
                        <MobileLink href='#skills' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Skills</MobileLink>
                        <MobileLink href='#experience' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Experiência</MobileLink>
                        <MobileLink href='#projects' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Projetos</MobileLink>
                        <MobileLink href='#education' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Educação</MobileLink>
                        <GithubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href="/" target="_blank">Github Profile</GithubButton>
                    </MobileMenu>
                }
            </NavContainer>
        </Nav>
    )
}

export default Navbar