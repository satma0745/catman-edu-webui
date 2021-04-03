class NotFoundError extends Error {
  constructor() {
    super('Not found')
    this.notFound = true
  }
}

export default NotFoundError
