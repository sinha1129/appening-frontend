import Header from "../Header"

import './index.css'

const Home = () => {
    return (
        <>
        <Header />
        <div className="bg-container">
            <h1 className="heading">NEED A MENTAL <br/>HEALTH PROVIDER?</h1>
            <p className="description">No Look Further</p>
            <p className="description">Our goal is to provide a safe, comfortable and warm environment so that you can openly discuss your mental health needs.</p>
            <button className="explore-button">Explore More</button>
        </div>
        </>
    )
}

export default Home