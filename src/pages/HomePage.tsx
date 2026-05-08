import { useRef } from 'react'
import { useToast } from '../state/toast/useToast'
import { usePageA11y } from '../hooks/usePageA11y'

export function HomePage() {
  const h1Ref = useRef<HTMLHeadingElement | null>(null)
  usePageA11y({ title: 'Home | Practice-12', headingRef: h1Ref })

  const { pushToast } = useToast()

  return (
    <section className="page">
      <h1 ref={h1Ref} tabIndex={-1}>
        Home
      </h1>
      <p className="muted">
        This is a prepared SPA template.
      </p>

      <div className="card">
        <h2>Quick demo</h2>
        <div className="actions">
          <button
            type="button"
            className="button"
            onClick={() => pushToast({ message: 'Toast: changes will be announced politely.', variant: 'info' })}
          >
            Show toast (aria-live="polite")
          </button>
        </div>
      </div>
    </section>
  )
}

