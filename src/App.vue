<template>
  <div class="page-container md-layout-row">
    <md-app>
      <md-app-toolbar>
        <md-button class="md-icon-button" @click="showNavigation = !showNavigation">
          <md-icon>menu</md-icon>
        </md-button>
        <div class="md-toolbar-section-end">
          <router-link to="home">
            <md-button :md-ripple="false">Home</md-button>
          </router-link>
          <router-link to="resume">
            <md-button :md-ripple="false">Resume</md-button>
          </router-link>
          <router-link to="contact">
            <md-button :md-ripple="false">Contact</md-button>
          </router-link>
        </div>
      </md-app-toolbar>
      <md-app-drawer md-permanent="clipped" :md-active.sync="showNavigation">
        <div class="viewport">
          <md-card>
            <md-card-media-cover md-solid>
              <md-card-media md-ratio="4:3">
                <img src="./assets/me.jpg" alt="Profile">
              </md-card-media>
              <md-card-area>
                <md-card-header>
                  <span class="md-title">Joseph Dias</span>
                </md-card-header>
              </md-card-area>
            </md-card-media-cover>
          </md-card>

          <md-list class="md-double-line">
            <md-subheader>About Me</md-subheader>
            <md-list-item>
              <div>
                <ul class="about-me">
                  <li>A strong interest in learning new technologies and an eye for detail.</li>
                  <li>Good project management skills. Innovative thinking.</li>
                  <li>Good problem solving capabilities.</li>
                  <li>Be sharp and Patience in understanding the problems and issues.</li>
                  <li>Understand software applications.</li>
                  <li>A positive “can do” attitude to overcoming issues</li>
                </ul>
              </div>
            </md-list-item>

            <md-divider></md-divider>
            <md-subheader>Phone</md-subheader>

            <md-list-item>
              <md-icon class="md-primary">phone</md-icon>
              <div class="md-list-item-text">
                <span>+91 9420776309</span>
                <span>Mobile</span>
              </div>
            </md-list-item>

            <md-divider></md-divider>
            <md-subheader>Email</md-subheader>

            <md-list-item>
              <md-icon class="md-primary">email</md-icon>

              <div class="md-list-item-text">
                <a
                  href="mailto:josephdias92@gmail.com?subject = Hello Joseph"
                >josephdias92@gmail.com</a>
                <span>Personal</span>
              </div>
            </md-list-item>

            <md-list-item class="md-inset">
              <div class="md-list-item-text">
                <a
                  href="mailto:joseph_dias@persistent.com?subject = Hello Joseph"
                >joseph_dias@persistent.com</a>
                <span>Work</span>
              </div>
            </md-list-item>
            <md-divider></md-divider>
            <md-subheader>Professional Skills</md-subheader>

            <md-list-item>
              <md-icon class="md-primary">calendar_today</md-icon>

              <div class="md-list-item-text">
                <md-progress-bar md-mode="determinate" :md-value="90"></md-progress-bar>
                <span>HTML</span>
              </div>
            </md-list-item>

            <md-list-item class="md-inset">
              <div class="md-list-item-text">
                <md-progress-bar md-mode="determinate" :md-value="80"></md-progress-bar>
                <span>CSS</span>
              </div>
            </md-list-item>
            <md-list-item class="md-inset">
              <div class="md-list-item-text">
                <md-progress-bar md-mode="determinate" :md-value="90"></md-progress-bar>
                <span>JavaScript</span>
              </div>
            </md-list-item>
            <md-list-item class="md-inset">
              <div class="md-list-item-text">
                <md-progress-bar md-mode="determinate" :md-value="80"></md-progress-bar>
                <span>NodeJS</span>
              </div>
            </md-list-item>
            <md-list-item class="md-inset">
              <div class="md-list-item-text">
                <md-progress-bar md-mode="determinate" :md-value="80"></md-progress-bar>
                <span>Angular</span>
              </div>
            </md-list-item>
          </md-list>
        </div>
      </md-app-drawer>
      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<style scoped lang="scss">
.md-app {
  border: 1px solid rgba(#000, 0.12);
  min-height: 100vh;
}
.md-drawer {
  width: 300px;
  max-width: calc(100vw - 125px);
}
.about-me {
  display: inline-block;
  width: 100%;
  list-style: disc;
  padding-left: 20px;
  li {
    white-space: normal;
  }
}
</style>
<script>
export default {
  data: () => ({
    showNavigation: false
  })
};
</script>
