import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
`

export const Navigation = styled.div`
  font-family: Times, serif;
  background-color: DodgerBlue;
  color: white;
  padding: 16px;
  margin: -8px;
  margin-bottom: 8px;
`

export const NavigationItems = styled.div`
  max-width: 800px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    border: 3px solid;
    padding: 8px 12px 4px 12px;
    margin: 0px;
  }

  h1:hover,
  a:hover {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    text-transform: lowercase;
    font-size: 16px;
    padding: 8px;
    border-radius: 4px;
    color: white;
  }
`

export const Content = styled.div`
  font-family: Arial, Helvetica, sans-serif;

  a {
    text-decoration: none;
    color: dodgerblue;
  }

  a:hover {
    color: blue;
  }
`
