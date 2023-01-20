import { HeroProps } from '../content/HowToPlaySlider'
import './HowToPlayPagination.scss'

export const HowToPlayPagination = ({ iconImgDefault, person }: HeroProps) => {
  return (
    <div className={`play-icons__item play-icons__item-${person}`}>
      <img
        src={iconImgDefault}
        alt="hero-icon"
        className="play-icons__item-img"
      />
    </div>
  )
}
