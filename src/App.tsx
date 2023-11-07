import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Introduce from './pages/Introduce'
import SideMenu from './components/SideMenu'
import { useState, createContext } from 'react'
import TakeChallenge from './pages/TakeChallenge'
import FinishChallenge from './pages/FinishChallenge'

//全局上下文
export const GlobalContext = createContext(undefined)

//上下文wrapper，为包裹内的组件提供所注入的对象
const GlobalProvider = ({ children, value }: any) => {
    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}

function App() {
    //记录当前在哪个路由
    const [currentPath, setCurrentPath] = useState('')

    return (
        /* 对象注入处，将需要注入的对象填写在value内 */
        <GlobalProvider value={{ currentPath, setCurrentPath }}>
            {currentPath === '/welcome' ? null : <SideMenu />}
            <BrowserRouter>
                <Routes>
                    <Route path='/welcome' element={<Welcome />} />
                    <Route path='/introduce' element={<Introduce />} />
                    <Route path='/take_challenge' element={<TakeChallenge />} />
                    <Route path='/finish_challenge' element={<FinishChallenge />} />

                    <Route path='/' element={<Navigate replace to='/welcome' />} />
                    <Route path='*' element={<Navigate replace to='/welcome' />} />
                </Routes>
            </BrowserRouter>
        </GlobalProvider>
    )
}

export default App
