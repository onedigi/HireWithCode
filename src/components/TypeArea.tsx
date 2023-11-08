import { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    @media screen and (max-width: 768px) {
        position: absolute;
    }
`

/**
 *
 * 版心，限制中央显示内容在浏览器正中间
 */
const TypeArea = ({ children }: PropsWithChildren) => {
    return <Wrapper>{children}</Wrapper>
}

export default TypeArea
