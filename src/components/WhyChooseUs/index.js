import "./index.css";

const WhyChooseUs = () => {
  return (
    <div className="choose-container">
      <div className="img-container">
        <img
          src="https://res.cloudinary.com/sinha/image/upload/v1729414605/PSYCHIATRY/ixrumqjcmarefjuoki0x.jpg"
          alt="doctor"
          className="img"
        />
      </div>
      <div className="why-choose-text-container">
        <h1 className="question">Why Should You Choose Psychiatry?</h1>
        <h2 className="answer">-Convinent access</h2>
        <p className="answer-para">
          We offer In - Person and Virtual Psychiatry Services Where You Can
          Meet Your Provider In Person Or At The Convinence Of Your Home.
        </p>
        <hr className="line"/>
        <h3 className="qualities">+ Concierge approch</h3> <hr/>
        <h3 className="qualities">+ High quality service</h3> <hr />
        <h3 className="qualities">+ Trusted and emphatic providers</h3>
      </div>
    </div>
  );
};

export default WhyChooseUs;
