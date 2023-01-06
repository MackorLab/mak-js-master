

class Avtor {
    render() {
        const html = `
        	<div class="avtor-container">
                <div class="avtor-message">
                <h3 id="blink1">Внимание тестируем плейер!</h3>
                <br>
                 <div id="player1"></div>
<div id="playlist_container"></div>


                    
                </div>
        	</div>
        `;

        ROOT_AVTOR.innerHTML = html;
    }
}

const avtorPage = new Avtor();
