 $(document).ready(function(){
	$("#function1").on("click", function(){
		var gridSize=prompt("Enter the size of the grid");
		var gridDim= (800/gridSize)-6;
		$(".container").html("");
		for(i=0; i<gridSize; i++){
			for(j=0; j<gridSize;j++){
				$(".container").append("<div class='gridSquare'></div>");
			}
			$(".container").append("<div class='newRow'></div>");
		}
		$(".gridSquare").width(gridDim);
		$(".gridSquare").height(gridDim);
		
		$(".gridSquare").on("mouseover", function(){
			$(this).css("background-color", "blue");
		});	
	});
	
	$("#function2").on("click", function(){
		var gridSize=prompt("Enter the size of the grid");
		var gridDim= (800/gridSize)-6;
		$(".container").html("");
		for(i=0; i<gridSize; i++){
			for(j=0; j<gridSize;j++){
				$(".container").append("<div class='gridSquare'></div>");
			}
			$(".container").append("<div class='newRow'></div>");
		}
		$(".gridSquare").width(gridDim);
		$(".gridSquare").height(gridDim);
		
		$(".gridSquare").hover(function(){
			$(this).fadeTo(400, 0);
		},
		function(){
			$(this).fadeTo(400, 1);
		}
		);
	});
	
	$("#function3").on("click", function(){
		var gridSize=prompt("Enter the size of the grid");
		var gridDim= (800/gridSize)-6;
		$(".container").html("");
		for(i=0; i<gridSize; i++){
			for(j=0; j<gridSize;j++){
				$(".container").append("<div class='gridSquare'></div>");
			}
			$(".container").append("<div class='newRow'></div>");
		}
		$(".gridSquare").width(gridDim);
		$(".gridSquare").height(gridDim);
		
		$(".gridSquare").on("mouseover", function(){
			var random="#"+Math.floor(Math.random()*9)+Math.floor(Math.random()*9)+Math.floor(Math.random()*9)+Math.floor(Math.random()*9)+Math.floor(Math.random()*9)+Math.floor(Math.random()*9);
			$(this).css("background-color", random);
		});	
	});
	
	$("#function4").on("click", function(){
		var gridSize=prompt("Enter the size of the grid");
		var gridDim= (800/gridSize)-6;
		$(".container").html("");
		for(i=0; i<gridSize; i++){
			for(j=0; j<gridSize;j++){
				$(".container").append("<div class='gridSquare'></div>");
			}
			$(".container").append("<div class='newRow'></div>");
		}
		$(".gridSquare").width(gridDim);
		$(".gridSquare").height(gridDim);
		
		$(".gridSquare").on("mouseover", function(){
			var thisOpacity= $(this).css("opacity");
			if(thisOpacity>0){
				$(this).css("opacity", thisOpacity-0.1);
			}
		});	
	});
});