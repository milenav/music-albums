<template>
  <div class="container">
    <div class="row">
      <div class="col md-6 mx-auto">
        <div class="notfound">
          <div class="not-found">
            <div class="notfound-404">
              <h1 class="h1-responsive font-weight-bold text-center orange-text">
                4
                <span>
                  <img
                    src="https://www.konfest.com/wp-content/uploads/2019/05/Konfest-PNG-JPG-Image-Pic-Photo-Free-Download-Royalty-Unlimited-clip-art-sticker-Emoji-Emoticons-Smileys-Yellow-42.png"
                    class="w-75 mt-5 mx-auto d-block"
                    alt="Not found"
                  />
                </span>
                4
              </h1>
            </div>
            <h2 class="h2-responsive font-weight-bold text-center">Oops! Page Not Be Found</h2>
            <p
              class="text-center w-responsive mx-auto my-2"
            >Sorry but the page you are looking for does not exist, have been removed.</p>
            <router-link to="/">
              <button class="white-text">Back to Homepage</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.notfound {
  position: relative;
  height: 100vh;
}

span {
  position: relative;
}

.notfound .not-found {
  position: absolute;
  left: 50%;
  top: 30%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.not-found {
  width: 100%;
  text-align: center;
  line-height: 1.4;
}

.not-found .notfound-404 h1 {
  font-size: 146px;
  font-weight: 700;
  margin: 0px;
}

.not-found .notfound-404 h1 > span {
  display: inline-block;
  width: 150px;
  height: 150px;
  background-size: cover;
  -webkit-transform: scale(1.4);
  -ms-transform: scale(1.4);
  transform: scale(1.4);
  z-index: -1;
}

.not-found h2 {
  font-size: 22px;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  color: #232323;
}

.not-found p {
  color: #787878;
  font-weight: 300;
}

@media only screen and (max-width: 420px) {
  .not-found .notfound-404 {
    height: 115px;
  }
  .notfound .notfound-404 h1 {
    font-size: 86px;
  }
  .not-found .notfound-404 h1 > span {
    width: 86px;
    height: 86px;
  }
}
</style>