/**
 * @typedef {Object} state
 * @property {Array} news - array of news
 * @property {object} newsConfiguration - object with map of news and configuration
 * @property {number} limit
 * @property {string} after
 * @property {string} before
*/

/**
 * update state
 * @param {state} state
 * @param {Object} payload
 * @returns {state}
 */
function updateState (prevState, payload) {
  const news = payload.children.reduce((news, item) => {
    news[item.data.id] = {
      ...item,
      read: false
    }
    return news
  }, {})
  return {
    ...prevState,
    news,
    after: payload.after,
    before: payload.before
  }
}

/**
 * update state
 * @param {state} state
 * @param {Object} payload
 * @returns {state}
 */
function dismiss (state, id) {
  state.news[id] = undefined
  return state
}

/**
 * update state
 * @param {state} state
 * @param {Object} payload
 * @returns {state}
 */
function readed (state, id) {
  state.news[id].read = true
  return state
}

export const reducerFactory = (initialState) => (state = initialState, action) => {
  switch (action.type) {
    case 'reset':
      return initialState
    case 'update':
      return updateState(state, action.payload)
    case 'dismiss':
      return dismiss(state, action.payload)
    case 'dismiss-all':
      return { ...state, news: {} }
    case 'readed':
      return readed(state, action.payload)
    case 'loading':
      return { ...state, loading: action.payload }
    case 'open':
      if (state.news[action.payload]) {
        state.news[action.payload].read = true
      }
      return { ...state, selected: action.payload }
    case 'close':
      return { ...state, selected: null }
    default:
      return state
  }
}
