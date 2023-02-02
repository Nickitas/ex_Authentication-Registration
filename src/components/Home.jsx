import { useNavigate, Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'


const Home = () => {
  const navigate = useNavigate()
  const logout = useLogout()

  const signOut = async () => {
    await logout()
    navigate('/linkpage')
  }

  const userName = localStorage.getItem('user')

  const content = (
    <section>
      <h1>Home</h1><br />
      <p>You are logged in as <b>{userName}</b>!</p><br />
      <Link to={'/editor'}>Go to the Editor page</Link><br />
      <Link to={'/admin'}>Go to the Admin page</Link><br />
      <Link to={'/lounge'}>Go to the Lounge</Link><br />
      <Link to={'/linkpage'}>Go to the link page</Link>
      <div className='flex_grow'>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </section>
  )

  return content
}

export default Home