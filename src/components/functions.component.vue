<template>
    <div class="container-fluid col-8" id="functions">
        <div class="btn-group d-block">
            <button class="btn btn-success mr-2" @click="addNewEmployee">
                Add employee
            </button>
            <button class="btn btn-success mr-2" @click="updateInfo">
                Update info
            </button>
            <button class="btn btn-success mr-2" @click="deleteEmployee">
                Delete employee
            </button>
            <button class="btn btn-link float-right" @click="convertList">
                {{view}}
            </button>
        </div>
        <hr>

        <template v-if="">
            <div class="card mb-3 mr-4 col-5 d-inline-block" v-for="(employee, index) in employees">
                <div class="card-body">
          <span class="float-right" style="cursor: pointer" @click="deleteEmployee(index)">
            X
          </span>
                    <h4 class="card-title text-primary">
                        New employee (number : {{index+1}} )
                    </h4>

                    <div class="form-group">
                        <label>Name <sup class="text-danger">**</sup></label>
                        <input class="form-control" type="text" placeholder="name" v-model.trim="employee.name"
                               name="name" :class="{'is-invalid' : nameInvalid}" @input="nameValidate(employee.name)">
                        <small class="text-danger" v-show="nameInvalid">Name is required</small>
                    </div>

                    <div class="form-group">
                        <label>Job <sup class="text-danger">**</sup></label>
                        <input class="form-control" type="text" placeholder="job" v-model="employee.job"
                               :class="{'is-invalid' : jobInvalid}" @input="jobValidate(employee.job)">
                        <small class="text-danger" v-show="jobInvalid">Job is required</small>
                    </div>

                    <div class="form-group">
                        <label>Email <sup class="text-danger">**</sup></label>
                        <input class="form-control" type="email" placeholder="email@com.ua"
                               v-model="employee.email" pattern="/^[a-zA-Z0-9_.]+@[a-z]+\.[a-z]{2,3}$/">
                    </div>

                    <div class="form-group">
                        <label>Information</label>
                        <textarea cols="30" rows="10" class="form-control"
                                  placeholder="no more than 100 symbols"></textarea>
                        <div class="progress mt-2">
                            <div class="progress-bar bg-info" role="progressbar" style="width: 100%"
                                 :aria-valuenow="employee.counter-100" aria-valuemin="0" aria-valuemax="100">
                                <span :class="employee.counter>50 ? textDanger : textWhite">{{employee.counter}} symbols left</span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Employee rate</label>
                        <input type="range" class="form-control">
                    </div>
                        <small class="text-danger">** required fields</small>
                    </p>

                    <div class="btn-group">
                        <button class="btn btn-primary mr-3" @click="onSubmit(index)"
                                :disabled="nameInvalid || jobInvalid || emailInvalid">Submit
                        </button>
                        <button class="btn btn-primary" @click="clear(index)">Clear</button>
                    </div>

                </div>
            </div>
        </template>


    </div>
</template>

<script>

    export default {
        name: 'functionsComponent',
        props: [],
        data() {
            return {
                view: 'list',
                employees: [],

            }
        },
            methods: {
            deleteEmployee() {

            },
            updateInfo() {

            },
            convertList() {

            },

            onSubmit(index) {

            },
            clear(index) {
                this.employees[index] = null;

            },
            addNewEmployee() {
                this.employees.push({
                    name: '',
                    job: '',
                    email: '',
                    about: '',
                    counter: 100
                });
                console.log(this.employees);
            },
            deleteEmployee(index) {
                this.employees.splice(index, 1);
            }
        }
    }
</script>


<style>
    #functions {
        margin: auto;
        margin-top: 20px;
    }


</style>
