import React, { Component } from "react";

class TopBar extends Component {
  state = {};
  render() {
    return (
      <section id="topbar" class="d-none d-lg-block">
        <div class="container d-flex">
          <div class="contact-info mr-auto">
            <ul></ul>
          </div>
          <div class="cta">
            <a
              href="https://www.fresha.com/providers/zen-spa-nails-bf52m9av"
              class="scrollto"
            >
              Book now
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default TopBar;
