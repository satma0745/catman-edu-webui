const state = {
  subscribers: [],
  userInfo: undefined,
}

const getUserInfo = () => state.userInfo

const persist = (session) => {
  if (session) {
    localStorage.setItem('session', JSON.stringify(session))
  } else {
    localStorage.removeItem('session')
  }
}

const setUserInfo = (userInfo) => {
  state.userInfo = userInfo
  persist(userInfo)

  state.subscribers.forEach((notify) => notify(userInfo))
}

const subscribeToUserInfo = (callback) => {
  const unsubscribe = () => {
    state.subscribers = state.subscribers.filter(callback)
  }

  state.subscribers.push(callback)
  return unsubscribe
}

const loadUserInfo = () => {
  const session = localStorage.getItem('session')
  const userInfo = session ? JSON.parse(session) : undefined

  setUserInfo(userInfo)
}

export { getUserInfo, setUserInfo, subscribeToUserInfo, loadUserInfo }
