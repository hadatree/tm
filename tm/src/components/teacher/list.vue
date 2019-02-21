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
                                    <h3 class="box-title">讲师列表</h3>
                                  </div>
                                  <!-- /.box-header -->
                                  <div class="box-body">
                                    <table id="list" class="table table-bordered table-striped">
                                      <thead>
                                        <tr>
                                          <th style="width: 80px">序号</th>
                                          <th>头像</th>
                                          <th >姓名</th>
                                          <th>年龄</th>
                                          <th>性别</th>
                                          <th>教学经验</th>
                                          <th style="width: 100px">操作</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <!-- 定义视图显示模板 -->
                                        <tr v-show="!data">
                                                <td colspan="7" style="color:red;text-align: center;font-weight: bold">无内容</td>
                                        </tr>
                                            <tr v-for="(t,i) in data" :key="i">
                                                <td>{{i+1}}</td>
                                                <td><img :src="'http://localhost:8888/'+t.avatar" alt="avatar" style="height:64px;width:64px;"></td>
                                                <td>{{t.name}}</td>
                                                <td>{{t.age}}</td>
                                                <td>{{t.gender?'男':'女'}}</td>
                                                <td>{{t.teachAge}}年</td>
                                                <td> 
                                                    <router-link :to="'/teacher/edit?tid='+t._id"   class="btn btn-info btn-xs">
                                                        编辑
                                                    </router-link>
                                                    <button :id="t._id" flag="del" class="btn btn-danger btn-xs">
                                                        删除
                                                    </button>  
                                                </td>
                                            </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <!-- /.box-body -->
                                  <div class="box-footer clearfix">
                                    <ul class="pagination pagination-sm no-margin pull-right">
                                      <li><a href="#">&laquo;</a></li>
                                      <li><a href="#">1</a></li>
                                      <li><a href="#">2</a></li>
                                      <li><a href="#">3</a></li>
                                      <li><a href="#">&raquo;</a></li>
                                    </ul>
                                  </div>
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
    // import avatar1 from '';
    export default {
        name: 'TeacherList',
        data() {
            return {
                titles: {
                    main: '讲师管理',
                    sub: '讲师列表'
                },
                data: '',
                username: this.$store.state.userInfo,
                // avatar1
            }
        },
        components: {
            Header,
            Footer,
            Asider,
            Breadcrumbs
        },
        methods: {
            f() {
                this.$router.push("'/teacher/edit?tid='+t._id")
            }
        },

        mounted() {
            $("#teacher").addClass('active');
            var self = this;
            $.ajax({
                url: '/api/teacher/list',
                method: 'post',
                data: {
                    msg: 123
                },
                success: function(res) {
                    console.log(res.data)

                    self.data = res.data
                    res.data.avatar
                }
            });

            $("table").on("click", "button", function() {
                // this ?
                if (confirm("确认删除？")) {
                    var flag = this.getAttribute("flag");
                    switch (flag) {
                        case "del":
                            // 获取要删除的讲师 id
                            var tid = this.getAttribute("id");
                            $.ajax({
                                url: "/api/teacher/del",
                                method: 'post',
                                data: {
                                    _id: tid
                                },
                                success: function(res) {
                                    alert(res.msg);
                                    if (res.state == 200) {
                                        // 删除成功后 重载页面
                                        $.ajax({
                                            url: '/api/teacher/list',
                                            method: 'post',
                                            data: {
                                                msg: 123
                                            },
                                            success: function(res) {
                                                console.log(res.data)
                                                self.data = res.data
                                            }
                                        });
                                        self.$router.push('/teacher/list')
                                    }
                                }
                            });
                            break;
                    }
                }
            });




        }
    }
</script>