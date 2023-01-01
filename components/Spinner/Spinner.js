class Spinner {
    handleClear() {
        ROOT_SPINNER.innerHTML = '';
    }

    render() {
        const html = `
        	<div class="spinner-container">
            
            
         <div class="loader"></div>
            
            
            
        	</div>
        `;

        ROOT_SPINNER.innerHTML = html;
    }
}

const spinnerPage = new Spinner();
