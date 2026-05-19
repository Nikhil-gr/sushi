import { useGSAP } from "@gsap/react";
import { ratings } from "../../constants";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const AboutPage = () => {
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
    <div className="container-about">
      <div className="left-about">
        <div className="about-cover">
          <img src="/images/about.png" alt="about-cover" />
        </div>
        <div className="about-text">
          <h1 className="title">About</h1>
        </div>
      </div>

      <div className="right-about">
        <div className="container-1">
          <div className="about-description">
            <h1>sushi artistry redefined</h1>
            <p>
              Where culinary craftsmanship meets modern elegance. Indulge in the
              finest sushi, expertly curated to elevate your dining experience.
            </p>
          </div>

          <img src="/images/about1.png" alt="" />
        </div>

        <div className="container-2">
          {ratings.map((item) => (
            <div className="ratings" key={item.id}>
                <img src={item.rating} alt={item.title} />
              <div className="rating-desc">
                <h1>{item.title}</h1>
                <p>{item.tag}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="container-3">
          <img src="/images/about2.png" alt="" />

          <div className="story">
            <h1>Our Story</h1>
            <p>
              Founded with a passion for culinary excellence, Qitchen's journey
              began in the heart of Prague. Over years, it evolved into a haven
              for sushi enthusiasts, celebrated for its artful mastery and
              devotion to redefining gastronomy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
