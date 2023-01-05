class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
            <div class="header-container">
                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                    <a class="header-icon"><img src="https://i.ibb.co/xjQM8kr/shoppingcart-to-compra-12829.png" alt="shoppingcart" border="0"></a> ${count}
                    
              
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
};

const headerPage = new Header();
