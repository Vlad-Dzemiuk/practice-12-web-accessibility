import { useEffect } from 'react'

export function usePageA11y(options: { title: string; headingRef: React.RefObject<HTMLElement | null> }) {
  const { title, headingRef } = options

  useEffect(() => {
    document.title = title

    // Defer to ensure the element is in DOM and painted
    const id = window.setTimeout(() => {
      headingRef.current?.focus()
    }, 0)

    return () => window.clearTimeout(id)
  }, [title, headingRef])
}

