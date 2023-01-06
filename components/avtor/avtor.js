

class Avtor {
    render() {
        const html = `
        	<div class="error-container">
                <div class="error-message">
                <h3 id="blink1">Внимание тестируем </h3>
                    <h3>плейер!</h3>
                  
                    
                    
                    <div id="player"></div>


                    
                </div>
        	</div>
        `;

        ROOT_AVTOR.innerHTML = html;
    }
}

const avtorPage = new Avtor();
