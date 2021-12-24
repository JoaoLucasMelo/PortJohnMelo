<template>
  <div class="contact">
    <div class="col-12 mb-4">
      <div class="row justify-content-center my-4">
        <div class="r">
          <p class="contacttitle">CONTACT INFORMATION</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="px-4">
            <p class="text-white font f-20">
              Thank you for visiting my landing page!
            </p>
            <p class="text-white font f-18">
              Here are some contact information and feel free to send me a
              message, I would love to hear from you!
            </p>
          </div>
          <div class="line"></div>
          <div class="px-4">
            <p class="text-white font f-18 m-0">Name: Joao "John" Melo</p>
            <p class="text-white font f-18 m-0">
              Email: joaolucasrmelo@gmail.com
            </p>
            <p class="text-white font f-18 m-0">City: Boise - ID</p>
          </div>
          <div class="line"></div>
          <div class="px-4 d-flex align-items-center">
            <p class="text-white font f-18 m-0">Visit me on:</p>
            <p class="text-white font f-16 m-0 ms-3">
              <a
                href="https://www.linkedin.com/in/johnmelo94/"
                target="_blank"
                title="John's Linkedin"
                class="mdi mdi-36px icon color mdi-linkedin"
              ></a>
            </p>
            <p class="text-white font f-16 m-0 ms-3">
              <a
                href="https://github.com/JoaoLucasMelo"
                target="_blank"
                title="John's GitHub"
                class="mdi mdi-36px icon color mdi-github"
              ></a>
            </p>
          </div>
        </div>
        <div
          class="
            col-md-6
            d-flex
            flex-column
            justify-content-center
            mb-4
            marginphone
          "
        >
          <div>
            <p class="text-white f-20 font">SEND ME A MESSAGE:</p>
          </div>
          <div class="col-md-10 card contactcard text-white font">
            <form ref="form" @submit.prevent="sendEmail">
              <div class="d-flex justify-content-between">
                <div class="form-group mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Your Name Here..."
                    class="form-control border-0 inputhere"
                    name="user_name"
                  />
                </div>
                <div class="form-group border-0 ms-2 mb-3">
                  <label>Subject</label>
                  <input
                    type="text"
                    class="form-control border-0 inputhere"
                    placeholder="Subject Here..."
                    name="user_subject"
                  />
                </div>
              </div>
              <div class="form-group border-0 mb-3">
                <label>Email</label>
                <input
                  class="form-control"
                  placeholder="Your Email Here..."
                  type="email"
                  name="user_email"
                />
              </div>
              <div class="form-group mb-3">
                <label>Message</label>
                <textarea
                  class="form-control border-0"
                  placeholder="Message Here..."
                  name="message"
                ></textarea>
              </div>
              <div class="d-flex">
                <input
                  type="submit"
                  class="btn btnsend border-0"
                  value="Send"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import emailjs from 'emailjs-com';
export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_hwkyj2q', 'template_k3uye1u', this.$refs.form, 'user_lBxCIiHNixbO5O2u1Dt7g')
        .then((result) => {
          console.log('Email sent!');
        }, (error) => {
          console.log('Email failed!');
        });
    }
  }
}
</script>


<style lang="scss" scoped>
.contact {
  width: 100%;
}
.contacttitle {
  font-size: 5vh;
  margin-top: 3vh;
  margin-left: 5vh;
  color: white;
}
.contactcard {
  background-color: #272a38;
  border-color: #ffc159;
  border-left: 0;
  border-bottom: 0;
  border-width: 6px;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
  margin-bottom: 2vh;
  padding: 3vh;
  margin-top: 2vh;
}
.inputhere {
  width: 30vh;
}
.line {
  margin-left: 3vh;
  margin-top: 2vh;
  margin-bottom: 2vh;
  height: 1vh;
  width: 15vh;
  border-radius: 0%;
  background-color: #ffc159;
}
.color {
  color: #ffffff;
}
.color:hover {
  color: #323647;
}
.icon {
  position: relative;
  color: white;
  z-index: 1;
}
.icon::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4.6vh;
  transform: scaleY(0);
  transform-origin: center;
  background: #ffc159;
  z-index: -1;
  transition: transform 0.1s;
  border-radius: 10% !important;
}
.icon:hover::after {
  transform: scaleY(1);
}
.btnsend {
  color: #323647;
  background-color: #ffc159;
}
@media only screen and (max-width: 500px) {
  .inputhere {
    width: 18vh;
  }
  .marginphone {
    margin-top: 2vh;
  }
}
@media only screen and (max-width: 1000px) and (min-width: 501px) {
}
</style>