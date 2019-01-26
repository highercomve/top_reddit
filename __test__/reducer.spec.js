import { reducer } from '../src/contexts/news.context'
import oneNewsMock from './one_news_mock.json'
import top25 from './top.json'

describe('News reducer Spec', () => {
  it('if no action pass return initial state', () => {
    const state = reducer(undefined, {})
    expect(state.news).toEqual({})
    expect(state.newsConfiguration).toEqual({})
  })

  it('if action is reset return initial state', () => {
    const state = reducer(undefined, { action: 'reset' })
    expect(state.news).toEqual({})
    expect(state.newsConfiguration).toEqual({})
  })

  it('update news should add news and set configuration', () => {
    const initialState = reducer(undefined, {})
    const state = reducer(initialState, { type: 'update', payload: oneNewsMock.data })
    expect(state.news['ajwx12'].data).toEqual(oneNewsMock.data.children[0].data)
    expect(state.news['ajwx12'].read).toBe(false)
    expect(state.after).toEqual(oneNewsMock.data.after)
    expect(state.before).toEqual(oneNewsMock.data.before)
  })

  it('dismiss one news', () => {
    const initialState = reducer(undefined, {})
    let state = reducer(initialState, { type: 'update', payload: top25.data })
    const removeId = 'ajwx12'
    expect(state.news['ajwx12'].data).toEqual(top25.data.children[0].data)
    expect(state.news['ajwx12'].read).toBe(false)
    state = reducer(state, { type: 'dismiss', payload: removeId })
    expect(state.news['ajwx12']).toBeUndefined()
  })

  it('mark as readed', () => {
    const initialState = reducer(undefined, {})
    let state = reducer(initialState, { type: 'update', payload: top25.data })
    const removeId = 'ajwx12'
    state = reducer(state, { type: 'readed', payload: removeId })
    expect(state.news[removeId].data).toEqual(top25.data.children[0].data)
    expect(state.news[removeId].read).toBe(true)
  })

  it('miss miss all', () => {
    const initialState = reducer(undefined, {})
    let state = reducer(initialState, { type: 'update', payload: top25.data })
    state = reducer(state, { type: 'dismiss-all' })
    expect(state.news).toEqual({})
  })
})
