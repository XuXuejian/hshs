import styles from './button.scss'

const button = (props) => {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  )
}

export default button