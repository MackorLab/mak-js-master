

class Avtor {
    render() {
        const html = `
        	<div class="error-container">
                <div class="error-message">
                    <h3>Тестируем </h3>
                    <p>плейер!</p>
                    
                    
                    <div id="player"></div>

<script>
   var player = new Playerjs({id:"player", file:"https://www.youtube.com/watch?v=uEQGUT7aKDg"});
</script>
                    
                </div>
        	</div>
        `;

        ROOT_AVTOR.innerHTML = html;
    }
}

const avtorPage = new Avtor();
