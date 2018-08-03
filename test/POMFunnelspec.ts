//import { async } from "../node_modules/@types/q";

var funnelpage = require('../pages/funnelsPage');

describe('Given  we received a Kyani information', () => {
    
    describe ('When I load the page',  () => {
        
        beforeAll (async () => {
         
            await funnelpage.get();
       
        });
        describe ('And I acepted the cookie', () => {
            
            beforeAll (async () => {
           
                await funnelpage.acceptCookie();
            
            });

            describe ('And I filled the prospect information',  () => {
                
                var name = 'Shakira';
                var phone = '300525';
                
                beforeAll (async () => {
                    
                    

                    await  funnelpage.setName(name);                
                    await  funnelpage.setPhone(phone);
                    await  funnelpage.sendInfo();
               });
             
                it('then the page should show the prospect name', async  () => {
                   
                    expect(await funnelpage.getconnectionName()).toContain(name);

                });

                it('then the page should show the Funnel Title', async function(){
                   
                    expect(await funnelpage.getFunnelTitle()).toContain('HOW DOES KYÄNI CARING HANDS HELP THOSE IN NEED?');
        
                });
        
                it('then the page should show the Funnel Description', async function(){
                           
                    expect(await funnelpage.getFunnelDescription()).toContain('Kyäni Caring Hands is a charitable organization that is dedicated to bringing hope to children in need by improving access to nutrition, sanitation, and education.');
        
                });

                it('then the page should show the Step Title', async function(){
                           
                    expect(await funnelpage.getStepTitle()).toBeNull   
        
                });

                it('then the page should show the Step Description', async function(){
                           
                    expect(await funnelpage.getStepDescription()).toBeNull
        
                });
            });

        });

   });
});




