class Spinner {
    handleClear() {
        ROOT_SPINNER.innerHTML = '';
    }

    render() {
        const html = `
        	<div class="spinner-container">
            
            
         
          <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_d29eunxw.json" background="transparent" speed="1" style="width: 140px; height: 140px;" loop="" autoplay=""></lottie-player>  
            
            
        	</div>
        `;

        ROOT_SPINNER.innerHTML = html;
    }
}

const spinnerPage = new Spinner();
