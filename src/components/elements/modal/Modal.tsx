import { Button } from '../../ui/button/Button'
import { ModalItem } from './item/ModalItem'
import { Socio } from '../socio/Socio'
import './Modal.scss'
import { navigationMenu } from '../../../data'

export const Modal = () => {
  // const [modal, setModal] = useState(false)
  return (
    <div className="modal">
      <div className="modal__inner">
        <div className="modal__close">
          <span className="modal__close-text">Close</span>
          <span className="modal__close-crest"></span>
        </div>
        <div className="modal__head">
          <h2 className="modal__head-title">Navigation</h2>
          <div className="modal__buttons">
            <Button text="Play game" type="green" link="" />
            <Button text="Pitch deck" link="" />
            <Button text="White paper" link="" />
          </div>
        </div>
        <div className="modal__body">
          <div className="modal__body-title">Home</div>
          <nav className="modal__menu">
            <ul className="modal__list">
              {navigationMenu.map((title, index) => (
                <ModalItem title={title} key={index} />
              ))}
            </ul>
          </nav>
        </div>
        <Socio />
        <div className="modal-footer">
          <div className="modal-footer__item">
            <a href="#" className="modal-footer__link">
              Legal Notice & Disclaimers
            </a>
          </div>
          <div className="modal-footer__item">
            <a href="#" className="modal-footer__link">
              Privacy policy
            </a>
          </div>
          <div className="modal-footer__item">
            <a href="#" className="modal-footer__link">
              Contacts
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
