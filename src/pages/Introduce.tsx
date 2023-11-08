import MD from 'markdown-to-jsx'
import { rawMD } from '../assets/rawMD'
import { GlobalContext } from '../App'
import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import TypeArea from '../components/TypeArea'

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
            <div className='markdown-body'>
                <MD>{rawMD}</MD>
            </div>
        </TypeArea>
    )
}

export default Introduce
