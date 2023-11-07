import TypeArea from '../components/TypeArea'
import { GlobalContext } from '../App'
import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 10rem;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 840px) {
        margin-top: 0;
    }
`

const Text = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 460px) {
        font-size: 1.5rem;
    }
`

const Input = styled.input`
    height: 3rem;
    font-size: 2rem;
    margin-bottom: 5rem;
`

const SubmitWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const Submit = styled.button`
    height: 10rem;
    width: 20rem;
    border-radius: 1.5rem;
    background-color: #b1c8cd;
    font-size: 2rem;
    font-weight: bold;

    @media screen and (max-width: 460px) {
        font-size: 1rem;
        height: 5rem;
        width: 10rem;
        border-radius: 1rem;
    }
`

const TakeChallenge = () => {
    const location = useLocation().pathname
    const globalContext = useContext(GlobalContext)
    const { setCurrentPath }: any = globalContext
    const [formData, setFormData] = useState({
        githubID: '',
        email: ''
    })

    //防止子组件更新时同时去更新父组件
    useEffect(() => {
        setCurrentPath(location)
    })

    return (
        <TypeArea>
            <form
                onSubmit={evt => {
                    evt.preventDefault()

                    console.log('formData', formData)
                }}
            >
                <Container>
                    <Text>你的Github ID是？</Text>
                    <Input
                        value={formData.githubID}
                        onChange={evt => {
                            setFormData({
                                ...formData,
                                githubID: evt.target.value
                            })
                        }}
                    />

                    <Text>你的邮箱是？</Text>
                    <Input
                        value={formData.email}
                        onChange={evt => {
                            setFormData({
                                ...formData,
                                email: evt.target.value
                            })
                        }}
                    />

                    <SubmitWrapper>
                        <Submit>接受挑战</Submit>
                    </SubmitWrapper>
                </Container>
            </form>
        </TypeArea>
    )
}

export default TakeChallenge
