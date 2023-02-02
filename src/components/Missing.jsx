import { Link } from 'react-router-dom'


const Missing = () => {

  const content = (
    <article style={{ padding: '100px' }}>
      <h1>Oops!</h1>
      <p>Page Not Found</p>
      <div className='flex_grow'>
        <Link to='/'>Visit Our Homepage</Link>
      </div>
    </article>
  )

  return content
}

export default Missing