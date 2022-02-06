import React from 'react'
import Navbar from '../../Components/MajorComponents/Navbar/navbar'

function Home() {
    return (
        <div className="home">
            <div className="webImg d-lg-block d-none"></div>
            <div className="mobImg d-lg-none d-block"></div>
            <Navbar/>
        </div>
    )
}

export default Home
