import styles from './input.scss'

const input = (props) => {
  return (
    <input {...props} className={styles.input}/>
  )
}

export default input