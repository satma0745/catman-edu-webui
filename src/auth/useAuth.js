import { useContext } from 'react'
import AuthContext from './AuthContext'
import { signInAsync, signOut } from './session'

const useAuth = () => {
  const userInfo = useContext(AuthContext)
  return [userInfo, signInAsync, signOut]
}

export default useAuth
