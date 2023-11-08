import TypeArea from '../components/TypeArea'
import { GlobalContext } from '../App'
import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { supabase } from '../clients/supabase'
import { validateEmail, validateGithubID } from '../utils/validate'

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

    @media screen and (max-width: 560px) {
        font-size: 1.5rem;
    }
`

const ErrMsg = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
    padding: 0;
    color: red;

    @media screen and (max-width: 560px) {
        font-size: 1.5rem;
    }
`

const Input = styled.input`
    height: 3rem;
    width: 96%;
    font-size: 2rem;
    margin-bottom: 5rem;
    background-color: transparent;
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

    @media screen and (max-width: 560px) {
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
        github_id: '',
        email: ''
    })
    const [githubIDErr, setGithubIDErr] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [submitBtnText, setSubmitBtnText] = useState('接受挑战')

    //防止子组件更新时同时去更新父组件
    useEffect(() => {
        setCurrentPath(location)
    })

    return (
        <TypeArea>
            <form
                onSubmit={async evt => {
                    evt.preventDefault()

                    setGithubIDErr(false)
                    setEmailErr(false)

                    if (!validateGithubID(formData.github_id)) setGithubIDErr(true)
                    if (!validateEmail(formData.email)) setEmailErr(true)

                    if (formData.github_id === '' || formData.email === '' || githubIDErr || emailErr) {
                        setSubmitBtnText('提交失败')

                        return
                    }

                    setSubmitBtnText('提交中...')

                    const { data, error } = await supabase.from('take_challenge').insert([formData]).select()
                    if (error) console.log('error', error)

                    if (data) setSubmitBtnText('提交成功')

                    console.log('data', data)
                }}
            >
                <Container>
                    {!githubIDErr ? <Text>你的GitHub ID是？</Text> : <ErrMsg>GitHub ID格式错啦！</ErrMsg>}
                    <Input
                        value={formData.github_id}
                        onBlur={evt => {
                            setGithubIDErr(false)
                            if (!validateGithubID(evt.currentTarget.value)) setGithubIDErr(true)
                        }}
                        onFocus={() => {
                            setGithubIDErr(false)
                            setSubmitBtnText('接受挑战')
                        }}
                        onChange={evt => {
                            setFormData({
                                ...formData,
                                github_id: evt.target.value
                            })
                        }}
                    />

                    {!emailErr ? <Text>你的邮箱是？</Text> : <ErrMsg>邮箱格式错啦！</ErrMsg>}
                    <Input
                        value={formData.email}
                        onBlur={evt => {
                            setEmailErr(false)
                            if (!validateEmail(evt.currentTarget.value)) setEmailErr(true)
                        }}
                        onFocus={() => {
                            setEmailErr(false)
                            setSubmitBtnText('接受挑战')
                        }}
                        onChange={evt => {
                            setFormData({
                                ...formData,
                                email: evt.target.value
                            })
                        }}
                    />
                    <SubmitWrapper>
                        <Submit>{submitBtnText}</Submit>
                    </SubmitWrapper>
                </Container>
            </form>
        </TypeArea>
    )
}

export default TakeChallenge
