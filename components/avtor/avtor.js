

class Avtor {
    render() {
        const html = `
        	<div class="avtor-container">
                <div class="avtor-message">
                <h3 id="blink1">Внимание тестируем плейер!</h3>
                 <div id="player"></div>


                    
                </div>
        	</div>
        `;

        ROOT_AVTOR.innerHTML = html;
    }
}

const avtorPage = new Avtor();
