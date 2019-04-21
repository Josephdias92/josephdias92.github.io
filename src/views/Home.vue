<template>
  <div class="home">
    <div class="flex-container">
      <md-card class="md-primary quotes-card"
        md-theme="yellow-card" md-with-hover>
        <md-ripple>
          <md-card-header>
            <div class="md-title">Favorite Quotes</div>
          </md-card-header>
          <md-card-content>
            <ul>
              <li>“Talk is cheap. Show me the code.” ~ Linus Torvalds</li>
            </ul>
          </md-card-content>
        </md-ripple>
      </md-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~vue-material/dist/theme/engine";

  @include md-register-theme("yellow-card", (
    primary: md-get-palette-color(yellow, 500)
  ));

  @import "~vue-material/dist/base/theme";
  @import "~vue-material/dist/components/MdCard/theme";
  .flex-container {
    display: flex;
  }

  .home {
    position: relative;
  }

  .quotes-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
