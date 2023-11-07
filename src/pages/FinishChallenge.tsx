import TypeArea from '../components/TypeArea'
import { GlobalContext } from '../App'
import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { supabase } from '../clients/supabase'
import { validateURL } from '../utils/validate'

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

const ErrMsg = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
    padding: 0;
    color: red;

    @media screen and (max-width: 460px) {
        font-size: 1.5rem;
    }
`

const Input = styled.input`
    height: 3rem;
    width: 96%;
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

const FinishChallenge = () => {
    const location = useLocation().pathname
    const globalContext = useContext(GlobalContext)
    const { setCurrentPath }: any = globalContext
    const [formData, setFormData] = useState({
        github_url: '',
        vercel_url: ''
    })
    const [githubURLErr, setGithubURLErr] = useState(false)
    const [vercelURLErr, setVercelURLErr] = useState(false)

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
                        console.log('不满足提交条件，return')

                        return
                    }

                    const { data, error } = await supabase.from('finish_challenge').insert([formData]).select()
                    if (error) console.log('error', error)

                    console.log('data', data)
                }}
            >
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
                        }}
                        onChange={evt => {
                            setFormData({
                                ...formData,
                                github_url: evt.target.value
                            })
                        }}
                    />
                    {!vercelURLErr ? <Text>你的Vercel在线体验地址是？</Text> : <ErrMsg>Vercel地址格式错啦！</ErrMsg>}
                    <Input
                        value={formData.vercel_url}
                        onBlur={evt => {
                            setVercelURLErr(false)
                            if (!validateURL(evt.currentTarget.value)) setVercelURLErr(true)
                        }}
                        onFocus={() => {
                            setVercelURLErr(false)
                        }}
                        onChange={evt => {
                            setFormData({
                                ...formData,
                                vercel_url: evt.target.value
                            })
                        }}
                    />

                    <SubmitWrapper>
                        <Submit>提交作品</Submit>
                    </SubmitWrapper>
                </Container>
            </form>
        </TypeArea>
    )
}

export default FinishChallenge
