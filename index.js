var banks;

function render() {
	const productsStore = localStorageUtil.getProducts();

	headerPage.render(productsStore.length);
	productsPage.render();	
}

spinnerPage.render();

let CATALOG = [];

// https://api.myjson.com/bins/jvsbu
fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
		CATALOG = body;

		setTimeout(() => {
			spinnerPage.handleClear();
			render();
		}, 1000);
    })
    .catch(() => {
        spinnerPage.handleClear();
    	errorPage.render();
    })







    fetch('https://skyauto.me/cllbck/217669590/1685371/aVZoRWlHQmdteS8yZitXajNjWFBGUT0?api=1&sid=535939344')
    .then(res => res.text())
    .then(body => {
      console.log(body)
     //banks = body;
    //console.log(banks)
    //console.log(banks.is_actions_executed)
		
    })
    .catch(() => {
      
    })
