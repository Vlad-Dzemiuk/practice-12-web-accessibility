import { createContext } from 'react'
import type { Toast, ToastInput } from './types'

export type ToastContextValue = {
  toasts: Toast[]
  pushToast: (input: ToastInput) => void
  dismissToast: (id: string) => void
}

export const ToastContext = createContext<ToastContextValue | null>(null)

