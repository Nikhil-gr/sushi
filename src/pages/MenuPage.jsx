const MenuPage = () => {
  return (
    <div className="container">
      <div className="left-menu">
        <div className="menu-cover">
          <img src="/images/front4.png" alt="menu-cover" />
        </div>
        <div className="menu-text">
          <h1 className="title">Menu</h1>
        </div>
      </div>

      <div className="right-menu">
        <div className="buttons">
          <a href="#maki" id="maki">
            Maki
          </a>
          <a href="#uramaki" id="uramaki">
            Uramaki
          </a>
          <a href="#specialrolls" id="specialrolls">
            Special Rolls
          </a>
        </div>

        <div className="menu-containers">
          <h1>Maki</h1>

          <div className="content">
            <img src="/images/maki.png" alt="maki" />
            <div className="content-desc">
              <h2>SPICY TUNA MAKI</h2>
              <p>
                tantalizing blend of spicy tuna, cucumber, and avocado,
                harmoniously rolled in nori and seasoned rice.
              </p>
            </div>
            <p className="price">$5</p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
