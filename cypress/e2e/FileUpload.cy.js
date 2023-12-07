


describe("File Upload",function(){

    it.skip("single file Upload_Demo",function(){

        cy.visit("https://the-internet.herokuapp.com/upload");
        
        cy.get('#file-upload').attachFile('SeleniumInterviewQuestions.pdf');

        cy.get('#file-submit').click();

        cy.wait(5000);

        cy.get(".example h3").should('have.text','File Uploaded!');
    })


    it.skip("single file Upload_Demo-renaming file",function(){

        cy.visit("https://the-internet.herokuapp.com/upload");
        
        cy.get('#file-upload').attachFile({filePath:'SeleniumInterviewQuestions.pdf',fileName:'MyFile.pdf'});

        cy.get('#file-submit').click();

        cy.wait(5000);

        cy.get(".example h3").should('have.text','File Uploaded!');
    })

    it.skip("single file Upload_Demo-Drag-nDrop file",function(){

        cy.visit("https://the-internet.herokuapp.com/upload");
        
        cy.get("div#drag-drop-upload").attachFile('SeleniumInterviewQuestions.pdf', {subjectType:'drag-n-drop'});

        cy.wait(3000);

        cy.get('#drag-drop-upload').contains('SeleniumInterviewQuestions.pdf');
    })

    it.skip("attching Multiple File",function() {

        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

        cy.get('#filesToUpload').attachFile(["SeleniumInterviewQuestions.pdf","SeleniumInterviewQuestions.pdf"]);

        //Assertion for Selected file....

        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:');
    })

    it("Shaddow Dom...",function() {

        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/");

        cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile('SeleniumInterviewQuestions.pdf');
    })
})