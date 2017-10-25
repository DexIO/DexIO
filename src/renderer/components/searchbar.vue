<template lang="html">
  <div class="searchbox">
    <svg xmlns="http://www.w3.org/2000/svg" style="display:none">
      <symbol xmlns="http://www.w3.org/2000/svg" id="sbx-icon-search-4" viewBox="0 0 40 41">
        <path d="M25.54 28.188c-2.686 2.115-6.075 3.376-9.758 3.376C7.066 31.564 0 24.498 0 15.782 0 7.066 7.066 0 15.782 0c8.716 0 15.782 7.066 15.782 15.782 0 4.22-1.656 8.052-4.353 10.884l1.752 1.75 1.06-1.06L40 37.332l-3.72 3.72-9.977-9.976 1.062-1.062-1.826-1.826zm-9.758.746c7.264 0 13.152-5.888 13.152-13.152 0-7.263-5.888-13.152-13.152-13.152C8.52 2.63 2.63 8.52 2.63 15.782c0 7.264 5.89 13.152 13.152 13.152z"
        fill-rule="evenodd" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="sbx-icon-clear-5" viewBox="0 0 20 20">
        <path d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zm1.35-10.123l3.567 3.568-1.225 1.226-3.57-3.568-3.567 3.57-1.226-1.227 3.568-3.568-3.57-3.57 1.227-1.224 3.568 3.568 3.57-3.567 1.224 1.225-3.568 3.57zM10 18.272c4.568 0 8.272-3.704 8.272-8.272S14.568 1.728 10 1.728 1.728 5.432 1.728 10 5.432 18.272 10 18.272z"
        fill-rule="evenodd" />
      </symbol>
    </svg>

    <form novalidate="novalidate" onsubmit="return false;" class="searchbox sbx-custom">
      <div role="search" class="sbx-custom__wrapper">
        <input type="search" name="search" placeholder="Buscar..." autocomplete="off" required="required" class="sbx-custom__input">
        <button type="submit" title="Submit your search query." class="sbx-custom__submit">
          <svg role="img" aria-label="Search">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-search-4"></use>
          </svg>
        </button>
        <button type="reset" title="Clear the search query." class="sbx-custom__reset">
          <svg role="img" aria-label="Reset">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-clear-5"></use>
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.searchbox{
  width: 28%;
  margin-right: 35px;
  margin-top: -30px;
  float: right;
}
.sbx-custom {
  display: inline-block;
  position: relative;
  width: 125%;
  height: 61px;
  font-size: 24px;
}

.sbx-custom__input {
  text-indent: 30px;
  font-family: 'Fira Sans';
  display: inline-block;
  -webkit-transition: box-shadow .4s ease, background .4s ease;
  transition: box-shadow .4s ease, background .4s ease;
  border: 0;
  background: #FFFFFF;
  border-radius: 50px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.25);
  width: 100%;
  height: 60px;
  vertical-align: middle;
  white-space: normal;
  text-align: left;
  font-size: inherit;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

.sbx-custom__input::-webkit-search-decoration, .sbx-custom__input::-webkit-search-cancel-button, .sbx-custom__input::-webkit-search-results-button, .sbx-custom__input::-webkit-search-results-decoration {
  display: none;
}

.sbx-custom__input:hover {
}

.sbx-custom__input:focus, .sbx-custom__input:active {
  outline: 0;
}

.sbx-custom__input::-webkit-input-placeholder {
  color: #C2C2C2;
}

.sbx-custom__input::-moz-placeholder {
  color: #C2C2C2;
}

.sbx-custom__input:-ms-input-placeholder {
  color: #C2C2C2;
}

.sbx-custom__input::placeholder {
  color: #C2C2C2;
}

.sbx-custom__submit {
  position: absolute;
  top: 0;
  right: 0;
  left: inherit;
  margin: 0;
  border: 0;
  background-color: #ee4466;
  padding: 0;
  width: 60px;
  height: 100%;
  background: #EE4466;
  border-radius: 50%;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.25);
  text-align: center;
  font-size: inherit;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.sbx-custom__submit::before {
  display: inline-block;
  margin-right: -4px;
  height: 100%;
  vertical-align: middle;
  content: '';
}

.sbx-custom__submit:hover, .sbx-custom__submit:active {
  cursor: pointer;
}

.sbx-custom__submit:focus {
  outline: 0;
}

.sbx-custom__submit svg {
  width: 31px;
  height: 31px;
  vertical-align: middle;
  fill: #FFFFFF;
}

.sbx-custom__reset {
  display: none;
  position: absolute;
  top: 14px;
  right: 86px;
  margin: 0;
  border: 0;
  background: none;
  cursor: pointer;
  padding: 0;
  font-size: inherit;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  fill: rgba(0, 0, 0, 0.5);
}

.sbx-custom__reset:focus {
  outline: 0;
}

.sbx-custom__reset svg {
  display: block;
  margin: 4px;
  width: 25px;
  height: 25px;
}

.sbx-custom__input:valid ~ .sbx-custom__reset {
  display: block;
  -webkit-animation-name: sbx-reset-in;
          animation-name: sbx-reset-in;
  -webkit-animation-duration: .15s;
          animation-duration: .15s;
}

@-webkit-keyframes sbx-reset-in {
  0% {
    -webkit-transform: translate3d(-20%, 0, 0);
            transform: translate3d(-20%, 0, 0);
    opacity: 0;
  }
  100% {
    -webkit-transform: none;
            transform: none;
    opacity: 1;
  }
}

@keyframes sbx-reset-in {
  0% {
    -webkit-transform: translate3d(-20%, 0, 0);
            transform: translate3d(-20%, 0, 0);
    opacity: 0;
  }
  100% {
    -webkit-transform: none;
            transform: none;
    opacity: 1;
  }
}

</style>
