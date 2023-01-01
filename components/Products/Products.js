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
	    
	    
	    
	    	
	const htmlbtn = `
               <div id="myBtnContainer">       
                    
                     <button class="btn active" onclick="filterSelection()"> Показать всё</button>
                     <button class="btn" onclick="filter()"> Создание сайта</button>
                     <button class="btn" onclick="filterSelection()"> Украшение аккаунта ВК</button>
                   
                    
                </div>    
                    
        `;

        ROOT_BTN.innerHTML = htmlbtn;
	    
	    
	    
	    
	    
	    
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, price, img, sortir, uplog}) => {
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
overflow: scroll;
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
    width: 85%;
    
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
    width: 80%;
    border-radius: 0px;
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


</style>


<div class="coupon">
  <div class="container">
   ${uplog}
  </div>
  <img src="https://i.ibb.co/bznN0Y5/11.png" alt="Avatar" style="width:100%;">
  <div class="container" style="background-color:white">
    <h2 style="color:red;"><b>20% OFF YOUR PURCHASE</b></h2> 
    <p style="color:red;">Lorem ipsum dolor sit amet, et nam pertinax gloriatur. Sea te minim soleat senserit, ex quo luptatum tacimates voluptatum, salutandi delicatissimi eam ea. In sed nullam laboramus appellantur, mei ei omnis dolorem mnesarchum.</p>
  </div>
  <div class="container">
    <p style="color:#ffffff;">Use Promo Code: <span class="promo">BOH232</span></p>
    <p style="color:red;">Expires: Jan 03, 2017</p>
  </div>
</div>

 
 
 
 
 
 
 
</div>
</div>






<li class="products-element">

	<span class="products-element__name">${name}</span>
	<img onclick="on_${id}()" class="products-element__img" src="${img}" />
	<span class="products-element__price">
		⚡️ ${price.toLocaleString()} ₽
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
