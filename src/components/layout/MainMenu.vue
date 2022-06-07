<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { MDBListGroup, MDBListGroupItem, MDBModal, MDBModalHeader, MDBModalBody, MDBBtn } from "mdb-vue-ui-kit";
</script>

<template>
  <m-d-b-btn aria-controls="showNavigation" @click="showNavigation=true"> <font-awesome-icon icon="list" /> </m-d-b-btn>
  <div class="menu">
    <m-d-b-modal id="showNavigation" tabindex="-1" labelledby="showNavigation" class="col-md-6 sidebary modal-side modal-top-left" v-model="showNavigation">
      <m-d-b-modal-header>Menu</m-d-b-modal-header>
      <m-d-b-modal-body>
        <m-d-b-list-group flush>
          <m-d-b-list-group-item :class="'d-flex list-group-item'" @click="closeNavigation()">
            <menu-icon :icon-name="'list'"></menu-icon>
            <RouterLink to="/">Home</RouterLink>
          </m-d-b-list-group-item>
          <!--m-d-b-list-group-item @click="closeNavigation()">
            <font-awesome-icon icon="chess-pawn" />
            <RouterLink to="/word">Fingeralphabet</RouterLink>
          </m-d-b-list-group-item-->
          <m-d-b-list-group-item :class="'d-flex list-group-item'" @click="closeNavigation()">
            <menu-icon :icon-name="'chess-pawn'"></menu-icon>
            <RouterLink to="/about">Über uns</RouterLink>
          </m-d-b-list-group-item>
          <!--m-d-b-list-group-item :class="'d-flex list-group-item'" @click="closeNavigation()">
            <menu-icon :icon-name="'close'"></menu-icon>
            <RouterLink to="/">Close</RouterLink>
          </m-d-b-list-group-item-->
        </m-d-b-list-group>
      </m-d-b-modal-body>
    </m-d-b-modal>
  </div>
</template>

<script>
import MenuIcon from "./MenuIcon";
export default {
  name: "MainMenu",
  components: { MenuIcon },
  data: () => ({
    'showNavigation': false
  }),
  methods: {
    closeNavigation()   {
      this.showNavigation = false;
    }
  }
}
</script>

<style scoped>
.sidebary .modal-dialog {margin:0;}
.sidebary .modal-content {border-radius: 0;height:100vh;}
.sidebary.modal-side.modal-top-left > div { position:fixed; top:0; left:0; width:100%; max-width:300px;}
</style>
