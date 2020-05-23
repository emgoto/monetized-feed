import { useState, Suspense } from "react"
import createFeed from "app/feeds/mutations/createFeed"
import { useQuery } from "blitz"
import getFeeds from "app/feeds/queries/getFeeds"

import { Table } from "../components/styled"

const initialState = {
  name: "",
  publicUrl: "",
  privateUrl: "",
  pointer: "",
}

const Feed = ({ name, publicUrl, privateUrl, pointer, id, refetch }) => (
  <tr>
    <td>{name}</td>
    <td>{publicUrl}</td>
    <td>{privateUrl}</td>
    <td>{pointer}</td>
  </tr>
)

const Feeds = () => {
  const [feeds, { refetch }] = useQuery(getFeeds, { where: {} })

  const [formState, setFormState] = useState(initialState)

  const onChange = (event) => {
    const { name, value } = event.target
    setFormState({ ...formState, [name]: value })
  }

  const onSubmit = async (state, event, refetch) => {
    event.preventDefault()
    try {
      await createFeed({ data: state })
      refetch() // need to refetch, auto-refetch not yet implemented in Blitzjs
    } catch (error) {
      console.log("Error creating feed", error)
    }
  }

  return (
    <form onSubmit={(event) => onSubmit(formState, event, refetch)}>
      <Table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Public url</th>
            <th>Private url</th>
            <th>Payment pointer</th>
          </tr>
          <tr>
            <td>
              <input type="text" name="name" value={formState.name} onChange={onChange} />
            </td>
            <td>
              <input type="text" name="publicUrl" value={formState.publicUrl} onChange={onChange} />
            </td>
            <td>
              <input type="text" name="privateUrl" value={formState.privateUrl} onChange={onChange} />
            </td>
            <td>
              <input type="text" name="pointer" value={formState.pointer} onChange={onChange} />
            </td>
            <td>
              <input type="submit" value="Create" />
            </td>
          </tr>
          {feeds.map((feed) => (
            <Feed {...feed} key={feed.id} refetch={refetch} />
          ))}
        </tbody>
      </Table>
    </form>
  )
}

const SettingsPage = () => {
  return (
    <>
      <h1>Settings</h1>

      <Suspense fallback={<div />}>
        <Feeds />
      </Suspense>
    </>
  )
}

export default SettingsPage
