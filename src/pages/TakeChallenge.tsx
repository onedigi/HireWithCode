import TypeArea from '../components/TypeArea'
import { GlobalContext } from '../App'
import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
`
const Text = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
    padding: 0;
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
    font-size: 4rem;
`

const TakeChallenge = () => {
    const location = useLocation().pathname
    const globalContext = useContext(GlobalContext)
    const { setCurrentPath }: any = globalContext
    const [formData, setFormData] = useState({
        github: '',
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
                        value={formData.github}
                        onChange={evt => {
                            setFormData({
                                ...formData,
                                github: evt.target.value
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
                        <Submit>提交</Submit>
                    </SubmitWrapper>
                </Container>
            </form>
        </TypeArea>
    )
}

export default TakeChallenge
