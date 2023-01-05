

class Avtor {
    render() {
        const html = `
        	<div class="error-container">
                <div class="error-message">
                    <h3>Нет доступа!</h3>
                    <p>Попробуйти зайти позже</p>
                </div>
        	</div>
        `;

        ROOT_AVTOR.innerHTML = html;
    }
}

const avtorPage = new Avtor();
