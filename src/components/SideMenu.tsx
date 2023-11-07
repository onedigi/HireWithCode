import styled from 'styled-components'
import foldImg from '../assets/fold.svg'
import { useState, useRef } from 'react'

const Container = styled.div`
    background-color: rgba(114, 169, 170, 0.2);
    width: 20rem;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
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
`

const FoldBtnImg = styled.img`
    width: 1.5rem;
    height: 1.5rem;
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

    return (
        <Container className={foldHandler(isFirstTime.current, isFold)}>
            <FoldBtn>
                <FoldBtnImg
                    className={foldImghandler(isFirstTime.current, isFold)}
                    src={foldImg}
                    alt='foldImg'
                    onClick={() => {
                        setIsFold(!isFold)
                        //只有触发过一次这个handler才加css动画类
                        isFirstTime.current = false
                    }}
                />
            </FoldBtn>
            <button
                onClick={() => {
                    window.location.href = '/'
                }}
            >
                aaa
            </button>
        </Container>
    )
}

export default SideMenu
