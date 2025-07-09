
import social from '../../assets/icons/social.png'

const Footer = () => {
    return (
        <footer className=" bg-gray-800 text-base-content mt-24">

     <div className="footer text-white flex max-w-[1150px] mx-auto justify-around p-8">
      <aside>
    <h2 className="text-xl font-semibold"> CareerHub</h2>
    <p className="text-xs mt-3 footer-title">  
     There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.
    </p>
    <img className='mt-3' src={social}  />
  </aside>
 
    <nav  >
     <h6 className='text-white text-xl font-semibold'>Company</h6>
    <a className="link link-hover footer-title text-xs">About us</a>
    <a className="link link-hover footer-title  text-xs">Work</a>
    <a className="link link-hover footer-title  text-xs">Latest new</a>
    <a className="link link-hover footer-title  text-xs">Careers</a>
  </nav>
  <nav>
    <h6 className="text-white text-xl font-semibold "> Product</h6>
    <div className='flex flex-col footer-title text-xs'>
    <a className="link link-hover footer-title">prototype </a>
    <a className="link link-hover mt-3">Contact</a>
    <a className="link link-hover mt-3">Jobs</a>
    <a className="link link-hover mt-3">Press kit</a>
   
    </div>
   
    
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
     </div>

</footer>
    );
};

export default Footer;