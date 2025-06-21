import styles from './Landing.module.scss'

import { Button, ButtonType, ButtonSize } from '@/shared/ui/Button'

import Image from '@/shared/assets/flower.webp'

export const Landing = () => {
    return (
        <div className={styles.root}>
            <img fetchPriority='high' className={styles.image} src={Image} alt='Flower' />
            <div className={styles.button}>
                <Button
                    buttonType={ButtonType.primary}
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
