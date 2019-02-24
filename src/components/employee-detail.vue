<template>
<div id="employeeDetail" class="container-fluid col-8 mt-3">
<table class="table table-bordered ">
    <tr v-for="(value, prop) in selectedEmployee">
        <td>{{prop}}</td>
        <td>{{value}}</td>
    </tr>

</table>
</div>

</template>

<script lang="js">
    import {getEmployees} from "../employee.service";
  export default  {
    name: 'employeeDetail',
    props: [],
    mounted() {

    },
    data() {
      return {
          selectedEmployee: null,
          errorMessage: null
      }
    },
    methods: {

    },
      created() {
          getEmployees().then(
              data => this.selectedEmployee = data.find((employee, index) => this.$route.params.id == index),
              error => this.errorMessage = error);
      }

}
</script>

<style scoped>
    td:first-child {
        font-weight: bold;
    }

</style>
