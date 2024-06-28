export const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home_container container grid">
          <div className="home_content grid">
            <div className="home_social">
              <a
                href="https://www.linkedin.com/in/reynaldo-yusellino-564724270"
                target="_blank"
                className="home_social-icon"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                <i className="uil uil-linkedin-alt"></i>
              </a>
              <a
                href="https://www.instagram.com/rynldysllino"
                target="_blank"
                className="home_social-icon"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <i className="uil uil-instagram"></i>
              </a>
              <a
                href="https://github.com/reynaldo0"
                target="_blank"
                className="home_social-icon"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <i className="uil uil-github-alt"></i>
              </a>
            </div>

            <div className="home_img" data-aos="zoom-in" data-aos-duration="2700">
              <svg
                className="home_blob"
                viewBox="0 0 200 187"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <mask id="mask0" mask-type="alpha">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />

                  <image className="home_blob-img" xlink:href="img/me.png" />
                </g>
              </svg>
            </div>

            <div className="home_data">
              <h3
                className="home_about"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                Hallo, Nama saya
              </h3>
              <h1
                className="home_title"
                data-aos="fade-right"
                data-aos-duration="2300"
              >
                Reynaldo Yusellino
              </h1>
              <h3
                className="home_subtitle animated-text"
                data-aos="fade-right"
                data-aos-duration="2500"
              >
                <span></span>
              </h3>
              <p
                className="home_description"
                data-aos="fade-right"
                data-aos-duration="2800"
              >
                Saya merupakan seseorang yang suka mempelajari bahasa
                Pemrograman khususnya untuk pengembangan website, dan game.
                Selain itu saya juga antusias terhadap keamanan siber terhadap
                website.
              </p>
              <a
                href="#contact"
                className="button button--flex"
                data-aos="zoom-in-right"
                data-aos-duration="3000"
              >
                Hubungi Saya<i className="uil uil-message button_icon"></i>
              </a>
            </div>
          </div>

          <div
            className="home_scroll"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <a href="#about" className="home_scroll-button button--flex">
              <i className="uil uil-mouse-alt home_scroll-mouse"></i>
              <span className="home_scroll-name">Menu Selanjutnya</span>
              <i className="uil uil-arrow-down home-scroll-arrow"></i>
            </a>
          </div>
        </div>
      </section>
  )
}

export default Home