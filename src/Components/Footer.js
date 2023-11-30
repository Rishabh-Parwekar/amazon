import { NavLink } from "react-router-dom";

function Footer(){
    return <>
    
    <footer className="container py-5 px-5">
      <hr />
  <div className="row">
    <div className="col-12 col-md">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-amazon" viewBox="0 0 16 16">
       <path d="M10.813 11.968c.157.083.36.074.5-.05l.005.005a89.521 89.521 0 0 1 1.623-1.405c.173-.143.143-.372.006-.563l-.125-.17c-.345-.465-.673-.906-.673-1.791v-3.3l.001-.335c.008-1.265.014-2.421-.933-3.305C10.404.274 9.06 0 8.03 0 6.017 0 3.77.75 3.296 3.24c-.047.264.143.404.316.443l2.054.22c.19-.009.33-.196.366-.387.176-.857.896-1.271 1.703-1.271.435 0 .929.16 1.188.55.264.39.26.91.257 1.376v.432c-.199.022-.407.044-.621.065-1.113.114-2.397.246-3.36.67C3.873 5.91 2.94 7.08 2.94 8.798c0 2.2 1.387 3.298 3.168 3.298 1.506 0 2.328-.354 3.489-1.54l.167.246c.274.405.456.675 1.047 1.166ZM6.03 8.431C6.03 6.627 7.647 6.3 9.177 6.3v.57c.001.776.002 1.434-.396 2.133-.336.595-.87.961-1.465.961-.812 0-1.286-.619-1.286-1.533ZM.435 12.174c2.629 1.603 6.698 4.084 13.183.997.28-.116.475.078.199.431C13.538 13.96 11.312 16 7.57 16 3.832 16 .968 13.446.094 12.386c-.24-.275.036-.4.199-.299l.142.087Z"/>
       <path d="M13.828 11.943c.567-.07 1.468-.027 1.645.204.135.176-.004.966-.233 1.533-.23.563-.572.961-.762 1.115-.191.154-.333.094-.23-.137.105-.23.684-1.663.455-1.963-.213-.278-1.177-.177-1.625-.13l-.09.009c-.095.008-.172.017-.233.024-.193.021-.245.027-.274-.032-.074-.209.779-.556 1.347-.623Z"/>
    </svg>
      <small className="d-block mb-3 text-body-secondary">© 2023-2024</small>
    </div>
    <div className="col-6 col-md">
      <h6>Get to Know us</h6>
      <ul className="list-unstyled text-small">
        <li><NavLink className="link-secondary text-decoration-none" to="/about">About us</NavLink></li>
        <li><NavLink className="link-secondary text-decoration-none" to="/">Careers</NavLink></li>
        <li><NavLink className="link-secondary text-decoration-none" to="/">Press Releases</NavLink></li>
        <li><NavLink className="link-secondary text-decoration-none" to="/">Amaazon Science</NavLink></li>
        {/* <li><NavLink className="link-secondary text-decoration-none" href="#">Another one</NavLink></li>
        <li><NavLink className="link-secondary text-decoration-none" href="#">Last time</NavLink></li> */}
      </ul>
    </div>
    <div className="col-6 col-md">
      <h6>Connect with us</h6>
      <ul className="list-unstyled text-small">
        <li><NavLink className="link-secondary text-decoration-none" to="/">Facebook</NavLink></li>
        <li><NavLink className="link-secondary text-decoration-none" to="/">Twitter</NavLink></li>
        <li><NavLink className="link-secondary text-decoration-none" to="/">Instagram</NavLink></li>
        {/* <li><NavLink className="link-secondary text-decoration-none" href="#">Final resource</NavLink></li> */}
      </ul>
    </div>
    <div className="col-6 col-md">
      <h6>Make Money with Us</h6>
      <ul className="list-unstyled text-small">
        <li><NavLink className="link-secondary text-decoration-none" to="/">Sell on Amazon</NavLink></li>
        <li><NavLink className="link-secondary text-decoration-none" to="/">Sell under Amazon Accelerator</NavLink></li>
        <li><NavLink className="link-secondary text-decoration-none" to="/">Protect and Build Your Brand</NavLink></li>
        <li><NavLink className="link-secondary text-decoration-none" to="to">Amazon Global Selling</NavLink></li>
        <li><NavLink className="link-secondary text-decoration-none" to="to">Become an Affiliate</NavLink></li>
        <li><NavLink className="link-secondary text-decoration-none" to="to">Fulfilment by Amazon</NavLink></li>
        <li><NavLink className="link-secondary text-decoration-none" to="/">Advertise Your Products</NavLink></li>
        <li><NavLink className="link-secondary text-decoration-none" to="/">Amazon Pay on Merchants</NavLink></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h6>Let Us Help You</h6>
      <ul className="list-unstyled text-small">
        <li><NavLink className="link-secondary text-decoration-none" href="#">COVID-19 and Amazon</NavLink></li>
        <li><NavLink className="link-secondary text-decoration-none" href="#">Your Account</NavLink></li>
        <li><NavLink className="link-secondary text-decoration-none" href="#">Returns Centre</NavLink></li>
        <li><NavLink className="link-secondary text-decoration-none" href="#">100% Purchase Protection</NavLink></li>
        <li><NavLink className="link-secondary text-decoration-none" href="#">Amazon App Download</NavLink></li>
        <li><NavLink className="link-secondary text-decoration-none" href="#">Help</NavLink></li>
      </ul>
    </div>
  </div>
</footer>
    </>
}
export default Footer;