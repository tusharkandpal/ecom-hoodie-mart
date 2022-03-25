import "./HomeMain.css";
import { Link } from "react-router-dom";

export function HomeMain() {
  return (
    <div>
      <section className="banner-section">
        <img
          className="banner-img"
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/7/bc993d6c-2cf7-4c5d-b20c-d8cddff8caee1638869622654-Cutecumber_Desk_Banner.jpg"
          alt="banner-img"
        />
      </section>
      <section className="article-section">
        <Link to="/product-listing">
          <div className="article">
            <img
              className="article-img"
              src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17124224/2022/2/10/635e07f0-c682-4f3a-b69f-3cbf68ab4d991644505755552Oversizedzip-throughhoodie3.jpg"
            />
            <div className="article-details">
              <p className="article-title">NEW ARRIVALS</p>
              <div className="article-sub-details">
                <h2 className="article-header">Winter Collection</h2>
                <p className="article-text">
                  Check out our best winter collection to stay warm in style
                  this season
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/product-listing">
          <div className="article">
            <img
              className="article-img"
              src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17124354/2022/2/10/bf88bdb0-c618-45c0-a2dc-a48281c88d9e1644508343901Printedhoodie1.jpg"
            />
            <div className="article-details">
              <p className="article-title">TRENDING FASHION</p>
              <div className="article-sub-details">
                <h2 className="article-header">Premium Collection</h2>
                <p className="article-text">
                  Check out our premium collection for best offers on top brands
                </p>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
