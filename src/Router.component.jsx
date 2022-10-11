import {Route, Routes} from 'react-router-dom'
import { Home } from './component/pages'


export default function Routing(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    )
}