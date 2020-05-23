import db, { FindOneFeedArgs } from "db"
import Parser from "rss-parser"

type GetFeedInput = {
  where: FindOneFeedArgs["where"]
  include?: FindOneFeedArgs["include"]
}

export default async function getFeed({ where, include }: GetFeedInput) {
  console.log("where", where)
  const feed = await db.feed.findOne({ where, include })

  const { name, privateUrl, publicUrl, pointer } = feed

  const parser = new Parser()
  const publicFeed = await parser.parseURL(publicUrl)
  const privateFeed = await parser.parseURL(privateUrl)

  return { name, publicFeed, privateFeed, pointer }
}
