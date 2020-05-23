import db, { FeedDeleteArgs } from "db"

type DeleteFeedInput = {
  where: FeedDeleteArgs["where"]
}

export default async function deleteFeed({ where }: DeleteFeedInput) {
  const feed = await db.feed.delete({ where })

  return feed
}
