import type { Preview } from '@storybook/react-webpack5'
import '../src/app/styles/globalStyles.scss'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

export default preview
