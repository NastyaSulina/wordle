import styles from './ErrorPage.module.scss'

export const ErrorPage = () => {
    return (
        <div className={styles.root}>
            <h1 className={styles.heading}>Упс, такой страницы нет!</h1>
        </div>
    )
}
