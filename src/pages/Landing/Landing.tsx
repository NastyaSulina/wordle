import styles from './Landing.module.scss'

import { Button, ButtonType } from '@/shared/ui/Button'

import Image from '@/shared/assets/flower.webp'

export const Landing = () => {
    return (
        <div className={styles.root}>
            <img fetchPriority='high' className={styles.image} src={Image} alt='Цветок' />
            <div className={styles.button}>
                <Button buttonType={ButtonType.black} text='Сделать клик' onClick={() => {}} />
            </div>
        </div>
    )
}
