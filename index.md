<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
	<style type="text/css">
		*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
    position: relative;
    background-image: url(./bgc.jpg);
  }
.container,
.row {
  height: 100vh;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
   
  grid-gap: 15px;
}

.box {
  width: auto;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}


h1 {
  color: aliceblue;
}

	</style>
</head>
<body>
	
<div class="container">
    <div class="row justify-content-center align-items-center">
        <div class="col col-lg-6">
            <div class="text-center">
                <h1 id="one" class="uppercase text-white">
                    Player One Turn
                </h1>
                <h1 id="two" style="display: none" class="uppercase text-white">
                    Player Two Turn
                </h1>
            </div>

            <div class="grid" id="box">

                
       	 </div>
	</div>

        <div class="col col-lg-6 text-center">

            <h1 class="text-uppercase" id="over"> </h1>
            <h3 id="game" class="text-white"></h3>
            <button onclick="reloadGame()" class="btn btn-info text-uppercase pl-5 pr-5">
                Reload Game
            </button>
        </div>
    </div>
</div>



	<script type="text/javascript" src="game.js"></script>
</body>
</html>
