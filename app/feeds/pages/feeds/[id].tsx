import { Suspense } from "react"
import { Head, useRouter, useQuery, Link } from "blitz"
import getFeed from "app/feeds/queries/getFeed"
import { getSlug } from "../../../utils"
import { ItemContainer, DateContainer } from "../../../components/styled"

const Item = ({ title, date, id }) => {
  console.log("getSlug", getSlug(title))
  return (
    <Link href={`/feeds/${id}/${getSlug(title)}`}>
      <ItemContainer>
        <div>{title}</div>
        <DateContainer>{date}</DateContainer>
      </ItemContainer>
    </Link>
  )
}

export const Feed = () => {
  const router = useRouter()
  const id = parseInt(router?.query.id as string)
  const [feed] = useQuery(getFeed, { where: { id } })
  const {
    name,
    publicFeed: { items },
    pointer,
  } = feed

  return (
    <>
      <Head>
        <meta name="monetization" content={`${pointer}`} />
      </Head>
      <h1>{name}</h1>
      {items.map((item, index) => (
        <Item id={id} title={item.title} date={item.pubDate} key={index} />
      ))}
    </>
  )
}

const FeedPage = () => (
  <Suspense fallback={<div />}>
    <Feed />
  </Suspense>
)

export default FeedPage
