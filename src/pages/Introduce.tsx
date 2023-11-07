import MD from 'markdown-to-jsx'
import { rawMD } from '../assets/rawMD'
import TypeArea from '../components/TypeArea'
import { GlobalContext } from '../App'
import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Introduce = () => {
    const location = useLocation().pathname
    const globalContext = useContext(GlobalContext)
    const { setCurrentPath }: any = globalContext

    //防止子组件更新时同时去更新父组件
    useEffect(() => {
        setCurrentPath(location)
    })

    return (
        <TypeArea>
            <MD>{rawMD}</MD>
        </TypeArea>
    )
}

export default Introduce
