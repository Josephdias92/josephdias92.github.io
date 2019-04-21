<template>
  <div class="resume-card">
    <md-card>
      <md-card-header>
        <md-icon class="md-primary">{{data.experience.cardIcon}}</md-icon>
        <span class="md-title">{{data.experience.cardTitle}}</span>
      </md-card-header>
      <md-card-content>
        <div :key="index" v-for="(card, index) in data.experience.data">
          <div>
            <div style="company">
              <div>
                <div class="md-subheading">
                  {{card.position}}
                  <a target="_blank" :href="card.companyUrl">@{{card.companyName}}</a>
                </div>
                <div class="md-caption term">{{card.term}}</div>
              </div>
              <ul class="roles-and-responsibilities">
                <li
                  :key="respIndex"
                  v-for="(responsibility, respIndex) in card.responsibilities"
                >{{responsibility}}</li>
              </ul>
            </div>
          </div>
          <hr>
        </div>
      </md-card-content>
    </md-card>
    <md-card>
      <md-card-header>
        <md-icon class="md-primary">{{data.education.cardIcon}}</md-icon>
        <span class="md-title">{{data.education.cardTitle}}</span>
      </md-card-header>
      <md-card-content>
        <div :key="index" v-for="(card, index) in data.education.data">
          <div>
            <div style="company">
              <div>
                <div class="md-subheading">
                  {{card.courseName}}
                  <a target="_blank" :href="card.instituteUrl">@{{card.instituteName}}</a>
                </div>
                <div class="md-caption term">{{card.term}}</div>
              </div>
              <ul class="roles-and-responsibilities">
                <li
                  :key="respIndex"
                  v-for="(responsibility, respIndex) in card.responsibilities"
                >{{responsibility}}</li>
              </ul>
            </div>
          </div>

          <hr/>
        </div>
      </md-card-content>
    </md-card>
    <md-card class="hobbies">
      <md-card-header>
        <md-icon class="md-primary">{{data.hobbies.cardIcon}}</md-icon>
        <span class="md-title">{{data.hobbies.cardTitle}}</span>
      </md-card-header>
      <md-card-content class="hobbies-data">
        <div class="item" :key="index" v-for="(card, index) in data.hobbies.data">
          <md-icon class="md-primary">{{card.icon}}</md-icon>
          <div>{{card.title}}</div>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>
<style scoped lang="scss">
hr {
  border-style: unset;
  margin: 10px 0;
  border: 1px solid #eee;
}
.md-card {
  margin-bottom: 20px;
  vertical-align: top;
}
.roles-and-responsibilities {
  list-style: disc;
  margin-top: 20px;
  width: 100%;
}
.roles-and-responsibilities li {
  white-space: normal;
}
.term {
  color: #5da4d9 !important;
  font-weight: bold;
}
.company {
  width: 100%;
  display: inline-block;
  color: gray;
}
.resume-card {
  .md-card-header .md-title {
    margin-left: 10px;
  }
}
.hobbies {
  .hobbies-data {
    display: flex;
    .item {
      display: flex;
      flex-direction: column;
      padding: 10px;
    }
  }
}
</style>
<script>
import data from "../assets/data.json";
export default {
  data() {
    return {
      data: data
    };
  }
};
</script>
