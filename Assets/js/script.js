var lis = document.getElementsByTagName("li");
var plus = $("#plus");
var ligne = $("li");
var input = $("input");
var trash = $(".trash");
var ul = $("ul");

plus.on("click", function(){
	input.fadeToggle();
});


ul.on("click", "li", function(){
	$(this).toggleClass("done");
});

ul.on("click", ".trash", function(e){
	$(this).parent().fadeOut(500, function(){
		 $(this).remove();
	});
	e.stopPropagation();
});

function trashAppear(){
	ul.on("mouseenter", "li", function(){
		$(this).css("transform", "translateX(26px)");
	});

	ul.on("mouseleave", "li", function(){
		$(this).css("transform", "translateX(0px)");
	});
}

trashAppear();

input.on("keypress", function(e){
	if (e.which ===13){
		var newElt = ul.append("<li><span class=\"trash\"><i class=\"fas fa-trash-alt\"></i></span>"+ $(this).val() +"</li>"); 
		input.val("");
	}	
});

