const Footer = () => (
  <div className="d-flex bg-light shadow border-top px-3 py-2 justify-content-between">
    <p className="mb-0">
      Web UI <a href={process.env.REACT_APP_WEB_UI_REPO_LINK}>repo</a>.
    </p>

    <p className="mb-0">
      Supported <a href={process.env.REACT_APP_SUPPORTED_API_VERSION_REPO_LINK}>API</a> version: v
      {process.env.REACT_APP_SUPPORTED_API_VERSION}.
    </p>
  </div>
)

export default Footer
