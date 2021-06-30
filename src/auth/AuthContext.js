import { useState, useEffect, createContext } from 'react'

import { Loadable } from 'components/common'

import { getUserInfo, loadSessionAsync, subscribeToUserInfo } from './session'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(getUserInfo())
  useEffect(() => subscribeToUserInfo(setUserInfo), [setUserInfo])

  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    loadSessionAsync().then(() => setLoaded(true))
  }, [setLoaded])

  return (
    <Loadable className="h-100" loaded={loaded}>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </Loadable>
  )
}

export default AuthContext
export { AuthProvider }
