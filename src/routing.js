import React from 'react'
import {Route} from 'react-router-dom'
import Home from './Components/Pages/Home'
import Garden from './Components/Pages/Garden'
import Manifesto from './Components/Pages/Manifesto'
import Mindmap from './Components/Pages/Mindmap'

function routing() {
    return (
        <div>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/garden" >
                <Garden/>
            </Route>
            <Route path="/manifesto" >
                <Manifesto/>
            </Route>
            <Route path="/mindmap" >
                <Mindmap/>
            </Route>
        </div>
    )
}

export default routing
