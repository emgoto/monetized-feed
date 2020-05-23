import { Suspense } from "react"
import { useQuery, Link } from "blitz"
import getFeeds from "app/feeds/queries/getFeeds"

import { Info, FeedContainer, FeedsContainer, FeedName } from "../components/styled"

const Feeds = () => {
  const [feeds] = useQuery(getFeeds, { where: {} })

  return feeds.map((feed, index) => (
    <Link href={`/feeds/${feed.id}`} key={index}>
      <FeedContainer>
        <FeedName>{feed.name}</FeedName>
      </FeedContainer>
    </Link>
  ))
}

const App = () => (
  <>
    <h2>
      Welcome to monetized-feed!{" "}
      <span role="img" aria-label="wave emoji">
        👋
      </span>
    </h2>

    <Info>
      This RSS reader harnesses the power of{" "}
      <a href="https://webmonetization.org/" target="_blank" rel="noreferrer">
        web monetization
      </a>
      , allowing you to support creators by sending micropayments as you read their content. Check out a list
      of web-monetized RSS feeds available below.
    </Info>

    <Suspense fallback={<div></div>}>
      <FeedsContainer>
        <Feeds />
      </FeedsContainer>
    </Suspense>
  </>
)

export default App
