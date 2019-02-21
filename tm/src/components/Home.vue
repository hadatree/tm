<template>
    <div>   
        <Header :username='username'></Header>
        <Asider :username='username'></Asider>

        <div class="content-wrapper" style="min-height: 538px;">
            <Breadcrumbs  :titles="titles" ></Breadcrumbs>
            <section class="content">
                <div class="row">
                    <div class="col-md-12">
                        <div class="box">
                            <div class="box-header with-border">
                                 <h3 class="box-title">主页</h3>
                            </div>
                            <div class="box-body" style="position:relative">
                               <img :src="avatar" alt="" style="height:350px;width: 550px;">
                               <div style="position: absolute;right:20%;top:35%;font-size:70px;font-weight:1000px">slow dive</div>
                            </div>
                            <div class="box-footer clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <Footer ></Footer>
    </div>

</template>

<script>
    import Header from "./layout/Header";
    import Footer from "./layout/Footer";
    import Asider from "./layout/Asider";
    import Breadcrumbs from "./layout/Breadcrumbs"
    import a from '@/assets/dist/js/adminlte.js'
    import "@/assets/dist/js/demo.js"
    import b from '@/assets/dist/js/adminlte.1.js'
    import avatar from "@/../static/1.jpg"
    export default {
        name: 'Home',
        components: {
            Header,
            Footer,
            Asider,
            Breadcrumbs
        },
        data() {
            return {
                titles: {
                    mian: '教学后台',
                    sub: "主页"
                },
                username: this.$store.state.userInfo,
                avatar
            }
        },
        mounted() {
            // this.$store.commit("toggleLogged");

            //找模块进行加载 （吊吊吊）！！！！
            // $(a.Selector.data).each(function(i, e) {
            //     a.Plugin.call($(e));
            // })
            $(b.Selector.data).each(function(i, e) {
                b.Plugin.call($(e));
            })
            console.log(this.$store.state.logged)
            console.log(this.$store.state.userInfo)
        }
    }
</script>