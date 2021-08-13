import React from 'react'
import { setToken } from '../token'

const Login = props => {
  // Used to switch between login and signup
  const [isLogin, setIsLogin] = React.useState(true)

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [name, setName] = React.useState('')
  
  return (
    <div>
      <h4 className="mv3">{isLogin ? 'Login' : 'Sign Up'}</h4>

      <div className="flex flex-column">
        {!isLogin && (
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            placeholder="Your name"
          />
        )}
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
          placeholder="Your email address"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Choose a safe password"
        />
      </div>

      <div className="flex mt3">
        <button
          type="button"
          className="pointer mr2 button"
        >
          {isLogin ? "login" : "create account"}
        </button>
        <button
          type="button"
          className="pointer button"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'need to create an account?' : 'already have an account?'}
        </button>
      </div>
    </div>
  )
}

export default Login 