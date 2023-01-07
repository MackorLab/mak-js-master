var banks;

function render() {
	const productsStore = localStorageUtil.getProducts();

	headerPage.render(productsStore.length);
	productsPage.render();	
}

spinnerPage.render();
let pred = [];
CATALOG = [];


fetch('https://skyauto.me/cllbck/217669590/1685371/aVZoRWlHQmdteS8yZitXajNjWFBGUT0?api=1&sid=535939344')
    .then(res => res.json())
    .then(body => {
		CATALOG = body.katalog;

		setTimeout(() => {
			spinnerPage.handleClear();
			render();
		}, 1000);
    })
    .catch(() => {
        spinnerPage.handleClear();
    	errorPage.render();
    })




