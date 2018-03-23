import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

export function getRemoteAvatar(id) {
  return `https://loremflickr.com/70/70/people?lock=${id}`
}

export function formatTimeline(items) {
  items.forEach(item => {
    item.avatarUrl = getRemoteAvatar(item.avatar)
    item.time = distanceInWordsToNow(item.created_at * 1000, { addSuffix: true })
    return item
  })
  return items
}
