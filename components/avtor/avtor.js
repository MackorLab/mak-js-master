

class Avtor {
    render() {
        const html = `
        	<div class="error-container">
                <div class="error-message">
                    <h3>Тестируем </h3>
                    <p>плейер!</p>
                    
                    
                    <div id="player"></div>


                    
                </div>
        	</div>
        `;

        ROOT_AVTOR.innerHTML = html;
    }
}

const avtorPage = new Avtor();
