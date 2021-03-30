import { useState, useEffect, createContext } from 'react'
import { getUserInfo, subscribeToUserInfo } from './session'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(getUserInfo())
  useEffect(() => subscribeToUserInfo(setUserInfo), [setUserInfo])

  return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
}

export default AuthContext
export { AuthProvider }
