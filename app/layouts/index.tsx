import { Link } from "blitz"

import { Container, Navigation, NavigationItems, Content } from "./styled"

const Layout = ({ children }) => {
  return (
    <>
      <Navigation>
        <NavigationItems>
          <Link href="/">
            <h1>monetized-feed</h1>
          </Link>
          <Link href="/settings">
            <a>Settings</a>
          </Link>
        </NavigationItems>
      </Navigation>
      <Container>
        <Content>{children}</Content>
      </Container>
    </>
  )
}

export default Layout
