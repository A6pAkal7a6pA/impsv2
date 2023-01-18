import 'swiper/scss'
import 'swiper/scss/effect-coverflow'
import 'swiper/scss/navigation'
import './HowToPlay.scss'
import { SectionProps } from '../../../data'
import { Color, Title } from '../../ui/title/Title'
import { HowToPlaySlider } from './content/HowToPlaySlider'

export const HowToPlay = ({ idName }: SectionProps) => {
  return (
    <section className="play" id={idName} data-aos="fade-up">
      <div className="play__inner container">
        <h4 className="play__subtitle">Your heroes are your pride!</h4>
        <Title text="Fearless imps with unrivaled skill." color={Color.BLUE} />
        <div className="play-icons"></div>
        <HowToPlaySlider />
      </div>
    </section>
  )
}
