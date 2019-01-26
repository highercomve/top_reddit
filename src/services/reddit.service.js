import axios from 'axios'

const REDDIT_URL = 'https://www.reddit.com/'

export function getTopNews (limit = 25, after, before, count) {
  return axios({
    method: 'GET',
    url: `${REDDIT_URL}/top.json`,
    params: {
      limit,
      after,
      before,
      count
    }
  }).then(response => response.data)
}
