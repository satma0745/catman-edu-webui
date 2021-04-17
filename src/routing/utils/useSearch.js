import { useHistory, useLocation } from 'react-router-dom'

const deserialize = (searchString) => {
  const entries = Array.from(new URLSearchParams(searchString).entries())
  const params = entries.reduce((reduced, [key, value]) => ({ ...reduced, [key]: value }), {})

  return params
}

const isSignificant = (param) => {
  if (param === null || param === undefined) {
    return false
  }

  if (typeof param === 'string' && param.trim().length === 0) {
    return false
  }

  return true
}

const significantParams = (params) =>
  Object.entries(params)
    .filter(([_, value]) => isSignificant(value))
    .reduce((reduced, [name, value]) => ({ ...reduced, [name]: value }), {})

const useSearch = () => {
  const { push } = useHistory()
  const { pathname, search } = useLocation()

  const searchParams = deserialize(search)

  const set = (params) => {
    const urlSearchParams = new URLSearchParams(significantParams(params))
    push(`${pathname}?${urlSearchParams}`)
  }

  return [searchParams, set]
}

export default useSearch
