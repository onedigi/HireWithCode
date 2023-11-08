import { GlobalContext } from '../App'
import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { supabase } from '../clients/supabase'
import { validateURL } from '../utils/validate'
import TypeArea from '../components/TypeArea'

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    width: 60vw;

    @media screen and (max-width: 768px) {
        width: 75vw;
    }
`

const Text = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`

const ErrMsg = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
    padding: 0;
    color: red;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`

const Input = styled.input`
    height: 3rem;
    width: 100%;
    font-size: 2rem;
    margin-bottom: 5rem;
    background-color: transparent;

    @media screen and (max-width: 768px) {
        height: 2rem;
        font-size: 1.5rem;
    }
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
    border-style: none;
    box-shadow: inset -0.8125rem -1rem 1rem 0rem rgba(0, 0, 0, 0.1);

    &:active {
        box-shadow: inset 1rem 1rem 1rem 0rem rgba(0, 0, 0, 0.1);
    }

    @media screen and (max-width: 768px) {
        height: 5rem;
        width: 10rem;
        border-radius: 0.8rem;
        font-size: 1rem;
    }
`

const FinishChallenge = () => {
    const location = useLocation().pathname
    const globalContext = useContext(GlobalContext)
    const { setCurrentPath }: any = globalContext
    const [githubURLErr, setGithubURLErr] = useState(false)
    const [vercelURLErr, setVercelURLErr] = useState(false)
    const [submitBtnText, setSubmitBtnText] = useState('提交作品')

    const [formData, setFormData] = useState({
        github_url: '',
        vercel_url: ''
    })

    //防止子组件更新时同时去更新父组件
    useEffect(() => {
        setCurrentPath(location)
    })

    return (
        <TypeArea>
            <form
                onSubmit={async evt => {
                    evt.preventDefault()

                    setGithubURLErr(false)
                    setVercelURLErr(false)

                    if (!validateURL(formData.github_url)) setGithubURLErr(true)
                    if (!validateURL(formData.vercel_url)) setVercelURLErr(true)

                    if (formData.github_url === '' || formData.vercel_url === '' || githubURLErr || vercelURLErr) {
                        setSubmitBtnText('提交失败')

                        return
                    }

                    setSubmitBtnText('提交中...')

                    const { data, error } = await supabase.from('finish_challenge').insert([formData]).select()
                    if (error) console.log('error', error)

                    if (data) setSubmitBtnText('提交成功')

                    console.log('data', data)
                }}
            >
                <Wrapper>
                    <Container>
                        {!githubURLErr ? <Text>你的GitHub仓库URL是？</Text> : <ErrMsg>GitHub仓库URL格式错啦！</ErrMsg>}
                        <Input
                            value={formData.github_url}
                            onBlur={evt => {
                                setGithubURLErr(false)
                                if (!validateURL(evt.currentTarget.value)) setGithubURLErr(true)
                            }}
                            onFocus={() => {
                                setGithubURLErr(false)
                                setSubmitBtnText('提交作品')
                            }}
                            onChange={evt => {
                                setFormData({
                                    ...formData,
                                    github_url: evt.target.value
                                })
                            }}
                        />
                        {!vercelURLErr ? (
                            <Text>你的Vercel在线体验地址是？</Text>
                        ) : (
                            <ErrMsg>Vercel地址格式错啦！</ErrMsg>
                        )}
                        <Input
                            value={formData.vercel_url}
                            onBlur={evt => {
                                setVercelURLErr(false)
                                if (!validateURL(evt.currentTarget.value)) setVercelURLErr(true)
                            }}
                            onFocus={() => {
                                setVercelURLErr(false)
                                setSubmitBtnText('提交作品')
                            }}
                            onChange={evt => {
                                setFormData({
                                    ...formData,
                                    vercel_url: evt.target.value
                                })
                            }}
                        />

                        <SubmitWrapper>
                            <Submit>{submitBtnText}</Submit>
                        </SubmitWrapper>
                    </Container>
                </Wrapper>
            </form>
        </TypeArea>
    )
}

export default FinishChallenge
