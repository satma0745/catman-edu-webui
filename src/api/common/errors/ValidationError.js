class ValidationError extends Error {
  constructor(validation) {
    super('Validation error')
    this.validation = validation
  }
}

export default ValidationError
