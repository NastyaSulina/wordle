import styles from './MainPage.module.scss'

import Image from '@/shared/assets/flower.webp'
import { Button, ButtonType, ButtonSize } from '@/shared/ui/Button'

// TODO: Write MainPage component. This is template
export const MainPage = () => {
    return (
        <div className={styles.root}>
            <div className={styles.imageContainer}>
                <img
                    className={styles.image}
                    src={Image}
                    fetchPriority='high'
                    decoding='async'
                    width='360'
                    height='540'
                    alt='Flower'
                />
            </div>

            <div className={styles.button}>
                <Button
                    buttonType={ButtonType.secondary}
                    onClick={() => {}}
                    size={ButtonSize.L}
                    aria-label='Click Me'
                    isRounded
                >
                    Click Me
                </Button>
            </div>
        </div>
    )
}
