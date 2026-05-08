import { useId, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePageA11y } from '../hooks/usePageA11y'
import { useToast } from '../state/toast/useToast'

export function LoginPage() {
  const h1Ref = useRef<HTMLHeadingElement | null>(null)
  usePageA11y({ title: 'Login | Practice-12', headingRef: h1Ref })

  const emailId = useId()
  const passwordId = useId()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const nav = useNavigate()
  const { pushToast } = useToast()

  return (
    <section className="page">
      <h1 ref={h1Ref} tabIndex={-1}>
        Login
      </h1>

      <form
        className="card form"
        onSubmit={(e) => {
          e.preventDefault()
          pushToast({ message: 'Logged in (demo). Redirecting to dashboard…', variant: 'success' })
          nav('/dashboard')
        }}
      >
        <div className="field">
          <label htmlFor={emailId}>Email</label>
          <input
            id={emailId}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor={passwordId}>Password</label>
          <input
            id={passwordId}
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="actions">
          <button type="submit" className="button button--primary">
            Sign in
          </button>
        </div>
      </form>
    </section>
  )
}

