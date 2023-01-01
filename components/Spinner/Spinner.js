class Spinner {
  handleClear() {
      ROOT_SPINNER.innerHTML = '';
  }

  render() {
      const html = `
        <div class="spinner-container">
          
         <div class="box"> 
        <div class="d-flex justify-content-center"> 
        <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_wsccbfdk.json" background="transparent" speed="1" style="width: 200px; height: 200px;" loop="" autoplay=""></lottie-player>
          </div>
        </div>
       </div>
      `;

      ROOT_SPINNER.innerHTML = html;
  }
}

const spinnerPage = new Spinner();
