<template>
    <div id="employeesList">
        <div class="container-fluid col-8 mt-3">
            <h3 class="text-primary">{{title}}</h3>
            <table class="table  table-hover text-center" v-show="employeesList">
                <thead>
                <tr>
                    <td>#</td>
                    <td>name</td>
                    <td>rating</td>
                </tr>
                </thead>
                <tbody>
                <router-link active-class="active" tag="tr"
                             :to="{path: `./detail/${index}`}" v-for="(employee, index) in employeesList">
                    <td>{{index}}</td>
                    <td>{{employee.name}}</td>
                    <td>
                        <div class="progress">
                            <div class="progress-bar bg-info" role="progressbar"
                                 style="width: 100%" aria-valuenow="employee.rating"
                                 aria-valuemin="0" aria-valuemax="100">{{employee.rating+'%'}}</div>
                        </div>
                    </td>
                </router-link>
                </tbody>
            </table>
          </div>
<router-view></router-view>
    </div>

</template>

<script lang="js">
    import {getEmployees} from "../employee.service";
    export default {
        name: 'emploeeysListComponent',
        props: [],
        created() {
            getEmployees().then(data => this.employeesList = data,
                error => this.errorMessage = error);
        },
        data() {
            return {
                title: 'List of Employees',
                showMode: true,
                employeesList: [],
                errorMessage: ''
            }
        },
        computed: {
            path() {
                return true;
            }
        },
        methods: {

        },


    }
</script>

<style scoped>
    thead {
        font-weight: bold;
        background: aliceblue;
    }
    .active {
        background: bisque;
        color: darkred;
    }
router-view {
    position: absolute;

}

</style>
