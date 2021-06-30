import getTokenOwnerCall from 'api/auth/calls/getTokenOwnerCall'

const state = {
  subscribers: [],
  userInfo: undefined,
}

const storage = {
  saveToken: (token) => localStorage.setItem('token', token),
  clear: () => localStorage.removeItem('token'),
}

const getUserInfo = () => state.userInfo

const signInAsync = async (token) => {
  const userInfo = await getTokenOwnerCall(token)

  state.userInfo = { ...userInfo, token }
  state.subscribers.forEach((notify) => notify(userInfo))

  storage.saveToken(token)
}

const subscribeToUserInfo = (callback) => {
  const unsubscribe = () => {
    state.subscribers = state.subscribers.filter(callback)
  }

  state.subscribers.push(callback)
  return unsubscribe
}

const signOut = () => {
  state.userInfo = undefined
  state.subscribers.forEach((notify) => notify(undefined))

  storage.clear()
}

const loadSessionAsync = async () => {
  const token = localStorage.getItem('token')
  if (!token) {
    return
  }

  const userInfo = await getTokenOwnerCall(token)

  state.userInfo = { ...userInfo, token }
  state.subscribers.forEach((notify) => notify(userInfo))
}

export { getUserInfo, signInAsync, signOut, subscribeToUserInfo, loadSessionAsync }
