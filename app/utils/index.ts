import { useState, useEffect } from "react"

// Creates slug using first 10 - 15 characters of title
export const getSlug = (title: string): string => {
  const array = title.split(" ")
  const newArray = []

  if (array[0].length > 15) {
    return array[0].slice(0, 14)
  }

  let counter = 0

  array.forEach((word) => {
    if (counter + word.length < 15) {
      newArray.push(word.toLowerCase())
      counter += word.length
    }
  })

  return newArray.join("-")
}

export const findPostIndexFromSlug = (slug: string, posts) => {
  let index = 0
  for (let post of posts) {
    index++
    if (getSlug(post.title) === slug) {
      break
    }
  }
  return index
}

export const useMonetization = () => {
  const [isMonetized, setIsMonetized] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!document.monetization) {
      setIsLoading(false)
      setIsMonetized(false)
      return
    }

    const { state } = document.monetization

    if (state === "stopped") {
      setIsLoading(false)
      setIsMonetized(false)
    }

    document.monetization.addEventListener("monetizationstart", () => {
      setIsMonetized(true)
      setIsLoading(false)
    })
  }, [])

  return { isMonetized, isLoading }
}
