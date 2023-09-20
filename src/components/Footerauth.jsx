import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import { mobile } from "../responsive";
  import telegram from "../assets/telegram.jpg";
  import reddit from "../assets/reddit.jpg";
  import email from "../assets/email.png";
  import kinkiverse from "../assets/Kinkiversity (1).png";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faCopyright } from "@fortawesome/free-regular-svg-icons";
  import linkedin from "../assets/linkedin.png";
  import { Link } from "react-router-dom";
  import { ROUTES } from "../constants";
  const Footerauth = () => {
    return (
      <div>
        <nav className="first-conti">
          <div className="hell">
            <img src={kinkiverse} className="kink" alt="kink" />
  {/* 
            <h4>
              Welcome to Kinkiverse, the best shopping platform for your men's
              clothing wears, female clothing wears, gadgets/electronics and
              jewelery. Enjoy our personal shopper experience.
            </h4> */}
            <div className="foot-linko">
            <a
              href="https://wa.me/+2348108315163"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="data:image/png;base64,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"
                alt="whatsapp"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/reagan-ossai-2212971b5/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>

            <a href="https://www.instagram.com/reganossai">
              <img
                src="data:image/jpeg;base64,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"
                alt="ig"
              />
            </a>
          </div>
        </div>
          <div className="kirk">
            <h1 className="koko">
              <span>
                <FontAwesomeIcon icon={faCopyright} />
              </span>
              2023 Kinkiverse Inc.
            </h1>
          </div>
          <hr className="hirrr" />
          <div className="olo">
            <h1><Link to={ROUTES.PRODUCTSAUTH}>Products</Link></h1>
            <h1><Link to={ROUTES.CARTAUTH}>Cart</Link></h1>
          </div>
        </nav>
      </div>
    );
  };
  
  export default Footerauth;
  