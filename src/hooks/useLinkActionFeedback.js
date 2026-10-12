import { useActionFeedback } from '../context/ActionFeedbackProvider'
import { getLinkActionMessage } from '../utils/linkActionMessage'

export function useLinkActionFeedback() {
  const notify = useActionFeedback()

  const runWithFeedback = (href, onClick) => (event) => {
    const message = getLinkActionMessage(href)
    if (message) notify(message)
    onClick?.(event)
  }

  return { notify, runWithFeedback }
}
