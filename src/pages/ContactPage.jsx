import { openingHours } from "../../constants";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const ContactPage = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });

    gsap.from(heroSplit.chars, {
      filter: "blur(10px)",
      opacity: 0,
      y: 100,
      ease: "back",
      duration: 1,
      stagger: 0.05,
    });
  }, []);
  return (
    <div className="container-contact">
      <div className="left-contact">
        <div className="contact-cover">
          <img src="/images/contact.png" alt="contact-cover" />
        </div>
        <div className="contact-text">
          <h1 className="title">contact</h1>
        </div>
      </div>

      <div className="right-contact">
        <div className="container1">
          <div className="opening-hours">
            <h1>Opening Hours</h1>
            {openingHours.map((item, index) => (
              <div className="hours" key={index}>
                <p>{item.day}</p>
                <p>
                  {item.open}
                  {item.close && ` - ${item.close}`}
                </p>
              </div>
            ))}
          </div>

          <div className="images">
            <img src="/images/contact1.png" alt="" />
            <img src="/images/contact2.png" alt="" />
            <img src="/images/contact.png" alt="" />
            <img src="/images/about.png" alt="" />
          </div>
        </div>

        <div className="container2">
          <div className="contactus">
            <div className="contact-card">
              <p className="contact-kicker">Get in touch</p>
              <div className="contact-divider" />
              <div className="contact-list">
                <div className="contact-row">
                  <span className="contact-label">Address</span>
                  <span className="contact-value">
                    23 Greenfield Avenue, Prague 120 00
                  </span>
                </div>
                <div className="contact-row">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+49 1234 567890</span>
                </div>
                <div className="contact-row">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">email@example.com</span>
                </div>
                <div className="contact-row">
                  <span className="contact-label">Follow</span>
                  <span className="contact-value contact-socials">
                    <span className="contact-social">IG</span>
                    <span className="contact-social">FB</span>
                    <span className="contact-social">X</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
