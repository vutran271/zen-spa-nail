import React, { Component } from "react";

class Contact extends Component {
  state = {
    name: " Full name",
    toEmail: "mail@zenspanail.com",
    senderEmail: "",
    message: "",
    subject: "",
  };

  handleSendEmail() {
    console.log("sending email..");
    console.log(this.state);

    fetch("https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "rapidprod-sendgrid-v1.p.rapidapi.com",
        "x-rapidapi-key": "8277e8e8bfmshd376d9a7053bed3p1b2fb0jsn3e2ec9e3cd87",
        "access-control-allow-origin": "*",
      },
      body: {
        personalizations: [
          {
            to: [
              {
                email: this.state.toEmail,
              },
            ],
            subject: this.state.subject,
          },
        ],
        from: {
          email: this.state.senderEmail,
        },
        content: [
          {
            type: "text/plain",
            value: this.state.message,
          },
        ],
      },
    })
      .then((response) => {
        console.log(response);
        console.log("Json: " + response.json());
        return <h3> Email send successful. </h3>;
      })
      .catch((err) => {
        console.error("Error: " + err);
      });
  }

  handleNameChange(e) {
    this.state.name = e.target.value;
    this.setState(this.state);
  }

  handleEmailChange(e) {
    this.state.senderEmail = e.target.value;
    this.setState(this.state);
  }
  handleMessageChange(e) {
    this.state.message = e.target.value;
    this.setState(this.state);
  }
  handleSubjectChange(e) {
    this.state.subject = e.target.value;
    this.setState(this.state);
  }

  render() {
    return (
      <section id="contact" className="contact section-bg">
        <div className="container">
          <div className="section-title">
            <h2 data-aos="fade-up">Contact</h2>
            <p data-aos="fade-up">
              We are located behind Home Depot. Next to Tropical Smoothie Cafe,
              Starbucks, Queen City Craft.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 mt-4" data-aos="fade-up">
              <div className="info-box">
                <i className="bx bx-map"></i>
                <h3>Our Address</h3>
                <p>5349 Ballantyne commons pkw Charlotte NC 28277</p>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 mt-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="info-box">
                <i className="bx bx-envelope"></i>
                <h3>Email Us</h3>
                <p>mail@zenspanail.com</p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 mt-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="info-box">
                <i className="bx bx-phone-call"></i>
                <h3>Call Us</h3>
                <p>+1 704 814 0689</p>
              </div>
            </div>
          </div>

          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="col-xl-9 col-lg-12 mt-4">
              <form
                onSubmit={() => {
                  this.handleSendEmail();
                }}
                className="php-email-form"
              >
                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                      onChange={(e) => {
                        this.handleNameChange(e);
                      }}
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                      onChange={(e) => {
                        this.handleEmailChange(e);
                      }}
                    />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                    onChange={(e) => {
                      this.handleSubjectChange(e);
                    }}
                  />
                  <div className="validate"></div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                    onChange={(e) => {
                      this.handleMessageChange(e);
                    }}
                  ></textarea>
                  <div className="validate"></div>
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => {
                      this.handleSendEmail();
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
