 var htmlCatalog = '';
 var sumCatalog = 0;


class Shopping {
    handlerClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
       
        
        
        
        
        
        

        CATALOG.forEach(({ id, name, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">⚡️ ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} ₽</td>
                    </tr>
                `;
                sumCatalog += price;
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
  alert("Начало");
   var pro = localStorageUtil.getProducts(); 
   alert(pro);
    alert("Дальше");
   alert(sumCatalog);
    alert("Удачно, осталось только в АП отправить");
 location.reload()
 alert("Конец");
    
}




