import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer id="footer">
          <div className="container d-lg-flex py-4">
            <div className="mr-lg-auto text-center text-lg-left">
              <div className="copyright">
                &copy; Copyright{" "}
                <strong>
                  <span>Zen Spa Nail</span>
                </strong>
                . All Rights Reserved
              </div>
              <div className="credits">
                ReDesigned by
                <a href="https://bootstrapmade.com/"> Cody </a>
              </div>
            </div>
          </div>
        </footer>

        <script src="Flexor/assets/vendor/jquery/jquery.min.js"></script>
        <script src="Flexor/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="Flexor/assets/vendor/jquery.easing/jquery.easing.min.js"></script>
        <script src="Flexor/assets/vendor/php-email-form/validate.js"></script>
        <script src="Flexor/assets/vendor/jquery-sticky/jquery.sticky.js"></script>
        <script src="Flexor/assets/vendor/venobox/venobox.min.js"></script>
        <script src="Flexor/assets/vendor/owl.carousel/owl.carousel.min.js"></script>
        <script src="Flexor/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="Flexor/assets/vendor/aos/aos.js"></script>

        <script src="Flexor/assets/js/main.js"></script>
      </React.Fragment>
    );
  }
}

export default Footer;
