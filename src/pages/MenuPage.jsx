import gsap from "gsap";
import allCards from "../../constants/allcards";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { LazyLoadImage } from "react-lazy-load-image-component";


gsap.registerPlugin(ScrollToPlugin);
const MenuPage = () => {
  const categories = ["Maki", "Uramaki", "Special Rolls"];
  const rightMenuRef = useRef(null);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    gsap.to(rightMenuRef.current, {
      duration: 1,
      scrollTo: { y: targetId, offsetY: 50 },
      ease: "power2.inOut",
    });
  };

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
    <div className="container">
      <div className="left-menu">
        <div className="menu-cover">
          <LazyLoadImage
            src="/images/front4.webp"
            alt="menu-cover"
            effect="blur"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="menu-text">
          <h1 className="title">Menu</h1>
        </div>
      </div>

      <div className="right-menu" ref={rightMenuRef}>
        <div className="buttons">
          <a href="#maki" onClick={(e) => handleScroll(e, "#maki")}>
            Maki
          </a>
          <a href="#uramaki" onClick={(e) => handleScroll(e, "#uramaki")}>
            Uramaki
          </a>
          <a
            href="#special-rolls"
            onClick={(e) => handleScroll(e, "#special-rolls")}
          >
            Special Rolls
          </a>
        </div>

        {categories.map((category, index) => (
          <div
            className="menu-containers"
            key={index}
            id={category.toLowerCase().replace(/\s+/g, "-")}
          >
            <h1>{category}</h1>

            {allCards
              .filter((item) => item.title === category)
              .map((item, i) => (
                <div className="content" key={i}>
                  <LazyLoadImage
                    src={item.imageUrl}
                    alt={item.name}
                    effect="blur"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="content-desc">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                  </div>

                  <p className="price">{item.price}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
