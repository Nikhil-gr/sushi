import { useGSAP } from "@gsap/react";
import Navbar from "./Navbar";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Front = () => {
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
    <div className="front-grid">
      <div className="left">
        <div className="front-page">
          <Navbar />
          <video
            src="/video/sush.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />{" "}
        </div>
        <div className="hero-text">
          <h1 className="title">
            Sushi
            <br />
            Sensation
          </h1>
        </div>
      </div>

      <div className="right">
        <div className="right-card">
          <img src="/images/front1.png" alt="menu" />
          <div className="card-label">
            Menu <span>→</span>
          </div>
        </div>
        <div className="right-card">
          <img src="/images/front2.png" alt="reservation" />
          <div className="card-label">
            Reservation <span>→</span>
          </div>
        </div>
        <div className="right-card">
          <img src="/images/front3.png" alt="our restaurant" />
          <div className="card-label">
            Our Restaurant <span>→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
