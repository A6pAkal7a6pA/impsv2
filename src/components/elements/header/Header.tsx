import { Logo } from '../../ui/logo/Logo'
import { Navigation } from '../navigation/Navigation'
import { Button } from '../../ui/button/Button'
// import ShareIcon from '../../../assets/icons/share.svg'
import './Header.scss'
import { useScrollPosition } from '../../../hooks'
import { links } from '../../../data'

export const Header = () => {
  const scrollPosition = useScrollPosition()
  return (
    <div className={`header${scrollPosition > 20 ? ' header-sticky' : ''}`}>
      <div className="header__inner">
        <Logo />
        <Navigation />
        <div className="header__info">
          <Button text="Play game" type="green" link={links.playGame} />
          <Button link={links.pitchDeck} text="Pitch deck" />
          <Button link={links.whitePapper} text="White paper" />
          <a href={links.invest} className="header__contact">
            Want to invest?
          </a>
          <a href="#Follow_Us" className="header__contact">
            Contact
          </a>
          {/* <div className="header__share">
            <img src={ShareIcon} alt="share" />
          </div> */}
        </div>
      </div>
    </div>
  )
}
