import { Link } from 'react-router-dom'


const Editor = () => {
  
  const content = (
    <section>
      <h1>Editors Page</h1><br />
      <p>You must have been assigned an Editor role.</p>
      <div className='flex_grow'>
        <Link to={'/'}>Home</Link>
      </div>
    </section>
  )
  
  return content
}

export default Editor
