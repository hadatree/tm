<template>
        <aside class="main-sidebar">

                <!-- sidebar: style can be found in sidebar.less -->
                <section class="sidebar">
              
                  <!-- Sidebar user panel (optional) -->
                  <div class="user-panel">
                    <div class="pull-left image">
                      <img :src="avatar" class="img-circle" alt="User Image">
                    </div>
                    <div class="pull-left info">
                      <p>{{username}}</p>
                      <!-- Status -->
                      <a href="/"><i class="fa fa-circle text-success"></i> Online</a>
                    </div>
                  </div>
              
                  <!-- Sidebar Menu -->
                  <ul class="sidebar-menu" data-widget="tree">
                    <li class="header">菜单导航</li>
                    <!-- Optionally, you can add icons to the links -->
                    <li id="home"><a @click='m1()'><i class="fa fa-home"></i> <span>主页</span></a></li>
                    <li class="treeview" id="teacher">
                      <a href="#"><i class="fa fa-users"></i> <span>讲师管理</span>
                        <span class="pull-right-container">
                          <i class="fa fa-angle-left pull-right"></i>
                        </span>
                      </a>
                      <ul class="treeview-menu" >               
                        <li style="cursor: pointer;"><a @click='m2()' >讲师列表</a></li>
                        <li style="cursor: pointer;"><a  @click='m3()' >讲师添加</a></li>
                      </ul>
                    </li>
                    <li class="treeview" >
                      <a href="#"><i class="fa fa-book"></i><span>课程管理</span>
                        <span class="pull-right-container">
                          <i class="fa fa-angle-left pull-right"></i>
                        </span>
                      </a>
                      <ul class="treeview-menu" >
                        <li><a  @click='m4()'>课程列表</a></li>
                        <li><a  @click='m5()'>课程添加</a></li>
                      </ul>
                    </li>
                    <li class="treeview" >
                        <a href="#"><i class="fa fa-book"></i><span>课程管理</span>
                          <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                          </span>
                        </a>
                        <ul class="treeview-menu" >
                          <li><a  @click='m4()'>课程列表</a></li>
                          <li><a  @click='m5()'>课程添加</a></li>
                        </ul>
                      </li>
                      <li class="treeview" >
                        <a href="#"><i class="fa fa-book"></i><span>课程管理</span>
                          <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                          </span>
                        </a>
                        <ul class="treeview-menu" >
                          <li><a  @click='m4()'>课程列表</a></li>
                          <li><a  @click='m5()'>课程添加</a></li>
                        </ul>
                      </li>
                      <li class="treeview" >
                        <a href="#"><i class="fa fa-book"></i><span>课程管理</span>
                          <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                          </span>
                        </a>
                        <ul class="treeview-menu" >
                          <li><a  @click='m4()'>课程列表</a></li>
                          <li><a  @click='m5()'>课程添加</a></li>
                        </ul>
                      </li>
                      <li class="treeview" >
                        <a href="#"><i class="fa fa-book"></i><span>课程管理</span>
                          <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                          </span>
                        </a>
                        <ul class="treeview-menu" >
                          <li><a  @click='m4()'>课程列表</a></li>
                          <li><a  @click='m5()'>课程添加</a></li>
                        </ul>
                      </li>
                      <li class="treeview" >
                        <a href="#"><i class="fa fa-book"></i><span>课程管理</span>
                          <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                          </span>
                        </a>
                        <ul class="treeview-menu" >
                          <li><a  @click='m4()'>课程列表</a></li>
                          <li><a  @click='m5()'>课程添加</a></li>
                        </ul>
                      </li>
                    <li id="person"><a href="#"><i class="fa fa-cog"></i> <span>个人设置</span></a></li>
                  </ul>
                  <!-- /.sidebar-menu -->
                </section>
                <!-- /.sidebar -->
              </aside>
</template>
<script>
    import avatar from "@/assets/dist/img/avatar2.png";
    import a from '@/assets/dist/js/adminlte.js'
    import "@/assets/dist/js/demo.js"
    export default {
        name: "Asider",
        data() {
            return {
                avatar
            }
        },
        props: ['username'],
        methods: {
            m1() {
                this.$router.push('/')
            },
            m2() {
                this.$router.push('/teacher/list')
            },
            m3() {
                this.$router.push('/teacher/add')
            },
            m4() {
                this.$router.push('/course/list')
            },
            m5() {
                this.$router.push('/course/add')
            }

        },
        mounted() {
            //找模块进行加载 （吊吊吊）！！！！
            $(a.Selector.data).each(function(i, e) {
                a.Plugin.call($(e));
            })
        }

    }
</script>

<style>

</style>