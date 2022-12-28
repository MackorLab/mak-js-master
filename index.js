var banks;

function render() {
	const productsStore = localStorageUtil.getProducts();

	headerPage.render(productsStore.length);
	productsPage.render();	
}

spinnerPage.render();
let pred = [];
let CATALOG = [];


fetch('https://skyauto.me/cllbck/217669590/1685371/aVZoRWlHQmdteS8yZitXajNjWFBGUT0?api=1&sid=535939344')
    .then(res => res.text())
    .then(body => {
	console.log(body)
	pred.push(body);
	console.log(pred)
		CATALOG = pred;
       console.log(CATALOG)
		setTimeout(() => {
			spinnerPage.handleClear();
			render();
		}, 1000);
    })
    .catch(() => {
        spinnerPage.handleClear();
    	errorPage.render();
    })




