export default function LinksCreateHtmlForm() {
  return (
    <>
      <form action="/api/links" method="POST">
        <input
          type="text"
          defaultValue="https://github.com/dhavall13/url_shortner"
          name="url"
          placeholder="Your url to shorten"
        />
        <button type="submit">Shorten</button>
      </form>
    </>
  )
}
