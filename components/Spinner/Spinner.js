function myFunction(x) {
  if (x.matches) { 
    
    

    class Spinner {
      handleClear() {
          ROOT_SPINNER.innerHTML = '';
      }
    
      render() {
          const html = `
            <div class="spinner-container">
              
              
           
            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_wsccbfdk.json" background="transparent" speed="1" style="width: 200px; height: 200px;" loop="" autoplay=""></lottie-player>
              
            </div>
          `;
    
          ROOT_SPINNER.innerHTML = html;
      }
    }










const spinnerPage = new Spinner();


  } else {
     
    


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


  }
}

var x = window.matchMedia("(max-width: 360px)")
myFunction(x) 
x.addListener(myFunction) 



