import styled from 'styled-components'
import foldImg from '../assets/fold.svg'
import { useState, useRef, useContext } from 'react'
import { GlobalContext } from '../App'

const Wrapper = styled.div`
    background-color: rgba(114, 169, 170, 0.2);
    width: 20rem;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 840px) {
        height: 5rem;
        width: 100%;
        background-color: transparent;
    }
`

const FoldBtn = styled.div`
    background-color: rgba(114, 169, 170, 0.2);
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 0;
    right: -3rem;
    border-radius: 0 0.8rem 0.8rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 840px) {
        display: none;
    }
`

const FoldBtnImg = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`

const Container = styled.div`
    width: 15rem;
    margin: 8rem 0 8rem 0;

    @media screen and (max-width: 840px) {
        width: 100%;
        display: flex;
        margin: 0.5rem 0;
    }
`

const MenuItem = styled.div`
    height: 4rem;
    width: 100%;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        background-color: rgba(114, 169, 170, 0.3);
    }

    @media screen and (max-width: 840px) {
        &:hover {
            background-color: transparent;
        }
    }

    @media screen and (max-width: 560px) {
        font-size: 1rem;
    }
`

//根据是否第一次进入网站决定要返回的css类名
const foldImghandler = (isFirstTime: boolean, isfold: boolean) => {
    if (isFirstTime) {
        return ''
    }

    return isfold ? 'rotate-animation-right-class' : 'rotate-animation-left-class'
}

//根据是否第一次进入网站决定要返回的css类名
const foldHandler = (isFirstTime: boolean, isfold: boolean) => {
    if (isFirstTime) {
        return ''
    }

    return isfold ? 'move-animation-left-class' : 'move-animation-right-class'
}

const SideMenu = () => {
    const [isFold, setIsFold] = useState(false)
    const isFirstTime = useRef(true)
    const globalContext = useContext(GlobalContext)

    const { currentPath }: any = globalContext

    return (
        <Wrapper className={foldHandler(isFirstTime.current, isFold)}>
            <FoldBtn
                onClick={() => {
                    setIsFold(!isFold)
                    //只有触发过一次这个handler才加css动画类
                    isFirstTime.current = false
                }}
            >
                <FoldBtnImg className={foldImghandler(isFirstTime.current, isFold)} src={foldImg} alt='foldImg' />
            </FoldBtn>

            <Container>
                <MenuItem
                    className={`${currentPath === '/welcome' ? 'text-underline' : ''}`}
                    onClick={() => {
                        if (currentPath !== '/welcome') window.location.href = '#/welcome'
                    }}
                >
                    欢迎语
                </MenuItem>
                <MenuItem
                    className={`${currentPath === '/introduce' ? 'text-underline' : ''}`}
                    onClick={() => {
                        if (currentPath !== '/introduce') window.location.href = '#/introduce'
                    }}
                >
                    面试引导
                </MenuItem>
                <MenuItem
                    className={`${currentPath === '/take_challenge' ? 'text-underline' : ''}`}
                    onClick={() => {
                        if (currentPath !== 'take_challenge') window.location.href = '#/take_challenge'
                    }}
                >
                    接受挑战
                </MenuItem>
                <MenuItem
                    className={`${currentPath === '/finish_challenge' ? 'text-underline' : ''}`}
                    onClick={() => {
                        if (currentPath !== '/finish_challenge') window.location.href = '#/finish_challenge'
                    }}
                >
                    完成挑战
                </MenuItem>

                {/* <MenuItem
                    className={`${currentPath === '/show_data' ? 'text-underline' : ''}`}
                    onClick={() => {
                        if (currentPath !== '/show_data') window.location.href = '#/show_data'
                    }}
                >
                    *查看数据
                </MenuItem> */}
            </Container>
        </Wrapper>
    )
}

export default SideMenu
