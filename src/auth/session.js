const state = {
  subscribers: [],
  userInfo: undefined,
}

const getUserInfo = () => state.userInfo

const setUserInfo = (userInfo) => {
  state.userInfo = userInfo
  state.subscribers.forEach((notify) => notify(userInfo))
}

const subscribeToUserInfo = (callback) => {
  const unsubscribe = () => {
    state.subscribers = state.subscribers.filter(callback)
  }

  state.subscribers.push(callback)
  return unsubscribe
}

export { getUserInfo, setUserInfo, subscribeToUserInfo }
