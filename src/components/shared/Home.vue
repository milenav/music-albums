<template>
<section> 
  <div class="quote"> 
    <cite>
      There is music in the air, music all around us. 
      The world is full of it, and you simply take as much as you require.
    </cite>
    <router-link id="dex-sign" class="play" to="https://github.com/milenav" target="_blank"></router-link>
  </div>
  <div class="quote-music">
    <img
        class="mx-auto d-block img-fluid mt-5"
        src="http://www.pngonly.com/wp-content/uploads/2017/06/Music-Headphone-PNG.png"
        alt="Music"
    />
      </div>
</section>

</template>

<script>
export default {

};
</script>

<style scoped>

#dex-sign {
  display: inline-block;
  margin: 30px 10px 15px 10px;
  width: 255px;
  height: 84px;
  background: url(http://drygiel.com/projects/sign/frames.png) no-repeat;
}
#dex-sign.white {
  background-image: url(http://drygiel.com/projects/sign/frames-255-white.png);
}
#dex-sign.play {
  -moz-animation: sign-anim 3.5s 0.2s steps(85) forwards;
  -o-animation: sign-anim 3.5s 0.2s steps(85) forwards;
  -webkit-animation: sign-anim 3.5s 0.2s steps(85) forwards;
  animation: sign-anim 3.5s 0.2s steps(85) forwards;
}
a #dex-sign:hover {
  -webkit-filter: invert(30%) brightness(80%) sepia(100%) contrast(110%) saturate(953%) hue-rotate(165deg);
}
@-webkit-keyframes sign-anim {
  to {
    background-position: 0 -7140px;
  }
}
@-moz-keyframes sign-anim {
  to {
    background-position: 0 -7140px;
  }
}
@keyframes sign-anim {
  to {
    background-position: 0 -7140px;
  }
}
* {
  margin: 0;
  padding: 0;
}
body,
html {
  font-size: 1em;
  color: #2C2C2C;
  height: 100%;
  font-family: 'Raleway', sans-serif;
}
::selection {
  background: white;
}
::-moz-selection {
  background: white;
}
section {
  height: 100%;
  min-height: 335px;
  background-color: #FFF;
  text-align: center;
}
section:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  min-height: 335px;
  pointer-events: none;
  opacity: 0.3;
}

section .quote {
  position: absolute;
  left: 25%;
  right: 25%;
  top: 10%;
  padding: 0px 0 15px 0;
}

section .quote-music {
  position: absolute;
  left: 25%;
  right: 25%;
  top: 20%;
  padding: 100px 0 15px 0;
}

section .quote cite {
  color: #444;
  font-family: "Hoefler Text", Georgia, Garamond, Times, serif;
  letter-spacing: 0.1em;
  text-align: center;
  line-height: 110%;
  font-size: 1.7em;
  font-variant: small-caps;
}
section .quote cite:before {
  content: '’’';
  position: absolute;
  left: -100px;
  top: 100px;
  width: 100%;
  height: 100%;
  pointer-events: none;
  font-size: 8em;
  text-align: left;
  font-family: Arial;
  letter-spacing: -16px;
  font-style: normal;
  font-weight: bold;
  color: #7b9ab9;
}
section .quote #dex-sign {
  position: absolute;
  bottom: -125px;
  right: 0;
}
footer {
  background-color: #2C2C2C;
  color: #8A8A8A;
  padding: 25px;
  text-align: center;
}
footer a {
  text-decoration: none;
  color: #4384E6;
}
footer a:hover {
  color: white;
}
</style>
