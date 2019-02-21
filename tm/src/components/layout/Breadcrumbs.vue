<template>
        <section class="content-header">
                <h1>
                  教学后台
                  <small>{{titles.main}}</small>
                </h1>
                <ol class="breadcrumb">
                  <li v-if="titles.main"><a href="#"><i class="fa fa-dashboard"></i>{{titles.main}}</a></li>
                  <li class="active">{{titles.sub}}</li>
                </ol>
         </section>
</template>

<script>
    export default {
        name: 'Breadcrumbs',
        props: ['titles'],
    }
</script>