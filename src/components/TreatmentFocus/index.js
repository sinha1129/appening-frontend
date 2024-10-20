import "./index.css";

const TreatmentFocus = () => {
  return (
    <div className="treatment-container">
      <h1 className="treatment-heading">Our Treatment Focus</h1>
      <div className="details-container">
        <img
          src="https://res.cloudinary.com/sinha/image/upload/v1729334974/PSYCHIATRY/peolittqx30imnqbocpm.jpg"
          alt="mental-health"
          className="images"
        />
        <div className="text-container">
          <h1 className="stage-heading">Mental Health</h1>
          <p className="stage-para">
            Mental health is our emotional, psychological, and social
            well-being. It affects how we feel, think, and act. It also helps
            determine how we handle stress, build relationships, relate to
            others, and make healthy life decisions. Mental health is vita; at
            every stage of life. At Ada Psychiatry, we specialize in various
            conditions such as Depression, Anxiety, ADHD, Bipolar and more.
          </p>
          <button className="read-more-button">Learn More &gt;</button>
        </div>
      </div>
      <div className="details-container">
        <img
          src="https://res.cloudinary.com/sinha/image/upload/v1729341381/PSYCHIATRY/esrcbmfwve6zvzwvbwce.jpg"
          alt="mental-health"
          className="images"
        />
        <div className="text-container ">
          <h1 className="stage-heading">Addiction And Recovery</h1>
          <p className="stage-para">
            Addiction is a chronic dysfunction of the brain system. An individual experienceing 
            addiction will have difficulty staying away from the addictive behaviour, display a lack
            of self-control, be dismayed by how the behaviour may be causing problems, and lack an emotional 
            response. At Ada Psychiatry, we assess your risk for addiction and create a comprehensive treatment plan
            to start your recovery. Our experts are trained in medication-assisted treatment. You do not have to continue to 
            struggle alone.
          </p>
          <button className="read-more-button">Learn More &gt;</button>
        </div>
      </div>
      <div className="details-container">
        <img
          src="https://res.cloudinary.com/sinha/image/upload/v1729341563/PSYCHIATRY/dsfqpio7y5dwahkhqrwn.png"
          alt="mental-health"
          className="images"
        />
        <div className="text-container">
          <h1 className="stage-heading">Supervised Medical Weigth Loss</h1>
          <p className="stage-para">
            The Primary indicator of obesity is when a person's body mass index (BMI)
            is 30 or higher. Medically supervised weight loss is a program designed for individuals  who are
            obese or overweight. At Ada Psychiatry, we offer a comprehensive weight loss program that includes
            personalized nutrition planning, regular exercise, and medication-assisted treatment. Our team of experts

          </p>
          <button className="read-more-button">Learn More &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default TreatmentFocus;
