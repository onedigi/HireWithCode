import TypeArea from '../components/TypeArea'
import { GlobalContext } from '../App'
import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const FinishChallenge = () => {
    const location = useLocation().pathname
    const globalContext = useContext(GlobalContext)
    const { setCurrentPath }: any = globalContext

    //防止子组件更新时同时去更新父组件
    useEffect(() => {
        setCurrentPath(location)
    })

    return (
        <TypeArea>
            <div>1</div>
        </TypeArea>
    )
}

export default FinishChallenge
