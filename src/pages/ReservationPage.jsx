import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const ReservationPage = () => {
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
    <div className="container-reservation">
      <div className="left-reservation">
        <div className="reservation-cover">
          <img src="/images/reservation.png" alt="reservation-cover" />
        </div>
        <div className="reservation-text">
          <h1 className="title">
            book <br /> a table
          </h1>
        </div>
      </div>

      <div className="right-reservation">
        <div className="reservation-grid">
          <div className="reservation-grid-1">
            <h1>Reservation</h1>

            <p>
              Secure your spot at Qitchen, where exceptional sushi and a
              remarkable dining experience await.
            </p>
          </div>

          <form className="reservation-form">
            <input type="text" name="name" placeholder="Name" />

            <input type="text" name="phone" placeholder="Phone Number" />

            <input type="email" name="email" placeholder="Email" />

            <div className="reservation-row">
              <input type="number" name="people" placeholder="Guests" />

              <input type="date" name="date" />

              <input type="time" name="time" />
            </div>

            <button type="submit">Reserve</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
