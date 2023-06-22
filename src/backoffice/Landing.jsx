import React, {useState} from 'react'
import Nav from '../components/Nav'
import Dashboard from '../pages/Dashboard'
import PageFooter from './PageFooter'


const Landing = (props) => {
    const [show, setShow] = useState(true)

    return (
        <div className="flex">
            
            <div className="w-full">
                <Nav setShow={setShow} show={show} {...props}/>
                <h1>Landing</h1>
                <Dashboard />
                <PageFooter show={show}/>
            </div>
        </div>
    )
}

export default Landing