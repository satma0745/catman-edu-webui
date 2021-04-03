import Spinner from 'react-bootstrap/Spinner'

const Loadable = ({ loaded, children, ...props }) => {
  if (!loaded) {
    return (
      <div {...props}>
        <div className="d-flex justify-content-center">
          <Spinner animation="border" />
        </div>
      </div>
    )
  }

  return <div {...props}>{children}</div>
}

export default Loadable
