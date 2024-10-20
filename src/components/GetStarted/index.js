import './index.css'

const GetStarted = () => {
    return (
        <div className="get-started-container">
            <h1 className='get-started-heading'>Four Simple Steps to Get Started</h1>
            <div  className="steps-container">
                <div  className="step-item">
                    <img src="https://res.cloudinary.com/sinha/image/upload/v1729419299/PSYCHIATRY/zg0u5wb2s7mr7gnspqrh.jpg" alt="step" className='item-image' />
                    <h1 className='step-heading'>01</h1>
                    <h2 className='step-name'>Book an  appointment</h2> 
                </div>
                <div  className="step-item">
                    <img src="https://res.cloudinary.com/sinha/image/upload/v1729419299/PSYCHIATRY/qtspycwyue1bsykt25mg.jpg" alt="step" className='item-image' />
                    <h1 className='step-heading'>02</h1>
                    <h2 className='step-name'>Connect with your provider</h2> 
                </div> 
                <div  className="step-item">
                    <img src="https://res.cloudinary.com/sinha/image/upload/v1729419299/PSYCHIATRY/to3wnxcpo6zbysnpagc4.jpg" alt="step" className='item-image' />
                    <h1 className='step-heading'>03</h1>
                    <h2 className='step-name'>Discuss your comprehensive assessment</h2> 
                </div> 
                <div  className="step-item">
                    <img src="https://res.cloudinary.com/sinha/image/upload/v1729419299/PSYCHIATRY/n8zbww09mzhjwlcxg64i.jpg" alt="step" className='item-image' />
                    <h1 className='step-heading'>04</h1>
                    <h2 className='step-name'>Get your individualized treatment plan</h2> 
                </div> 
            </div>
            <button className='schedule-button'>Schedule a call &gt;</button>
        </div>
    )
}
export default  GetStarted;
