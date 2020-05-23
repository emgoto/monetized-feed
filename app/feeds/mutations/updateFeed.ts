import db, { FeedUpdateArgs } from "db"

type UpdateFeedInput = {
  where: FeedUpdateArgs["where"]
  data: FeedUpdateArgs["data"]
}

export default async function updateFeed({ where, data }: UpdateFeedInput) {
  // Don't allow updating
  delete data.id

  const feed = await db.feed.update({ where, data })

  return feed
}
