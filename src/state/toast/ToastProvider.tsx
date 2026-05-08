import { useCallback, useMemo, useRef, useState } from 'react'
import { ToastContext } from './ToastContext'
import type { Toast, ToastInput } from './types'

function nextId() {
  return Math.random().toString(16).slice(2)
}

export function ToastProvider(props: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])
  const timeoutsRef = useRef<Map<string, number>>(new Map())

  const dismissToast = useCallback((id: string) => {
    const timeout = timeoutsRef.current.get(id)
    if (timeout) window.clearTimeout(timeout)
    timeoutsRef.current.delete(id)
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const pushToast = useCallback(
    (input: ToastInput) => {
      const id = nextId()
      const toast: Toast = {
        id,
        message: input.message,
        variant: input.variant ?? 'info',
      }
      setToasts((prev) => [...prev, toast])

      const timeout = window.setTimeout(() => dismissToast(id), 4500)
      timeoutsRef.current.set(id, timeout)
    },
    [dismissToast],
  )

  const value = useMemo(() => ({ toasts, pushToast, dismissToast }), [toasts, pushToast, dismissToast])

  return <ToastContext.Provider value={value}>{props.children}</ToastContext.Provider>
}

