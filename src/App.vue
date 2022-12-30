<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from '@/components/HelloWorld.vue'
// import MainMenu from "./components/layout/MainMenu";
</script>

<template>
  <div class="wrappy">
    <header>
      <img src="/logo.png">
      <div class="position-absolute top-0 end-0">
        <main-menu></main-menu>
      </div>
    </header>
    <div class="d-grid">
      <div class="wrapper">
        <!--HelloWorld msg="You did it!" /-->
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script>
// import MainMenu from "@/components/layout/MainMenu.vue";
import MainMenu from "./components/layout/MainMenu";

export default {
  name: 'App',
  components:[MainMenu],
  data:() => ({
    showNavigation: false
  })
}
</script>

<style>
@import '@/assets/base.css';

.wrappy {width:100%;}

.sidebary .modal-dialog {margin:0;}
.sidebary .modal-content {border-radius: 0;height:100vh;}
.sidebary.modal-side.modal-top-left > div {
  position:fixed;
  top:0;
  left:0;
  width:100%;
  max-width:300px;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  width:100%;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    /*display: flex;
    place-items: center;*/
  }

  #app {
    /*display: grid;
    grid-template-columns: 1fr 1fr;*/
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
