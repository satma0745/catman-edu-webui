const QuestionTitle = ({ text, cost }) => (
  <div className="d-flex align-items-center">
    <div className="bg-primary py-1 px-2 text-light rounded">{cost}</div>
    <div className="ml-2">{text}</div>
  </div>
)

export default QuestionTitle
