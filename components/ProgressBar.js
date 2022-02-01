import styles from './ProgressBar.module.css'

const ProgressBar = () => {
     return (
        <div className="w-full">
            <div className={styles['progress-bar']}>
            <div className={styles['progress-bar-value']}></div>
            </div>
        </div>
     )
}

export default ProgressBar

