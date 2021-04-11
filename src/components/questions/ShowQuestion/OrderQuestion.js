import { Loadable } from 'components/common'

const OrderQuestion = ({ isLoading, cost, text, items = [] }) => (
  <Loadable loaded={!isLoading}>
    <div className="d-flex flex-column">
      <div className="d-flex">
        <div className="bg-primary">{cost}</div>
        <div>{text}</div>
      </div>

      <ol>
        {items
          .sort(({ index }) => index)
          .map(({ id, text: optionText }) => (
            <li key={id}>{optionText}</li>
          ))}
      </ol>
    </div>
  </Loadable>
)

export default OrderQuestion
