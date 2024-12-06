import { render } from '@redwoodjs/testing/web'

import AuthenticatedPage from './AuthenticatedPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AuthenticatedPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthenticatedPage />)
    }).not.toThrow()
  })
})
