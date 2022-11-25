import React from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <TopBar />
      <NavBar />
      <div style={{ textAlign: "center" }}>
        <div style={{ height: "2px", backgroundColor: "#80a831" }}></div>
        <div style={{ padding: "10px", backgroundColor: "#ffe7e7" }}>
          We are currenly looking for more nails technicians and receptionist.
          <Link to="/career">Learn more</Link>
        </div>
      </div>
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="container" data-aos="fade-in">
          <h1>Welcome to Zen Spa Nail</h1>
          <h2>Cleanliness is our most priority.</h2>
          <div className="d-flex align-items-center">
            <i className="bx bxs-right-arrow-alt get-started-icon"></i>
            <a
              href="https://www.fresha.com/providers/zen-spa-nails-bf52m9av"
              className="btn-get-started scrollto"
            >
              Book now
            </a>
          </div>
        </div>
      </section>
      <main id="main5" style={{ marginTop: "50px" }}>
        <section id="why-us" className="why-us" style={{ display: "none" }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5" data-aos="fade-up">
                <div className="content">
                  <h3>Why Choose Zen Spa for your services?</h3>
                  <p>
                    We are group of passionate service provider who love people
                    and live to make others feel amazing. Our nail professionals
                    and wax specialists are here to deliver the passion to make
                    sure you feel and look your best.
                  </p>
                  <div className="text-center">
                    <a
                      href="https://www.fresha.com/providers/zen-spa-nails-bf52m9av"
                      className="more-btn"
                    >
                      Book Now <i className="bx bx-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7 d-flex">
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div
                      className="col-xl-4 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-receipt"></i>
                        <h4>Corporis voluptates sit</h4>
                        <p>
                          Consequuntur sunt aut quasi enim aliquam quae harum
                          pariatur laboris nisi ut aliquip
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-cube-alt"></i>
                        <h4>Ullamco laboris ladore pan</h4>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-images"></i>
                        <h4>Labore consequatur</h4>
                        <p>
                          Aut suscipit aut cum nemo deleniti aut omnis.
                          Doloribus ut maiores omnis facere
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="why-us" className="why-us">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5" data-aos="fade-up">
                <div
                  className="content"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <h2 style={{ color: "#126826" }}>Special!</h2>
                  <ul style={{ color: "#80a831" }}>
                    <li>
                      5% Off every services on Monday, Tuesday, Wednesday.
                    </li>
                    <li>Expired: March 30, 2022.</li>
                    <li>Please show this message to front desk. </li>
                    <li>Can not combine with other offer.</li>
                  </ul>
                  <div className="text-center"></div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7 d-flex">
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div
                      className="col-xl-4 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-receipt"></i>
                        <h4>Clean Enviroment</h4>
                        <p>
                          At Zen, we have an energetic and inviting environment
                          to meet all of your most important beauty needs.
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="icofont-pixels"></i>
                        <h4>Up-to-date</h4>
                        <p>
                          We’re all about innovations, and our new liquids as
                          part of the OPI Powder Perfection system are revamped
                          with pros specifically in mind! Whether you’re new to
                          the dip powder trend or already a regular client,
                          these new products are sure to be essential additions
                          beauty to your daily life
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="icofont-checked"></i>
                        <h4>We care</h4>
                        <p>
                          Your satisfaction is our goal. If you are not happy
                          with your service, talk to our front-desk, we will
                          ensure that you are happy before you leave.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="Portfolio section-bg">
          <div className="container">
            <div className="section-title">
              <h2 data-aos="fade-up">Zen's photo</h2>
            </div>

            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <img
                  src="Flexor/assets/img/ZenShop/content1.jpeg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <img
                  src="Flexor/assets/img/ZenShop/content2.jpeg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <img
                  src="Flexor/assets/img/ZenShop/content3.jpeg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <img
                  src="Flexor/assets/img/ZenShop/content4.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <img
                  src="Flexor/assets/img/ZenShop/content5.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <img
                  src="Flexor/assets/img/ZenShop/content6.jpeg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <img
                  src="Flexor/assets/img/ZenShop/content7.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <img
                  src="Flexor/assets/img/ZenShop/content8.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <img
                  src="Flexor/assets/img/ZenShop/content9.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="covid19-update"
          className="container"
          style={{ backgroundColor: "#80a831", color: "white" }}
        >
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-12">
                  <article>
                    <header className="title-block">
                      <h1
                        className="article-title"
                        style={{ textAlign: "center" }}
                      >
                        COVID-19 Updates
                      </h1>
                    </header>
                    <div className="article-block">
                      <div className="article-hero"></div>
                      <p style={{ textAlign: "center" }}>
                        <em>Updated: 02/22/2022</em>
                      </p>

                      <p>
                        We’ve been busy taking action to best serve you when the
                        time was right. Our salon is currenly opening and you
                        can use
                        <a
                          style={{ color: "orange" }}
                          href="https://www.fresha.com/providers/zen-spa-nails-bf52m9av"
                        >
                          Online Booking
                        </a>
                        <sup>®</sup> to book an appointment.
                      </p>
                      <p>
                        As we re-open from the pandemic, we need your help by
                        following our new Online Booking process and thinking
                        ahead about masks.
                      </p>
                      <h2 className="heading5">Consider bringing a mask</h2>
                      <p>
                        Many local authorities are requiring that people wear
                        masks or face coverings in salons, and our salon is
                        independently requiring masks. Please consider bringing
                        a mask or face covering to the salon with you.
                      </p>
                      <h2 className="heading5">
                        Spend less time in the salon with Online Booking
                      </h2>
                      <ol>
                        <li>
                          Booking online
                          <a href="https://www.fresha.com/providers/zen-spa-nails-bf52m9av">
                            <span style={{ color: "orange" }}>
                              Booking Web app
                            </span>
                          </a>
                          &nbsp;
                        </li>

                        <li>
                          Follow the instructions posted on the salon's front
                          door.
                        </li>
                      </ol>
                      <p>
                        If something comes up after you've booked online and you
                        can't go to the salon, please cancel 24 hour prior to
                        your appointment to remove your name from the list.
                      </p>
                      <p>
                        We thank you ahead of time for going with the flow. See
                        you soon!
                      </p>
                      <br />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="pricing">
          <div className="container">
            <div className="section-title">
              <h2 data-aos="fade-up" className="aos-init aos-animate">
                Rewards Program
              </h2>
              <p data-aos="fade-up" className="aos-init aos-animate">
                Become our member to get free repair, free services, discounts
                when you have enough points. It's totally free to sign up.
              </p>
              <p>Tip: Scan the barcode at front desk to earn points.</p>
            </div>

            <div className="row" style={{ justifyContent: "space-around" }}>
              <div
                className="col-lg-3 col-md-6 aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="box">
                  <h3>Free</h3>
                  <h4>
                    <sup></sup> Earns points<span> / visit</span>
                  </h4>
                  <ul>
                    <li>800 points - $5 off</li>
                    <li>1500 - $10 off</li>
                    <li>2000 - Free Manicure</li>
                    <li>2600 - Free Basic Pedicure</li>
                  </ul>
                  <div className="btn-wrap">
                    <p className="btn-buy">In-Store only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services section-bg">
          <div className="container">
            <div className="section-title aos-init aos-animate">
              <h2>Services</h2>
              <p>
                Every client is important to us. We ask that you express your
                needs during your visit and we shall do our best to get the way
                you want. Any issues during your visit that you and your
                professional can’t resolve, please ask managers and he/she will
                make it right. Our services price detail are show on booking
                appointment.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 aos-init aos-animate">
                <div className="icon-box">
                  <div className="icon">
                    <i className="icofont-check"></i>
                  </div>
                  <h4 className="title">
                    <p>Nails Enhancement </p>
                  </h4>
                  <p className="description">
                    We perform all kinds of nail services such as manicure,
                    acrylic, SNS dipping powder, repair, etc..Our prices will be
                    listed when you are booking an appointment with us
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 aos-init aos-animate">
                <div className="icon-box">
                  <div className="icon">
                    <i className="icofont-check"></i>
                  </div>
                  <h4 className="title">
                    <p>Pedicures</p>
                  </h4>
                  <p className="description">
                    Our pedicure, come in three forms. Spa Pedicure, Jelly
                    Pedicure and Herbal Spa Pedicure. All come with a relaxing
                    soak, along with detailing of nails and cuticles, an
                    exfoliating sugar or salt scrub, a full foot and leg
                    massage, and the perfect polish application.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 aos-init aos-animate">
                <div className="icon-box">
                  <div className="icon">
                    <i className="icofont-check"></i>
                  </div>
                  <h4 className="title">
                    <p>Kiddie Grooming</p>
                  </h4>
                  <p className="description">
                    Kids service under 10 year olds will always have discounts.
                    Check out our prices when you booking an appointment with
                    us.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 aos-init aos-animate">
                <div className="icon-box">
                  <div className="icon">
                    <i className="icofont-check"></i>
                  </div>
                  <h4 className="title">
                    <p>Waxing</p>
                  </h4>
                  <p className="description">
                    Our waxing services will be performed by female technicians
                    only. We only hire those who has experimented and licensed.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 aos-init aos-animate">
                <div className="icon-box">
                  <div className="icon">
                    <i className="icofont-check"></i>
                  </div>
                  <h4 className="title">
                    <p>Body Spa</p>
                  </h4>
                  <p className="description">
                    Body massage services will be preformed by the female and on
                    female only. Our most common one is Hot Stone Massage. It is
                    a dual purpose massage. Due to the heat of the stones, it is
                    always a highly relaxing, stress reduction massage. The
                    hardness of the stones allows us to address specific problem
                    areas with more detailed work or deeper pressure if desired.
                    If you are looking for relaxation, this is the one for you!
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 aos-init aos-animate">
                <div className="icon-box">
                  <div className="icon">
                    <i className="icofont-check"></i>
                  </div>
                  <h4 className="title">
                    <p>Skin Care</p>
                  </h4>
                  <p className="description">
                    Skin care includes customizing mini facial, Anti-Aging
                    Rejuvenating Facial. Designed to give you an instant glow in
                    the minimal amount of time. The mini version of our
                    best-selling customized facial includes: cleansing, toning,
                    exfoliating, massage, a mask, and moisturizing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="about">
          <div
            className="container"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <div className="row" style={{ width: "700px" }}>
              <div className="icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                <h4>About us</h4>
                <h3>
                  We are located behind Home Depot. Next to Tropical Smoothie
                  Cafe, Starbucks, Queen City Craft. We are proud to serve in
                  the Ballantyne, Prominent area
                </h3>
                <p>
                  we're committed to delivering only the best services to ensure
                  your safety by only using the finest ingredients and products;
                  eliminating harmful chemicals that are so widely used in other
                  nail salons. We promote healthy practices ensuring your
                  well-being and comfort by using grade-A sanitation standards,
                  developing client-focused services, and only using superior
                  products
                </p>
              </div>
            </div>
            <div>
              <img
                width="350px"
                src="Flexor/assets/img/ZenShop/about-content.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
