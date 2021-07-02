<template>
  <div id="app">
    <h1>PRUEBA TRUCKING v03.4</h1>
    <section>
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 1366 768" style="enable-background:new 0 0 1366 768;" xml:space="preserve">
        <path id="path" class="st0" d="M166.5,556.5c0,0,327,42,448-40s143-139,103-200s-17-102,58-104s223,41,294,19s93-52,99-64"/>
        <g id="rect">
          <circle r="10" />
        </g>
      </svg>
      <!-- <div id="pathID"></div> -->
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

gsap.registerPlugin(MotionPathPlugin);

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {
    this.$socket.on('tracking', data => {
      gsap.to("#rect", {
        duration: 100,
        motionPath: {
            path: "M166.5,556.5c0,0,327,42,448-40s143-139,103-200s-17-102,58-104s223,41,294,19s93-52,99-64",
            align: "#path",
            alignOrigin: [0.5, 0.5],
            start: data[0],
            end: data[1]
          },
          ease: "none",
        }
      )
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import url('https://fonts.googleapis.com/css?family=Signika+Negative:300,400&display=swap');

body { 
  font-family: "Signika Negative", sans-serif; 
  font-weight: 300;
  margin: 0;
  padding: 0 20px;
}

.st0{fill:none;stroke:#000000;stroke-miterlimit:10;}

#rect {
  width: 20px;
  background-color: rgb(38, 37, 128);
  color: rgb(38, 37, 128);
  border-radius: 10%;
}
</style>
