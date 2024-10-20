import "./index.css";

const Section = () => {
  return (
    <div className="founder-container">
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/sinha/image/upload/v1729333167/PSYCHIATRY/jcbi7akvkn4wzoliwb5j.png"
            alt="founder"
            className="founder-img"
          />
        </div>
      <div className="card-container">
        
        <div className="text-container">
        <h1 className="founder-heading">Meet The Founder</h1>
        <h2 className="founder-name">
          Lakeisha Appleton <br />
          FNP-C, PMHNP- BC
        </h2>
        <p className="para">
          "Mental health problems don't define who you are. They are something
          you experience. You walk in the rain and you feel the rain but,
          importantly, <br/>YOU ARE NOT THE RAIN". - Matt Haig
        </p>
        <button className="read-more-button">Learn More &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Section;
