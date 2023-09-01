import './Button.scss'

interface ButtonProps {
  link: string
  text: string
  type?: string
}

export const Button = ({ link, text, type }: ButtonProps) => {
  const styles: string[] = ['button']
  type && styles.push('button-green')

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={styles.join(' ')}
    >
      {text}
    </a>
  )
}
