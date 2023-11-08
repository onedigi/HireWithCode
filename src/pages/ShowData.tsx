//TODO:想做个渲染历史提交数据的页面，但是好懒，目前这个有问题

import { GlobalContext } from '../App'
import { useContext, useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { supabase } from '../clients/supabase'
import TypeArea from '../components/TypeArea'

const Container = styled.div``

const ShowData = () => {
    const location = useLocation().pathname
    const globalContext = useContext(GlobalContext)
    const { setCurrentPath }: any = globalContext
    const [takeChallenge, setTakeChallenge] = useState([])
    const flag = useRef(false)

    const getTakeChallengeData = async () => {
        const { data, error } = await supabase.from('take_challenge').select('*')
        if (error) {
            console.error(error)
            return
        }

        console.log('data', data)

        setTakeChallenge(data as [])
        flag.current = true

        console.log('takeChallenge', takeChallenge)
    }

    //防止子组件更新时同时去更新父组件
    useEffect(() => {
        setCurrentPath(location)
    })

    useEffect(() => {
        getTakeChallengeData()
    })

    return (
        <TypeArea>
            <Container>show data</Container>
        </TypeArea>
    )
}

export default ShowData
