import { ReactComponent as Logo } from '../assets/logo.svg'

/** get current year to display in copyright text
 * must convert data to string to avoid object-type errors in React */
const currentYear = new Date().getFullYear();
let year = currentYear.toString();

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer_logo' alt='logo Molly Felts Vallin'>
        <Logo height='36px' />
      </div>
      <p className='footer_copyright'>Copyright ©{year} Molly Felts Vallin</p>
    </footer>
  )
};

export default Footer;