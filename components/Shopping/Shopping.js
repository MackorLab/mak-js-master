 var sumCat = 0;

class Shopping {
    handlerClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
       
        
        
         let htmlCatalog = '';
         let sumCatalog = 0;

        
        
        

        CATALOG.forEach(({ id, name, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">⚡️ ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} ₽</td>
                    </tr>
                `;
                sumCatalog += price;
             sumCat = sumCatalog;
            }
        });

        const html = `
            <div class="shopping-container">
          <a class="header-icon" onclick="shoppingPage.handlerClear();"><img src="https://i.ibb.co/F3SMJxY/shopping-cart-remove-12830-1.png" alt="shopping-cart"></a>
                
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name">💥 Сумма:</td>
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()} ₽</td>
                    </tr>
                </table>
                <button type="button" id="submits"class="btn btn-warning" onclick="alerted();">Оформить заказ</button>
            </div>
        `;

        ROOT_SHOPPING.innerHTML = html;
    }
};





const shoppingPage = new Shopping();


function alerted(){
 
   var pro = localStorageUtil.getProducts(); 
 
   console.log(pro)
   console.log(sumCat)
  

    
}




