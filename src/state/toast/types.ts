export type ToastVariant = 'info' | 'success' | 'error'

export type Toast = {
  id: string
  message: string
  variant: ToastVariant
}

export type ToastInput = {
  message: string
  variant?: ToastVariant
}

