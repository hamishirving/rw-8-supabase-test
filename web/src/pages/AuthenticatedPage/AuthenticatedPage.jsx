// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const AuthenticatedPage = () => {
  return (
    <>
      <Metadata title="Authenticated" description="Authenticated page" />

      <h1>AuthenticatedPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/AuthenticatedPage/AuthenticatedPage.jsx</code>
      </p>
      {/*
           My default route is named `authenticated`, link to me with:
           `<Link to={routes.authenticated()}>Authenticated</Link>`
        */}
    </>
  )
}

export default AuthenticatedPage
