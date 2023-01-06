

class Avtor {
    render() {
        const html = `
        	<div class="avtor-container">
               
            
                




<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://sun9-52.userapi.com/impg/ApdUBTG5xaLwULljhibLeK4Us4f1MJevHB8i2Q/JgDNMrLJ0_Y.jpg?size=807x498&quality=95&sign=9b4beb2ea3392b8933ad7114947afd24&type=album" alt="Первый слайд">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://sun9-52.userapi.com/impg/ApdUBTG5xaLwULljhibLeK4Us4f1MJevHB8i2Q/JgDNMrLJ0_Y.jpg?size=807x498&quality=95&sign=9b4beb2ea3392b8933ad7114947afd24&type=album" alt="Второй слайд">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://sun9-52.userapi.com/impg/ApdUBTG5xaLwULljhibLeK4Us4f1MJevHB8i2Q/JgDNMrLJ0_Y.jpg?size=807x498&quality=95&sign=9b4beb2ea3392b8933ad7114947afd24&type=album" alt="Третий слайд">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

 <div class="avtor-message">
<br>

    <h3 id="blink1">Внимание плеер в режиме тестирования!</h3>

<br>
                 <div id="player1"></div>
                 <div id="playlist_container"></div>





<br>










                    
                </div>
        	</div>
        `;

        ROOT_AVTOR.innerHTML = html;
    }
}

const avtorPage = new Avtor();
