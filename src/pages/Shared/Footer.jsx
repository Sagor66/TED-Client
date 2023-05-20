import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-slate-100 to-indigo-100 py-20 px-12">
      <div className="grid justify-center md:grid-cols-5 space-y-4">
        <div className="md:col-span-2">
          <div className="flex h-20 items-start mb-4">
            <img
              className="w-20 h-28 object-cover object-top"
              src="../../../public/logo.svg"
              alt=""
            />
            <div>
              <h2 className="font-fredoka font-bold text-5xl text-pink-500 tracking-wider">
                TED
              </h2>
              <small className="text-gradient bg-gradient-to-r from-pink-500 to-indigo-400 font-bold text-sm tracking-tight">
                TOY-EDUCATION
              </small>
            </div>
          </div>
          <h4 className="font-fredoka font-semibold text-xl text-gradient bg-gradient-to-br from-pink-500 to-pink-50 tracking-wide">Learn While Playing with Toys</h4>
        </div>
        <div>
          <h4 className="text-primary-style text-xl p-0 mb-3">
            Contact Information
          </h4>
          <p className="footer-text">Phone: (555) 123-4567</p>
          <p className="footer-text">Email: info@toylandemporium.com</p>
          <p className="footer-text">Website: www.toylandemporium.com</p>
        </div>
        <div>
          <h4 className="text-primary-style text-xl p-0 mb-3">Address</h4>
          <p className="footer-text">
            Toyland Emporium
            <br />
            123 Main Street
            <br />
            Cityville, ABC 12345
          </p>
        </div>
        <div className="text-pink-500">
          <h4 className="text-primary-style text-xl p-0 mb-3">Find Us On</h4>
          <div className="flex justify-start items-center gap-5 mt-6">
            <FontAwesomeIcon
              className="fa-xl text-blue-500"
              icon={faFacebook}
            />
            <FontAwesomeIcon
              className="fa-xl text-red-500"
              icon={faInstagram}
            />
            <FontAwesomeIcon className="fa-xl text-black" icon={faTiktok} />
            <FontAwesomeIcon className="fa-xl text-sky-500" icon={faTwitter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
