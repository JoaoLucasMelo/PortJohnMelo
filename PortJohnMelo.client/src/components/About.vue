<template>
  <div class="aboutcomponent">
    <div class="d-flex justify-content-center">
      <div class="text-white text-end mt-5">
        <p class="font text-center m-0 f-18">
          It's quite fun to do the impossible.
        </p>
        <i class="font text-warning"> ― Walt Disney</i>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-md-4 d-flex justify-content-center">
        <div class="card experienced p-2 d-flex">
          <p class="font text-white f-16 m-2 mb-1">EXPERIENCED IN:</p>
          <div class="d-flex flex-wrap justify-content-center mt-2">
            <div title="HTML 5" class="p-2 m-2 iconscard grow rounded">
              <img
                class="icon pb-1 p-md-1 img-fluid"
                src="../assets/img/icons/317755_badge_html_html5_achievement_award_icon.png"
                alt=""
              />
            </div>
            <div title="CSS 3" class="p-2 m-2 iconscard grow rounded">
              <img
                class="icon p-md-1 img-fluid"
                src="../assets/img/icons/317756_badge_css_css3_achievement_award_icon.png"
                alt=""
              />
            </div>
            <div title="Bootstrap" class="p-2 m-2 iconscard grow rounded">
              <img
                class="icon img-fluid pt-md-1 pb-1"
                src="../assets/img/icons/Bootstrap_logo.svg.png"
                alt=""
              />
            </div>
            <div title="JavaScript" class="p-2 m-2 iconscard js grow rounded">
              <img
                class="icon img-fluid"
                src="../assets/img/icons/652581_code_command_develop_javascript_language_icon.png"
                alt=""
              />
            </div>
            <div title="Node.Js" class="p-2 csharp m-2 iconscard grow rounded">
              <img
                class="icon img-fluid"
                src="../assets/img/icons/4375017_js_logo_node_icon.png"
                alt=""
              />
            </div>
            <div title="Vue 3" class="p-2 m-2 csharp iconscard grow rounded">
              <img
                class="icon p-md-1 img-fluid"
                src="../assets/img/icons/vue.png"
                alt=""
              />
            </div>
            <div title="C#" class="p-2 m-2 csharp iconscard grow rounded">
              <img
                class="icon ps-1 img-fluid"
                src="../assets/img/icons/csharp.png"
                alt=""
              />
            </div>
            <div title="MySQL" class="p-2 m-2 iconscard grow rounded">
              <img
                class="icon p-md-1 img-fluid"
                src="../assets/img/icons/mysql.png"
                alt=""
              />
            </div>
            <div title="MongoDB" class="p-2 m-2 iconscard grow rounded">
              <img
                class="icon pb-1 img-fluid"
                src="../assets/img/icons/mongodb-logo.png"
                alt=""
              />
            </div>
            <div title="VS Code" class="p-2 m-2 iconscard grow rounded">
              <img
                class="icon pb-1 p-md-1 img-fluid"
                src="../assets/img/icons/vscode.png"
                alt=""
              />
            </div>
            <div title="Figma" class="p-2 m-2 iconscard grow rounded">
              <img
                class="icon pb-1 ps-1 p-md-1 ms-md-2 img-fluid"
                src="../assets/img/icons/figma.png"
                alt=""
              />
            </div>
            <div
              title="RESTful API"
              class="p-2 m-2 iconscard csharp grow rounded"
            >
              <img
                class="icon img-fluid rest"
                src="../assets/img/icons/restapi.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8 d-flex justify-content-center">
        <div class="card aboutme d-flex flex-md-row">
          <div class="col-md-6">
            <div>
              <p class="font text-white m-3 ms-4 mb-0 f-16">
                A LITTLE ABOUT ME:
              </p>
            </div>
            <div class="p-4 pt-2">
              <p class="font textabout text-white">
                I came from Brazil after trying out colleges there (
                Architecture and Physical Education ) because my dream was to
                live here in the USA and after almost 3 years working as a
                mover, I finally found something that I love doing and that is
                coding. Everything started when I began my course at Boise
                CodeWorks that is an Immersive Full Stack course with over 500
                hours of in-class learning. I learned both front-end and
                back-end technologies and built full stack applications solo and
                with a team of developers, also using SCRUM methodologies.
              </p>
            </div>
          </div>
          <div
            class="
              col-md-6
              d-flex
              align-items-center
              justify-content-center
              flex-column
            "
          >
            <p class="font textabout text-white pt-md-3 px-4">
              Ever since I started learning about code I fell in love with it,
              and it became a habit to code everyday, I love how it makes me
              think a lot to solve problems and challenges and there's always
              something new to learn. It is definately an exciting carrer field.
            </p>
            <p class="font textabout text-white p-4 pt-2">
              I've always been a computer person as I grew up with computers in
              my house. Learned early how to fix computers and also started
              playing games on it. What probably also lead me to this carrer
              field.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.aboutcomponent {
  // height: 70vh;
  background-color: #272a38;
}
.experienced {
  margin-top: 4vh;
  width: 70%;
  padding-bottom: 2vh !important;
  background-color: #323647;
}
.grow {
  transition: all 0.2s ease-in-out;
}
.grow:hover {
  transform: scale(1.03);
  box-shadow: 1px 1px 5px 5px #ffc159;
}
.icon {
  height: 45px;
}

.iconscard {
  background-color: #272a38;
  box-shadow: 1px 1px 3px 3px #ffc159;
  width: 61px;
}
.rest {
  padding-top: 11px;
  padding-bottom: 11px;
}
.aboutme {
  margin-top: 4vh;
  background-color: #323647;
  width: 90%;
  // height: 45vh;
}
.textabout {
  letter-spacing: 0.6px;
  font-size: 2vh;
}
@media only screen and (max-width: 500px) {
  .iconscard {
    width: 40px;
    height: 40px;
  }
  .icon {
    height: 30px;
  }
  .aboutcomponent {
    // height: 170vh;
  }
  .experienced {
    width: 90%;
  }
  .aboutme {
    margin-top: 4vh;
    background-color: #323647;
    width: 90%;
    height: 115vh;
  }
  .js {
    padding-top: 4px !important;
  }
  .csharp {
    padding-top: 5px !important;
  }
}
@media only screen and (max-width: 1000px) and (min-width: 501px) {
  .aboutcomponent {
    height: 120vh;
  }
  .experienced {
    width: 90%;
    // height: 48vh;
  }
  .aboutme {
    margin-top: 4vh;
    background-color: #323647;
    width: 90%;
    // height: 63vh;
  }
}
</style>