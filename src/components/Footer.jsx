import { ReactComponent as VIcon } from '../assets/V.svg'

/** get current year to display in copyright text
 * must convert data to string to avoid object-type errors in React */
const currentYear = new Date().getFullYear();
let year = currentYear.toString();

function Footer() {
  return (
    <footer className='footer_container'>
      <VIcon fill="#BDE0C0" transform='rotate(90),scale(-0.4, 0.4)' alt='>' />
      {window.innerWidth < 360 ?
        // remove word 'copyright' on small screens
        <p className='footer_copyright'>© {year} Molly Felts Vallin</p>
        :
        <p className='footer_copyright'>Copyright © {year} Molly Felts Vallin</p>}
      <VIcon fill="#BDE0C0" transform='rotate(-90),translate(0,0) scale(-0.4, 0.4)' alt='>' />
    </footer >
  )
};

export default Footer;