import { useToast } from './useToast'

export function ToastRegion() {
  const { toasts, dismissToast } = useToast()

  return (
    <div className="toast-region" aria-live="polite" aria-atomic="true" role="status">
      {toasts.map((t) => (
        <div key={t.id} className={`toast toast--${t.variant}`}>
          <div className="toast__message">{t.message}</div>
          <button type="button" className="toast__close" onClick={() => dismissToast(t.id)} aria-label="Dismiss notification">
            ×
          </button>
        </div>
      ))}
    </div>
  )
}

