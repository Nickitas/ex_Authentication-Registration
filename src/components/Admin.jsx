import { Link } from 'react-router-dom'
import Users from './Users'


const Admin = () => {

  const content = (
    <section>
      <h1>Admins Page</h1><br />
      <Users /><br />
      <div className='flex_grow'>
        <Link to={'/'}>Home</Link>
      </div>
    </section>
  )

  return content
}

export default Admin