<template>
  <nav class="navbar navbar-expand-lg  navbar-light navbar-ethgrid">
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="navbar-brand" href="#">
            <!-- put you logo here -->
            <i class="fas fa-th d-inline-block text-danger"></i>
            <!-- <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" height="30" alt="ETH grid"  class="d-inline-block align-top"> -->
            Site name
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Menu</a>
        </li>
      </ul>
    </div>
    <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
      <li class="nav-item">
        <a class="nav-link" href="#">Right Nav</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import {EventBus} from './EventBus.js';
export default{
  mounted(){
    console.log('Header mounted.');
  },
  data(){
    return {
    }
  },
  methods: {
  }
};
</script>
