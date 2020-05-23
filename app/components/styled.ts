import styled from "@emotion/styled"

export const Info = styled.div`
  border: 3px solid lightblue;
  border-radius: 8px;
  padding: 16px;
`

export const FeedsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 8px;
`

export const FeedContainer = styled.div`
  width: 252px;
  height: 120px;
  border: 3px solid lightgray;
  border-radius: 8px;
  margin: 8px 0;
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
    border: 3px solid gray;
  }
`

export const FeedName = styled.div`
  text-align: center;
  padding: 8px;
  font-size: 18px;
  margin: auto 0;
`

export const ItemContainer = styled.div`
  font-size: 18px;
  padding: 8px;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    background-color: whitesmoke;
  }
`

export const DateContainer = styled.div`
  font-size: 12px;
  color: grey;
`
export const Table = styled.table`
  th {
    text-align: left;
  }
`
