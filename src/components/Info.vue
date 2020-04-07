//一个小功能
<template>

    <div>
        <ul>
            <li v-for="(mas , index) in msg"
                @click="choose (index)"
                :class="{active:index==counts}"
                :key="index">
                {{mas}}
            </li>
        </ul>

        <button type="button" @click="add()">添加</button>

        <ul>
            <li v-for="(item,ind) in add_data"
                :key="ind">
                {{item}}

            </li>
        </ul>

    </div>


</template>

<script>
	export default{
		name: 'dome1',
		data(){
			return {
				counts: '-1',
				msg: [1, 23, 34, 334, 45, 545,],
				add_data: []
			}
		},
		methods: {
			choose (index) {
				this.counts = index
				//console.log(index)
			},
			add () {
				if (this.counts >= 0){
					this.add_data.push(this.msg[this.counts])
				}
			}
		},

	}
</script>

<style>
    li.active {
        color: red;
        background: green;
    }

</style>