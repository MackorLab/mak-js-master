class Products {
	
	

	
	
	
	
	
	
    constructor() {
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handlerSetLocatStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);

        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerText = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerText = this.labelAdd;
        }

        headerPage.render(products.length);
    }

    render() {
	    
	    
	    
	    	
	
	    
	    
	    
	    
	    
	    
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, price, img, sortir, uplog, upimg, uptext, uptext_pr, uptext_ot}) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' ' + this.classNameActive;
                activeText = this.labelRemove;
            }
            
            
            
            
            
            

htmlCatalog += `



<style>
#overlay_${id}{
   
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 2;
    cursor: pointer;
}

#text_${id}{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    
    font-size: 20px;
    color: white;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
}
</style>




<div id="overlay_${id}" onclick="off_${id}()">

  <div id="text_${id}">
<style>
.coupon {
   
   border: 5px ridge #dc85ed;
    width: 90%;
    height: 100%;
    overflow: auto;
    border-radius: 0px;
    margin: 0 auto;
    max-width: 600px;
   
}

.container_text {
    
    padding: 2px 2px 2px 15px;
    background-color: #c091fa;
    width: 100%;
    height: 200px;
    overflow: auto;
    
    margin: 0 auto;
    max-width: 600px;
}

.container {
    
    padding: 2px 2px 2px 15px;
    background-color: #c091fa;
}

.promo {
    background: #a247fc;
    padding: 3px;
}


#element::-webkit-scrollbar {
  width: 10px;
}

#element::-webkit-scrollbar-track {
  -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
  background-color: #f9f9fd;
  border-radius: 10px;
}

#element::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: linear-gradient(180deg, #00c6fb, #005bea);
}






</style>


<div class="coupon">

  <img src="${upimg}" alt="Avatar" style="width:100%;">
  <div id="element" class="container_text" style="background-color:white">
    <h3 style="color:#a247fc;"><b>${uplog}</b></h3> 
    <p style="color:#a247fc; font-size:14px;"> ${uptext}</p>
  </div>
  <div class="container">
    <p style="color:#ffffff;"> ${uptext_pr} <span class="promo">${uptext_ot} ${price} ₽</span></p>
    
  </div>
</div>

 
 
 
 
 
 
 
</div>
</div>






<li class="products-element">

	<span class="products-element__name">${name}</span>
	<img onclick="on_${id}()" class="products-element__img" src="${img}" />
	<span class="products-element__price">
		⚡️${uptext_ot} ${price.toLocaleString()} ₽
	</span>
	<button class="products-element__btn${activeClass}" onclick="productsPage.handlerSetLocatStorage(this, '${id}');">
		${activeText}
	</button>
</li>








`;
            
            
            
            
  });          
            
            
            
            
            
            
            
            

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
};

const productsPage = new Products();
