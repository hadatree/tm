<template>
    <div class="register-box">
        <div class="register-logo">
          <a href="#"><b>教学</b>后台</a>
        </div>
    
        <div class="register-box-body">
          <p class="login-box-msg">注册新用户</p>
    
          <form>
            <div class="form-group has-feedback">
              <input name="username" type="text" class="form-control" placeholder="用户名" required />
              <span class="glyphicon glyphicon-user form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
              <input type="email" class="form-control" placeholder="邮箱" name="email" required />
              <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
              <input type="password" class="form-control" placeholder="密码" name="password" required />
              <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
              <input type="password" class="form-control" placeholder="确认密码" name="repasswd" required />
              <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
            </div>
            <div class="row">
              <div class="col-xs-8">
                <a @click='m1()' class="text-center">我已经注册了一个用户</a>
              </div>
              <!-- /.col -->
              <div class="col-xs-4">
                <button type="submit"  class="btn btn-primary btn-block btn-flat">注册</button>
              </div>
              <!-- /.col -->
            </div>
          </form>
        </div>
        <!-- /.form-box -->
      </div>
</template>

<script>
    import '../assets/jquery/dist/jquery.min.js';
    import axios from 'axios';

    export default {
        name: 'Register',
        methods: {
            m1() {
                this.$router.push('/login')
            }
        },
        mounted() {
            var self = this;
            $('body').addClass('hold-transition login-page');
            $('form').on('submit', function(e) {
                console.log(e)
                e.preventDefault()
                $.ajax({
                    url: '/api/register',
                    method: 'post',
                    data: $(this).serialize(),
                    success: function(res) {
                        alert(res.msg)

                        switch (res.state) {
                            case 101:
                                $('input[name=username]').val('').focus()
                                break;
                            case 101:
                                $('input[name=username]').val('').focus()
                                break;
                            case 102:
                                $('input[name=email]').val('').focus()
                                break
                            case 103:
                                $('input[name=repasswd]').val('').focus()
                                break
                            case 200:
                                self.$router.push('/login')
                                break;
                        }
                    }
                })

                // axios({
                //         url: "/api/register",
                //         method: "post",
                //         headers: {
                //             // 设置请求头
                //             "Content-Type": "multipart/form-data"
                //         },
                //         data: new FormData(this)
                //     })
                //     // 通过then方法中的回调函数 获取 服务端 响应
                //     .then(function({
                //         data
                //     }) {
                //         alert(data.msg);
                //         if (data.state == 200) {
                //             location = "/teacher/list";
                //         }
                //     })
                //     .catch(function(err) {
                //         console.log(err);
                //     });
            })
        },
        beforeDestroy() {
            $('body').removeClass('hold-transition').removeClass('login-page')
        }
    }
</script>