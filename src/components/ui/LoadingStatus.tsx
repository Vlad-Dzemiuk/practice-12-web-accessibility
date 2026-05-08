export function LoadingStatus(props: { loading: boolean; label?: string }) {
  const label = props.label ?? 'Loading…'

  if (!props.loading) return null

  return (
    <div className="loading" role="status" aria-live="polite" aria-atomic="true">
      <span className="spinner" aria-hidden="true" />
      <span>{label}</span>
    </div>
  )
}

