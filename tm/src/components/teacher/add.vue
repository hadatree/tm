<template>
    <div>   
            <Header :username='username'/>
            <Asider :username='username'/>
            <div class="content-wrapper" style="min-height: 538px;">
                <Breadcrumbs  :titles="titles" />
                <section class="content">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="box">
                          <div class="box-header with-border">
                            <h3 class="box-title">讲师添加</h3>
                          </div>
                          <!-- /.box-header -->
                          <form class="form-horizontal">
                            <div class="box-body">
                              <div class="form-group">
                                <label for="avatar" class="col-sm-1 control-label">
                                  头像
                                </label>
                                <div class="col-sm-10">
                                  <input
                                    type="file"
                                    class="form-control"
                                    id="avatar"
                                    name="avatar"
                                   
                                  />
                                  <div>
                                    <img
                                      id="avatarPreview"
                                      width="32"
                                      height="32"
                                      src=""
                                      alt="avatar priview"
                                      style="display: none"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <label for="name" class="col-sm-1 control-label">
                                  姓名
                                </label>
                                <div class="col-sm-10">
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="讲师姓名"
                                    required
                                  />
                                </div>
                              </div>
                              <div class="form-group">
                                <label for="age" class="col-sm-1 control-label">
                                  年龄
                                </label>
                                <div class="col-sm-10">
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="age"
                                    name="age"
                                    placeholder="讲师年龄"
                                  />
                                </div>
                              </div>
                              <div class="form-group">
                                <label for="sex" class="col-sm-1 control-label">
                                  性别
                                </label>
                                <div class="col-sm-10">
                                  <select id="gender" name="gender" class="form-control">
                                    <option value="1">男</option>
                                    <option value="0">女</option>
                                  </select>
                                </div>
                              </div>
                              <div class="form-group">
                                <label for="teachAge" class="col-sm-1 control-label">
                                  教龄
                                </label>
                                <div class="col-sm-10">
                                  <div class="input-group">
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="teachAge"
                                      name="teachAge"
                                      placeholder="教学经验"
                                    />
                                    <div class="input-group-addon">年</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- /.box-body -->
                            <div class="box-footer">
                              <div class="col-sm-11">
                                <button type="submit" class="btn btn-info pull-right" >
                                  添加
                                </button>
                              </div>
                            </div>
                            <!-- /.box-footer -->
                          </form>
                        </div>
                        <!-- /.box -->
                      </div>
                    </div>
                  </section>


               
            </div>
            <Footer />
    </div>
    
</template>
<script>
    import Header from "../layout/Header";
    import Footer from "../layout/Footer";
    import Asider from "../layout/Asider";
    import Breadcrumbs from "../layout/Breadcrumbs"
    import axios from "axios"
    export default {
        name: 'TeacherAdd',
        data() {
            return {
                titles: {
                    main: '讲师管理',
                    sub: '讲师添加'
                },
                data: [],
                username: this.$store.state.userInfo
            }
        },
        methods: {

            m2() {
                this.$router.push('/teacher/list')
            }
        },
        components: {
            Header,
            Footer,
            Asider,
            Breadcrumbs
        },
        mounted() {
            $("#teacher").addClass('active');
            $("#avatar").on("change", function(e) {
                // 获取选中上传的文件
                var file = e.target.files[0];
                // 创建一个FileReader实例
                var reader = new FileReader();
                // 注册load事件，文件读取完毕后会触发
                reader.onload = function(event) {
                    // 通过event.target.result获取读取的结果
                    $("#avatarPreview")
                        .attr("src", event.target.result)
                        .css({
                            display: "block"
                        });
                };
                // 以dataUrl形式 读取文件
                reader.readAsDataURL(file);
            });
            $("form").on("submit", e => {
                e.preventDefault();
                var data = new FormData(e.target);
                console.log(data.get('avatar'))
                axios
                    .post("/api/teacher/add", data, {
                        header: {
                            "Content-Type": "multipart/form-data"
                        }
                    })
                    .then(res => {
                        alert(res.data.msg);
                        if (res.data.state == 200) {
                            this.$router.push('/teacher/list')
                        }
                    });
            })
        }
    }
</script>