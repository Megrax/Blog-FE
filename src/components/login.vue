<template>
  <div class="wrapper">
    <form action="/index" method="post" id="loginForm">
      <div class="loginBox">
        <div class="loginBoxCenter">
          <p><label for="username">用户名：</label></p>
          <p>
            <input
              v-model="uname"
              type="text"
              id="username"
              name="text"
              class="loginInput"
              autocomplete="off"
              placeholder="请输入用户名"
              value=""
            />
          </p>
          <p><label for="password">密码：</label></p>
          <p>
            <input
              v-model="pwd"
              @keyup.enter="login"
              type="password"
              id="password"
              name="password"
              class="loginInput"
              placeholder="请输入密码"
              value=""
            />
          </p>
          <p><a class="forgetLink" href="#">忘记密码?</a></p>
          <input id="remember" type="checkbox" name="remember" />
          <label for="remember">记住登录状态</label>
        </div>
        <div class="loginBoxButtons">
          <input type="button" class="loginBtn" @click="login()" value="登录" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uname: '',
      pwd: '',
      actualPwd: 'qqqqq',
    }
  },
  methods: {
    login: function () {
      if (this.pwd === this.actualPwd) {
        this.$cookies.set('login', 'sudatyf867ewq9819312ut78y482rhiueh8fgd7yf8q4r9');
        this.$router.push({ path: '/blog' }).catch(() => { });
      } else {
        alert('用户名或密码有误！');
      }
    }
  },
  created: function () {
    if (this.$cookies.isKey('login')) {
      this.$router.push({ path: '/blog' }).catch(() => { });
    }
  }
}
</script>

<style scoped>
::-webkit-input-placeholder {
  color: #ccc;
}
:-moz-placeholder {
  /* Firefox 18- */
  color: #ccc;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: #ccc;
}
:-ms-input-placeholder {
  color: #ccc;
}

button,
input,
textarea {
  font-family: NotoSerifSC-Regular, Microsoft YaHei, Helvetica, Heiti SC, tahoma,
    arial, Hiragino Sans GB, '\5B8B\4F53', sans-serif;
  border: 0;
  outline: none;
}

html {
  background-color: #fff;
}

.wrapper {
  margin: 160px auto;
  width: 884px;
}

.loginBox {
  background-color: #fff;
  /*上divcolor*/
  border: 1px solid #bfd6e1;
  border-radius: 10px;
  color: #444;
  font-size: 14px;
  margin: 0 auto;
  width: 388px;
}

.loginBox:hover {
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.3);
  transition: all, 1s;
}

.loginBox .loginBoxCenter {
  border-bottom: 1px solid #dde0e8;
  padding: 24px;
}

.loginBox .loginBoxCenter p {
  margin-bottom: 10px;
}

.loginBox .loginBoxButtons {
  /*下divcolor*/
  border-top: 0px solid #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  line-height: 28px;
  overflow: hidden;
  padding: 20px 24px;
  vertical-align: center;
  filter: alpha(Opacity=80);
  -moz-opacity: 0.5;
  opacity: 0.5;
}

.loginBox .loginInput {
  border: 1px solid #d2d9dc;
  border-radius: 2px;
  color: #444;
  font-size: 12px;
  padding: 8px 14px;
  margin-bottom: 8px;
  width: 310px;
  outline: none;
  border-radius: 10px;
}

.loginBox .loginInput:focus {
  border: 1px solid orange;
}

.loginBox .loginBtn {
  width: 131px;
  background-image: -moz-linear-gradient(to bottom, blue, #ccc);
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: inset rgba(255, 255, 255, 0.6) 0 1px 1px,
    rgba(0, 0, 0, 0.1) 0 1px 1px;
  color: #444;
  cursor: pointer;
  float: right;
  font: bold 14px 'NotoSerifSC-Regular';
  padding: 10px 50px;
}

.loginBox .loginBtn:hover {
  background-image: -moz-linear-gradient(to top, blue, #ccc);
  color: #000;
}

.loginBox a.forgetLink {
  color: #ababab;
  cursor: pointer;
  float: right;
  font: 11px/20px 'NotoSerifSC-Regular';
  text-decoration: none;
  vertical-align: middle;
}

.loginBox a.forgetLink:hover {
  color: #000000;
  text-decoration: none;
}

.loginBox input#remember {
  vertical-align: middle;
}

.loginBox label[for='remember'] {
  font: 11px 'NotoSerifSC-Regular';
}
</style>