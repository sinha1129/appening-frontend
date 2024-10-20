import "./index.css";

const FAQs = () => {
  return (
    <div className="faqs-container">
      <h1 className="faqs-heading">Frequently asked questions</h1>
      <div className="questions-container">
        <h1 className="question-heading">-Is Psychiatry confidential?</h1>
        <p className="faq-answer">
          We offer In - Person and Virtual Psychiatry Services Where You Can
          Meet Your Provider In Person Or At The Convinence Of Your Home.
        </p>
        <hr />
        <h1 className="question-heading">+ What is the best way to schedule a appointment?</h1><hr/>
        <h1 className="question-heading">+ Do you prescribe controlled substance medication?</h1><hr/>
        <h1 className="question-heading">+ How long does the initial appointment take?</h1>
      </div>
    </div>
  );
};

export default FAQs;
