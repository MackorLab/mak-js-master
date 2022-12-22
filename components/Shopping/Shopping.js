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
                <button type="button" id="submits" class="btn btn-outline-warning" onclick="alerted();">Оформить заказ</button>
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
 

	
	
  fetch('https://skyauto.me/cllbck/217669590/1681861/SVF5Q2wyVUYrb2RrOFhqV3lMY3d5UT0?api=1&sid=535939344', {  
                        method: 'post',  
                        headers: {  
                          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
                        },  
                        body: 'foo=pro&lorem=sumCat'  
                      })
                      .then(res => res.json())
                      .then(body => {
                      CATALOG = body;
                  
                    
                      })
                      .catch(() => {
                         
                      })
                           
	

 
 
  localStorage.clear();
 location.reload()
    
}




