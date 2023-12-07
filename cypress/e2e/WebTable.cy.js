/// <reference types ="Cypress"/>
import 'cypress-xpath'

describe("Web_table_Handling",function(){

    beforeEach("login",function(){
        cy.visit("https://demo.opencart.com/admin/");
        cy.get("#input-username").type('demo');
        cy.get("#input-password").type('demo');
        cy.get("button[class='btn btn-primary']").click();

        cy.get(".btn-close").click();
        //customers---menu click...
        cy.get("#menu-customer>a").click(); //click on customer sub item
        cy.get("#menu-customer>ul>li:first-child").click();// customer sub-item
    })

    it.skip("Check_no_of_Rows_columns",function(){
        // assrtion for rows lenght to be 10
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length',10);

        //assertion for culumns to be 7
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length',7);
    })

    it.skip("check cell data for row and column",function(){

        //checking cell data
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
              .contains("hfgjhgjgjggj@gmail.com");
    })

    it.skip("Read all data From first_Page",function(){

        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row ,index ,$rows) =>{

            cy.wrap($row).within(( () =>{

                cy.get("td").each(($col,index,$cols) =>{
                  
                    cy.log($col.text());

                })
            }))
        })
    })

    it.only("page_nation_data",function(){

        /*
        //find total pages
        let totalPages;
        cy.get("div[class='col-sm-6 text-end']").then((e) =>{
            let myText= e.text();
            totalPages= myText.substring(myText.indexOf("(")+1,myText.indexOf("Pages")-1);
            cy.log("Total pages in tabe : "+totalPages);
        })
        */

        //reading data from multiple pages

        let pages=5;

        for(let p=1;p<=pages;p++) {

            if(pages>1) {
                cy.log("Active Page is : "+p);

                cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                cy.wait(3000);

                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                .each(($row,index,$rows) =>{

                    cy.wrap($row).within(()=>{

                        cy.get("td:nth-child(3)").then( (el) =>{

                           cy.log(el.text());

                        })
                    })
                })
            }
        }

    })
})