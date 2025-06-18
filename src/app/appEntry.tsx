import { Button, ButtonType } from '@/shared/ui/Button'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<Button buttonType={ButtonType.black} text='Project template' onClick={() => {}} />)
