import vIcon from '../assets/V.png'

/** get current year to display in copyright text
 * must convert data to string to avoid object-type errors in React */
const currentYear = new Date().getFullYear();
let year = currentYear.toString();

function Footer() {
  return (
    <footer className='footer_container'>
      <div className='vIcon left'>
        <img src={vIcon} alt='<' />
      </div>
      {window.innerWidth < 375 ?
        // remove word 'copyright' on small screens
        <p className='footer_copyright'>© {year} Molly Felts Vallin</p>
        :
        <p className='footer_copyright'>Copyright © {year} Molly Felts Vallin</p>}
      <div className='vIcon right'>
        <img src={vIcon} alt='>' />
      </div>
    </footer >
  )
};

export default Footer;