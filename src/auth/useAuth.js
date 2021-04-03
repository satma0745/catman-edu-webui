import { useContext } from 'react'
import AuthContext from './AuthContext'
import { setUserInfo } from './session'

const useAuth = () => {
  const userInfo = useContext(AuthContext)
  return [userInfo, setUserInfo]
}

export default useAuth
