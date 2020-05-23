// app/feeds/pages/feeds/[id]/[slug].tsx

import { Suspense } from "react"
import { useRouter, useQuery, Head } from "blitz"
import getFeed from "app/feeds/queries/getFeed"
import xss from "xss"
import { findPostIndexFromSlug, useMonetization } from "../../../../utils"

const Post = () => {
  const router = useRouter()
  const id = parseInt(router?.query.id as string)
  const slug = router?.query.slug as string
  const [feed] = useQuery(getFeed, { where: { id } })
  const { publicFeed, privateFeed, pointer } = feed
  const postIndex = findPostIndexFromSlug(slug, publicFeed.items)
  const publicPost = publicFeed.items[postIndex]
  const privatePost = privateFeed.items[postIndex]

  const { isMonetized, isLoading } = useMonetization()

  if (isLoading) {
    return <div>Loading...</div>
  }

  const post = isMonetized ? privatePost["content:encoded"] : publicPost["content:encoded"]

  return (
    <div>
      <Head>
        <meta name="monetization" content={`${pointer}`} />
      </Head>
      <h1>{publicPost.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: xss(post) }} />
    </div>
  )
}

const PostPage = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Post />
    </Suspense>
  )
}

export default PostPage
