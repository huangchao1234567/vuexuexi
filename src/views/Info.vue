<template>
    <div>
        <el-container  style="height: 500px; border: 1px solid #eee">
            <el-aside width="10%" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="[ '2']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>导航一</template>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                        <el-menu-item-group>
                            <template slot="title" index="2-3">分组一</template>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container>

                <el-header style="text-align: right; font-size: 12; height: 12%">
                    <el-button type="primary" @click="toggleSelection()" round>取消选择</el-button>
                    <el-button type="primary" class="el-icon-plus" round>添加</el-button>
                    <el-button type="primary" class="el-icon-delete" round>删除</el-button>
                </el-header>

                <el-table :data="tableData">
                    <el-table-column prop="date"  label="日期" width="140"></el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                </el-table>

                <el-pagination
                          background
                          layout="prev, pager, next"
                          :total="20">
                </el-pagination>




            </el-container>
        </el-container>

    </div>


</template>

<script>
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item)
            }
        }
    };
</script>



<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>