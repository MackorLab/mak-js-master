class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
            <div class="header-container">
                
  
            
            <div class="dropdown">
  <button onclick="myFunction()" class="dropbtn"> Меню</button>
  <div id="myDropdown" class="dropdown-content">
    <a onclick="filterob()">Показать всё 💜</a>
    <a onclick="filterst()">Разработка сайтов 💜</a>
    <a onclick="filterst()">Упаковка соц.сетей [SMM] 💜</a>
    <a onclick="filteravt()"> Об авторе 🔎</a>
  </div>
</div>
            
  
            
                 <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                    <a class="header-icon"><img src="https://i.ibb.co/xjQM8kr/shoppingcart-to-compra-12829.png" alt="shoppingcart" border="0"></a> ${count}
                 </div>
                
               
               
       
                
                
  
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
};

const headerPage = new Header();
