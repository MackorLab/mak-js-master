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

        CATALOG.forEach(({ id, name, price, img, vkstu, vkstm }) => {
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
    width: 85%;
    
    font-size: 20px;
    color: white;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
}
</style>




<div id="overlay_${id}" onclick="off_${id}()">

  <div id="text_${id}">
<!-- Put this script tag to the <head> of your page -->
<script
  type="text/javascript"
  src="https://vk.com/js/api/openapi.js?168"
  charset="windows-1251"
></script>

<!-- Put this script tag to the place, where the Article block will be -->
<div id="${vkstu}"></div>
<script type="text/javascript">
  VK.Widgets.Article("${vkstu}", "${vkstm}");
</script>
  
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
