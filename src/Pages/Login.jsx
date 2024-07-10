import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <>
      <div className='lg1'></div>
      <div className='lg3'>
        <h2>Login Form</h2><br />
        <form>
          <input type='text' placeholder='E-Mail' />
          <input type='text' placeholder='Password' />
          <button>Submit</button>
        </form>
        <br />
        <Link to='/signin' style={{ textDecoration: 'none' }}><p>New Here: Sign Up</p></Link>
      </div>

    </>)
}

export default Login