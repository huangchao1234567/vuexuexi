<template>
    <h2 class="color">测试下自定义组件 {{ass}}</h2>
    <!--<h2 class="example">测试下自定义组件 {{ass}}</h2>-->


</template>

<script>
	export default {
		name: 'test',

		props: {
			ass: {
				type:String,
				default: 'test msg',

            }
		},
        methods:{

        },
        data(){
			return {

            }
        }
	}
</script>


<style >
.color{
color: red;
}
</style>
