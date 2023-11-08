import { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;

    &::before {
        content: '';
        width: 25rem;
    }

    &::after {
        content: '';
        width: 5rem;
    }

    @media screen and (max-width: 840px) {
        flex-direction: column;

        &::before {
            content: '';
            height: 5rem;
        }
    }
`

const Container = styled.div`
    height: 100vh;
    flex: 1;

    @media screen and (max-width: 840px) {
        padding: 0% 2rem;
        flex: auto;
    }
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
