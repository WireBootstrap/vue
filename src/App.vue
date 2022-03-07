<script>

    import MyTable from './MyTable.vue';
    import { TableData, FilterData } from "./sample-data";
    
    export default {
        components: {
            MyTable 
        },        
        data() {
            return {
                configTable: {
                    data: new TableData() 
                },
                configFilter: {
                    data: new FilterData(),
                    datamap: {value: "Product", label: "Product"},
                    all: {value: "All Products", label: "All Products", selected: true}                    
                }
            }
        }
    }

</script>

<template>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">

                <button type="button" id="sidebarCollapse" class="btn btn-primary">
                    <i class="fa fa-bars"></i>
                    <span class="sr-only">Toggle Menu</span>
                </button>
                <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars"></i>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="nav navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="./index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" target="wire-docs" href="https://www.wirebootstrap.com">WireBootstrap</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" target="wire-docs" href="https://docs.wirebootstrap.com/vue">Docs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" target="wire-docs" href="https://vuejs.org/">Vue.js</a>
                        </li>                            
                    </ul>
                </div>
            </div>
        </nav>

        <h2 class="mb-4">WireBootstrap Vue Directive</h2>

        <div class="alert alert-success">
        The <a href="https://docs.wirebootstrap.com/react" target="_new">WireBootstrap Vue Directive</a> allows any WireBootstrap component to be used inside the Vue.js framework.
        </div>  

        <div class="alert alert-success">
        The following turns basic HTML TABLE and SELECT elements into <a href="https://demo.wirebootstrap.com/smart-admin/wirebootstrap/app/pages/tables-bootstrap.html" target="_new">Bootstrap Table</a> 
        and <a href="https://demo.wirebootstrap.com/smart-admin/wirebootstrap/app/pages/filters-select.html" target="_new">Bootstrap Select</a> components            
        inside a Vue.js application using the <strong>WireBootstrap Vue Directive</strong>.
        </div>  
    
        <div class="row">

        <div class="col-md-6">
            <div class="card bg-light mb-3">
                <div class="card-body">
                    <select wire-component="wire.bsSelect" v-wire-config="configFilter" class="form-control"></select>
                </div>
            </div>
        </div>
        <div class="col-md-6">
        
            <div class="alert alert-secondary">
                <var>
                    &lt;select wire-component="wire.bsSelect" v-wire-config="configFilter" class="form-control"&gt;&lt;/select&gt;
                </var>                   
            </div>  
    
        </div>
        
    </div>      
        
    <hr/>
        
        <div class="row">

            <div class="col-md-6">
                <div class="card border-secondary mb-3">
                    <div class="card-header">Bootstrap Table</div>
                    <div class="card-body text-secondary">
                        <table wire-component="wire.bsTable" v-wire-config="configTable" class="table table-hover table-striped"></table>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
        
            <div class="alert alert-secondary">
                <var>
                    &lt;table wire-component="wire.bsTable" v-wire-config="configTable" class="table table-hover table-striped"&gt;&lt;/table&gt;
                </var>                                       
            </div>  
    
        </div>
        </div>

        <hr>

        <h2 class="mb-4">WireBootstrap Vue Components</h2>

        <div class="alert alert-success">
        If the same WireBootstrap component is to be used multiple times in an application, much of the configuration for the component can be internalized into a Vue.js component. 
        </div>  


        <div class="alert alert-success">
        In the example below, a new component called <strong>MyTable</strong> encapsulates the component code used to render the TABLE above.
        It can be used instead of configuring the  <strong>WireBootstrap Vue Directive</strong> directly each time.
        </div>  
        <div class="row">

        <div class="col-md-6">
            <div class="card border-secondary mb-3">
                <div class="card-header">Bootstrap Table</div>
                <div class="card-body text-secondary">
                    <MyTable :config="configTable" />
                </div>
            </div>
        </div>
        <div class="col-md-6">
    
            <div class="alert alert-secondary">                  
                <var>
                    &lt;MyTable :config="configTable" /&gt;
                </var>                                       
            </div>                 

        </div>
    </div>

    <footer class="mt-4">
        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
        This page uses the <a href="https://colorlib.com/wp/template/bootstrap-sidebar-01" target="_blank">Bootstrap Sidebar Template</a>
        created by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
        <br>
        Copyright &copy;2022 All rights reserved
        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
    </footer>

</template>
