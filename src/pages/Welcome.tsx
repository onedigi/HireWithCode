import styled, { keyframes } from 'styled-components'
import logoImg from '../assets/logo.png'
import hill1Img from '../assets/hill1.png'
import hill2Img from '../assets/hill2.png'
import hill3Img from '../assets/hill3.png'
import hill4Img from '../assets/hill4.png'
import hill5Img from '../assets/hill5.png'
import leafImg from '../assets/leaf.png'
import plantImg from '../assets/plant.png'
import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { GlobalContext } from '../App'
import { useContext } from 'react'

const toBottom = keyframes`
    100%{
        bottom: -100%;
        opacity: 0;
    }
`

const toRight = keyframes`
    100%{
        right: -100%;
        opacity: 0;
    }
`

const toLeft = keyframes`
    100%{
        left: -100%;
        opacity: 0;
    }
`

const toTop = keyframes`
    100%{
        top: -100%;
        opacity: 0;
    }
`

const textShow = keyframes`
    100%{
        opacity: 1;
    }
`

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
`

const Logo = styled.img`
    width: 6.25vw;
    left: 6.26vw;
    top: 3.125vw;
    position: absolute;
`

const Hill1 = styled.img`
    position: absolute;
    height: 60vw;
    width: 100%;
    bottom: 0;
    z-index: 0;

    animation: ${toBottom} 0.3s linear;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
`

const Hill2 = styled.img`
    position: absolute;
    height: 60vw;
    left: 0;
    bottom: 0;
    z-index: 1;

    animation: ${toLeft} 0.3s linear;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
`

const Hill3 = styled.img`
    position: absolute;
    height: 60vw;
    right: 0;
    z-index: 2;
    bottom: 0;

    animation: ${toRight} 0.3s linear;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
`

const Hill4 = styled.img`
    position: absolute;
    height: 60vw;
    left: 0;
    bottom: 0;
    z-index: 3;

    animation: ${toBottom} 0.3s linear;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
`

const Hill5 = styled.img`
    position: absolute;
    height: 60vw;
    right: 0;
    bottom: 0;
    z-index: 4;

    animation: ${toBottom} 0.3s linear;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
`

const Plant = styled.img`
    position: absolute;
    width: 100%;
    height: 80vw;
    z-index: 5;
    bottom: 0;

    animation: ${toBottom} 0.3s linear;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
`

const Leaf = styled.img`
    position: absolute;
    height: 60vw;
    z-index: 6;
    top: 0;
    right: 0;

    animation: ${toTop} 0.3s linear;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
`

const Text = styled.p`
    text-align: center;
    white-space: nowrap;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    opacity: 0;
    font-size: 4vw;
    font-weight: bold;

    animation: ${textShow} 0.3s linear;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
`

const Welcome = () => {
    const nav = useNavigate()
    const location = useLocation().pathname
    const globalContext = useContext(GlobalContext)
    const { setCurrentPath }: any = globalContext

    //防止子组件更新时同时去更新父组件
    useEffect(() => {
        setCurrentPath(location)
    })

    //todo中2s跳转到“面试引导”feature
    useEffect(() => {
        const timeOutID = setTimeout(() => {
            nav('/introduce')
        }, 2000)

        return () => {
            clearTimeout(timeOutID)
        }
    }, [nav])

    return (
        <Container>
            <Logo src={logoImg} alt='logo' />
            <Hill1 src={hill1Img} alt='hill1' />
            <Hill2 src={hill2Img} alt='hill2' />
            <Hill3 src={hill3Img} alt='hill3' />
            <Hill4 src={hill4Img} alt='hill4' />
            <Hill5 src={hill5Img} alt='hill5' />
            <Plant src={plantImg} alt='plant' />
            <Leaf src={leafImg} alt='leaf' />
            <Text>欢迎来到 Onedigi 线上面试环节，期待你的加入！</Text>
        </Container>
    )
}

export default Welcome
