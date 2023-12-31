'use client'

import { useState } from 'react'

export default function LinksCreateForm() {
  const [results, setResults] = useState(null)

  const handleForm = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData) // converts the form data into a JavaScript object
    const JSONData = JSON.stringify(data) // converts converts the object to JSON
    const endpoint = '/api/links'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONData,
    }

    const response = await fetch(endpoint, options) // to send post req to api
    const result = await response.json()
    setResults(result)
  }

  return (
    <>
      <form onSubmit={handleForm}>
        <input
          type="text"
          defaultValue="https://github.com/dhavall13/url_shortner"
          name="url"
          placeholder="Your url to shorten"
        />
        <button type="submit">Shorten</button>
      </form>
      {results && JSON.stringify(results)}
    </>
  )
}
