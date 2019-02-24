<template>
    <div class="app">
        <div class="header">
            <div class="menu-button d-inline-block" style="cursor:pointer"
                 @click="sidebarIsVisible=!sidebarIsVisible" :class="{'menu-button-click' : !sidebarIsVisible}">
                <span>=</span>
            </div>
            <h1>
            Employees managment application
            </h1>
        </div>
        <transition name="sidebar">
            <div class="sidebar shadow-lg bg-white rounded" v-if="sidebarIsVisible">
                <ul class="list-group text-primary">
                    <li class="list-group-item" v-for="item in sidebarList"
                        :class="{activeLink : selectLink === item.linkValue}" @click="onListSelect(item)">
                        {{item.linkValue}}
                    </li>
                </ul>
            </div>
        </transition>
        <keep-alive>
            <component :is="selectComponent"></component>
        </keep-alive>
    </div>
</template>

<script>
    import functionsComponent from './functions.component'
    import emploeeysListComponent from './employees-list.component'
    import topEmployeesComponent from './top-employees.component'

    export default {
        name: 'app',
        components: {
            functionsComponent,
            topEmployeesComponent,
            emploeeysListComponent,
        },
        methods: {
            onListSelect(item) {
                this.selectLink = item.linkValue;
                this.selectComponent = item.component;
            }
        },
        data() {
            return {
                sidebarList: [
                    {component: 'topEmployeesComponent', linkValue: 'Top Employees'},
                    {component: 'emploeeysListComponent', linkValue: 'Employees list'},
                    {component: 'functionsComponent', linkValue: 'Functions'}
                ],
                sidebarIsVisible: true,
                selectLink: 'Top Employees',
                selectComponent: 'topEmployeesComponent'
            }
        },
    }
</script>

<style scoped>
    .sidebar-enter-active, .sidebar-leave-active {
        transition: .4s ease;
    }

    .sidebar-enter, .sidebar-leave-to {
        opacity: 0;
        transform: translateX(-1000px);
    }

    .sidebar {
        width: 200px;
        height: 100%;
        position: fixed;
    }

    .header {
        height: 100px;
        background: #3a4feb;
        padding: 0;
    }

    .header h1 {
        height: 100%;
        margin-left: 50px;
        display: inline-block;
        color: white;
    }

    .activeLink {
        color: white !important;
        font-weight: bold;
        background: dodgerblue;
    }

    .list-group-item {
        cursor: pointer;
    }

    .list-group-item:hover {
        border-right: 20px solid;
        border-bottom-right-radius: 15px;
        border-top-right-radius: 10px;
    }

    .menu-button {
        width: 200px;
        height: 100%;
        font-size: 60pt;
        font-weight: 800;
        text-align: center;
        transition: all .4s;
        color: #3aa5ee;
        text-shadow: 1px 1px 5px black;
    }

    .menu-button:hover {
        background: #d4f1ff;
        color: blue;
        opacity: 0.4;
        box-shadow: 1px 1px 80px black;
    }

    .menu-button-click {
        color: white;
        transform: rotate(90deg);
        width: 100px;
        border-radius: 50px;
    }

    .active {
        color: #4a49e6;
        font-weight: 900;
    }
</style>
