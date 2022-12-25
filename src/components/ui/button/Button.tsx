import './Button.scss'

interface ButtonProps {
  link: string
  text: string
}

export const Button = ({ link, text }: ButtonProps) => {
  return (
    <a href="link" className="button">
      {text}
    </a>
  )
}
