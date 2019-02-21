<template>
        <div class="login-box ">
                <div class="login-logo">
                  <a href="#"><b>教学</b>后台</a>
                </div>
                <!-- /.login-logo -->
                <div class="login-box-body">
                  <p class="login-box-msg">登入系统</p>
            
                  <form>
                    <div class="form-group has-feedback">
                      <input name="username" type="text" class="form-control" placeholder="用户名">
                      <span class="glyphicon glyphicon-user form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                      <input name="password" type="password" class="form-control" placeholder="密码">
                      <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>
                    <div class="row">
                      <div class="col-xs-8">
                        <a href="#">忘记密码？</a><br>
                        <a @click='m1()' class="text-center">去注册一个新用户</a>
                      </div>
                      <!-- /.col -->
                      <div class="col-xs-4">
                        <button type="submit" class="btn btn-primary btn-block btn-flat">登 录</button>
                      </div>
                      <!-- /.col -->
                    </div>
                  </form>
                </div>
                <!-- /.login-box-body -->
              </div>
</template>

<script>
    import '../assets/jquery/dist/jquery.min.js';
    export default {
        name: 'Login',
        methods: {
            m1() {
                this.$router.push('/register')
            }
        },
        mounted() {
            var is = this;
            // console.log(is.$store.state.logged);
            // console.log(this.$store.state.logged)
            $('body').addClass('hold-transition login-page');
            $('form').on('submit', function(e) {
                e.preventDefault();
                $.ajax({
                    url: '/api/login',
                    method: 'post',
                    data: $(this).serialize(),
                    success: function(res) {
                        alert(res.msg);
                        if (res.state == 200) {
                            // console.log(is.$store.state.logged);
                            is.$store.commit("toggleLogged");
                            is.$store.commit("setUserInfo", res.username);
                            // console.log(is.$store.state.logged);
                            // location = '/';
                            is.$router.push('/')
                        }
                    }
                })
            })
        },

        beforeDestroy() {
            $('body').removeClass('hold-transition').removeClass('login-page')
        }
    };
</script>