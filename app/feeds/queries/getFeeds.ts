import db, { FindManyFeedArgs } from "db"

type GetFeedsInput = {
  where: FindManyFeedArgs["where"]
  include?: FindManyFeedArgs["include"]
  orderBy?: FindManyFeedArgs["orderBy"]
  skip?: FindManyFeedArgs["skip"]
  after?: FindManyFeedArgs["after"]
  before?: FindManyFeedArgs["before"]
  first?: FindManyFeedArgs["first"]
  last?: FindManyFeedArgs["last"]
}

export default async function getFeeds({
  where,
  include,
  orderBy,
  skip,
  after,
  before,
  first,
  last,
}: GetFeedsInput) {
  const feeds = await db.feed.findMany({
    where,
    include,
    orderBy,
    skip,
    after,
    before,
    first,
    last,
  })

  return feeds
}
