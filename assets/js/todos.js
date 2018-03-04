//check off todos by clickikng
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//delete button
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//input new todos
$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		//grab text
		var todosText = $(this).val();
		$(this).val("");
		//create new li to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todosText + "</li>");
	}
});
	
//plus sign
$("h1").on("click", ".fa-plus", function(){
	$("input[type='text']").fadeToggle();
});
