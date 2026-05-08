import { useRef, useState } from 'react'
import { usePageA11y } from '../hooks/usePageA11y'
import { LoadingStatus } from '../components/ui/LoadingStatus'
import { useToast } from '../state/toast/useToast'

type DashboardData = {
  updatedAt: string
  items: Array<{ id: string; name: string }>
}

export function DashboardPage() {
  const h1Ref = useRef<HTMLHeadingElement | null>(null)
  usePageA11y({ title: 'Dashboard | Practice-12', headingRef: h1Ref })

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<DashboardData | null>(null)
  const { pushToast } = useToast()

  async function load() {
    setLoading(true)
    setData(null)

    try {
      await new Promise((r) => setTimeout(r, 900))
      setData({
        updatedAt: new Date().toLocaleString(),
        items: [
          { id: '1', name: 'Accessible routing (title + focus)' },
          { id: '2', name: 'Toast live region (polite)' },
          { id: '3', name: 'Loading status for screen readers' },
        ],
      })
      pushToast({ message: 'Dashboard data loaded.', variant: 'success' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="page" aria-busy={loading}>
      <h1 ref={h1Ref} tabIndex={-1}>
        Dashboard
      </h1>
      <p className="muted">Demo page with an accessible loading indicator and a small async flow.</p>

      <div className="card">
        <div className="actions">
          <button type="button" className="button button--primary" onClick={load} disabled={loading}>
            {loading ? 'Loading…' : 'Load data'}
          </button>
        </div>

        <LoadingStatus loading={loading} label="Loading dashboard data…" />

        {data && (
          <div className="stack">
            <p>
              <strong>Updated:</strong> {data.updatedAt}
            </p>
            <ul>
              {data.items.map((x) => (
                <li key={x.id}>{x.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

