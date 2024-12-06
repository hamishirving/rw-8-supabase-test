import { useAuth } from 'src/auth'

const HomePage = () => {
  const { isAuthenticated, currentUser, logOut, logIn } = useAuth()

  return (
    <>
      <p>{JSON.stringify({ isAuthenticated })}</p>
      <p>{JSON.stringify({ currentUser })}</p>

      <p>email: 'your.email@email.com'</p>
      <p>password: 'password'</p>

      <button
        onClick={() =>
          logIn({
            email: 'your.email@email.com',
            password: 'password',
          })
        }
      >
        login
      </button>
      <button onClick={() => logOut()}>logout</button>
    </>
  )
}

export default HomePage