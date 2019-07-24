$(document).ready(function () {
	function initSortable() {
		$(".list").sortable({
			connectWith: ".list",
			handle: ".list-title",
		});


		$("ul.droptrue").sortable({
			connectWith: "ul"
		});

		$("ul.dropfalse").sortable({
			connectWith: "ul",
			//                    dropOnEmpty: false
		});

		$(".list-items").disableSelection();
	}

	initSortable();

	$("#btnCreateNewList").click(function () {
		$("#addlistblock").show();
	});

	$(".Close").click(function () {
		$("#addlistblock").hide();
	});
	
	$(".CardClose").click(function () {
		$("#AddCard").hide();
	});

	$(".Close").click(function () {
		$("#addlistblock").hide();
	});
	$("#formList").on("submit", function (event) {
		event.preventDefault();
		addList();
	});

	function addList() {
		bodyWidth = $("body").width();
		nextWidth = bodyWidth - 600;
		$('body').css('width', bodyWidth + 'px');

		var listName = $('#listname').val();
		var listcont = $('.list').length+1;   
		$("#orders").append('<div class="list" id="list'+listcont+'"><h3 class="list-title">'+listName+'</h3><ul class="list-items droptrue"></ul><button class="add-card-btn btn">Add a card</button></div>');
		$("#addlistblock").hide();
		initSortable();
	}
	
	$(document).on('click','.add-card-btn',function(){ 
	    $("#AddCard").show();
		var list = $(this).parent('div').attr('id');
		 $("#CardList").attr('list-id',list);
	});
   

	$("#CardList").on("submit", function (event) {
		event.preventDefault();
		var list =  $(this).attr('list-id'); 
		addCardList(list);
	});

	function addCardList(list) {
		var Cardname = $('#Cardname').val();
		if($.trim(Cardname)!=""){
		$("#"+list+" ul").append("<li><span>" + Cardname + "</span></li>");
		$("#AddCard").hide();
		}
	}

$(document).on("mouseenter", "ul.list-items li", function() {
		var mouseenterev = $(this);
		$(this).append('<div class="icons_edit"><p class="ui-icon ui-icon-trash trsh" style="float: right;"></p><p class="ui-icon ui-icon-pencil" style="float: right;"></p></div>');
});

	$(document).on("mouseleave", "ul.list-items li", function() {  
		$(".icons_edit").remove();
	});


$(document).on("click", ".ui-icon-trash", function() {  
		 $(this).closest('li').remove();
	});

  $(document).on("click", ".ui-icon-pencil", function() {   
    
	var li_text = $(this).closest('li').children('span').html();  
	$(this).closest('li').children('span').hide();
	$(this).closest('li').children('.icons_edit').hide();
	$(this).closest('li').append("<div class='editdiv'><div> <input class='txtedit' style='width:100%;height:40px;' type='text' value='"+li_text+"' > </div> <div><button class='text_save'>Save</button></div> </div>   ");
   });
   
  $(document).on("keyup", ".txtedit", function() {   
  $(this).closest('li').children('span').html($(this).val()); 
 });
   $(document).on("click", ".text_save", function() {   
  $(this).closest('li').children('.editdiv').hide(); 
  $(this).closest('li').children('span').show();
 });
 
});