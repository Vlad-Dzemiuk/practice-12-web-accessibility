import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { usePageA11y } from '../hooks/usePageA11y'

export function NotFoundPage() {
  const h1Ref = useRef<HTMLHeadingElement | null>(null)
  usePageA11y({ title: 'Not Found | Practice-12', headingRef: h1Ref })

  return (
    <section className="page">
      <h1 ref={h1Ref} tabIndex={-1}>
        Page not found
      </h1>
      <p className="muted">The page you requested does not exist.</p>
      <p>
        <Link to="/">Go to Home</Link>
      </p>
    </section>
  )
}

