import { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    width: 78.75rem;
    height: 62.5rem;
`

/**
 *
 * 版心，限制中央显示内容在浏览器正中间
 */
const TypeArea = ({ children }: PropsWithChildren) => {
    return (
        <Wrapper>
            <Container>{children}</Container>
        </Wrapper>
    )
}

export default TypeArea
