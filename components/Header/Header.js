class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
            <div class="header-container">
                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                    <a><img src="https://i.ibb.co/zNQVHnJ/shoppingcart-to-compra-12829-1.png" alt="shoppingcart" border="0"></a> ${count}
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
};

const headerPage = new Header();
