import styled from 'styled-components'
import foldImg from '../assets/fold.svg'
import { useState, useRef, useContext } from 'react'
import { GlobalContext } from '../App'

const Wrapper = styled.div<{ width: number }>`
    background-color: #e3eeee;
    width: ${props => props.width}rem;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    position: relative;
    box-shadow: 0 3rem 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
`

const FoldBtn = styled.div`
    background-color: #e3eeee;
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

const Container = styled.div<{ opacity: number }>`
    width: 15rem;
    margin: 8rem 0 8rem 0;
    opacity: ${props => props.opacity};
`

const MenuItem = styled.div`
    height: 4rem;
    width: auto;
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
`

//【按钮图标】根据是否第一次进入网站决定要返回的css类名
const foldIconHandler = (isFirstTime: boolean, isFold: boolean) => {
    if (isFirstTime) {
        return ''
    }

    return isFold ? 'side-menu-btn-icon-close-animation-class' : 'side-menu-btn-icon-open-animation-class'
}

//【侧边栏栏目】根据是否第一次进入网站决定要返回的css类名
const foldItemsHandler = (isFirstTime: boolean, isFold: boolean) => {
    if (isFirstTime) {
        return ''
    }

    return isFold ? 'side-menu-items-close-animation-class' : 'side-menu-items-open-animation-class'
}

//【侧边栏本体】根据是否第一次进入网站决定要返回的css类名
const foldSideMenuHandler = (isFirstTime: boolean, isFold: boolean) => {
    if (isFirstTime) {
        return ''
    }

    return isFold ? 'side-menu-close-animation-class' : 'side-menu-open-animation-class'
}

const SideMenu = () => {
    const globalContext = useContext(GlobalContext)
    const { currentPath, windowsWidth }: any = globalContext
    const isFirstTime = useRef(true)
    const [isFold, setIsFold] = useState(windowsWidth < 768 ? true : false)

    return (
        // 如果是小屏设备，则默认折叠
        <Wrapper
            width={(() => {
                return isFold ? 0 : 20
            })()}
            className={foldSideMenuHandler(isFirstTime.current, isFold)}
        >
            <FoldBtn
                onClick={() => {
                    setIsFold(!isFold)
                    //只有触发过一次这个handler才加css动画类
                    isFirstTime.current = false
                }}
            >
                <FoldBtnImg className={foldIconHandler(isFirstTime.current, isFold)} src={foldImg} alt='foldImg' />
            </FoldBtn>

            {/* 如果是小屏设备，则默认折叠 */}
            <Container
                opacity={(() => {
                    return isFold ? 0 : 1
                })()}
                className={foldItemsHandler(isFirstTime.current, isFold)}
            >
                <MenuItem
                    className={`${currentPath === '/welcome' ? 'text-underline' : ''}`}
                    onClick={() => {
                        if (windowsWidth < 768) setIsFold(true)
                        if (currentPath !== '/welcome') window.location.href = '#/welcome'
                    }}
                >
                    欢迎语
                </MenuItem>
                <MenuItem
                    className={`${currentPath === '/introduce' ? 'text-underline' : ''}`}
                    onClick={() => {
                        if (windowsWidth < 768) setIsFold(true)
                        if (currentPath !== '/introduce') window.location.href = '#/introduce'
                    }}
                >
                    面试引导
                </MenuItem>
                <MenuItem
                    className={`${currentPath === '/take_challenge' ? 'text-underline' : ''}`}
                    onClick={() => {
                        if (windowsWidth < 768) setIsFold(true)
                        if (currentPath !== 'take_challenge') window.location.href = '#/take_challenge'
                    }}
                >
                    接受挑战
                </MenuItem>
                <MenuItem
                    className={`${currentPath === '/finish_challenge' ? 'text-underline' : ''}`}
                    onClick={() => {
                        if (windowsWidth < 768) setIsFold(true)
                        if (currentPath !== '/finish_challenge') window.location.href = '#/finish_challenge'
                    }}
                >
                    完成挑战
                </MenuItem>

                {/* <MenuItem
                    className={`${currentPath === '/show_data' ? 'text-underline' : ''}`}
                    onClick={() => {
                        if (windowsWidth < 768) setIsFold(true)
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
