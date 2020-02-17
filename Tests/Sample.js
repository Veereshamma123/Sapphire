describe('Sapphire', function() {
  
	browser.ignoreSynchronization=true;
	
	it('Login functionality', function() 
	{			
		browser.get('https://test-int-sapphire.syndigo.com');
		console.log("Hitting the browser");
		browser.sleep(10000);
	})
	
})