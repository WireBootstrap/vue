function DataSource() {
              
    //
    // sample data source
    //
    return new wire.data.DataSource("local", {
        Provider: {
            Json: { url: "./data/sample-data.json" }
        }
    });

}

function FilterData() {

    //
    // sample data source
    //
    const source = new DataSource();    

    //
    // pull distinct list of products
    //
    return new wire.data.DataSet({
        Source: source,
        Query:  wire.data.select("Product").distinct()
            .top(50)
            .where().eq("OrderYear", "2019")      
    });    

}


function TableData() {

   
    //
    // sample data source
    //
    const source = new DataSource();

    // create dataset from sample source 
    // pull sales/cost data, aggregate by month
    // use a dataset to listen for changes
    //
    return new wire.data.DataSet({
        Source: source,
        Query: wire.data.select("Product", "OrderMonth", "Sales", "Cost")
            .top(5)
            .where().eq("OrderYear", "2019"),
        Transform: (d, cb) =>{

            const table = d.table.select("Product")
                .sum("Sales").format("C0")
                .sum("Cost").format("C0")
                .table();

            cb(table);
            
        }
    });

}

export { TableData, FilterData, DataSource }
