import db, { FeedCreateArgs } from "db"

type CreateFeedInput = {
  data: FeedCreateArgs["data"]
}
export default async function createFeed({ data }: CreateFeedInput) {
  const feed = await db.feed.create({ data })

  return feed
}
