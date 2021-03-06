class Header {
    handlerOpenShoppingPage(){
        shoppingPage.render();
    }

    render(count) {
        const html = `
            <div class="header-container">
                <div class="header-counter" onclick="HeaderPage.handlerOpenShoppingPage();">
                    ✨ ${count}
                </div>
            </div>
        `;
        ROOT_HEADER.innerHTML = html;
    }
}

const HeaderPage = new Header();

