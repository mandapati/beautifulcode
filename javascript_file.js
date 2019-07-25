$(document).ready(function () {
	/*drag and drop of items between lists  Start here */
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
		});

		$(".list-items").disableSelection();
	}

	initSortable();
	/*drag and drop of items between lists  End here */

	$("#btnCreateNewList").click(function () {
		$("#addlistblock").show();
	});

	$(".Close").click(function () {
		$("#addlistblock").hide();
	});

	$(document).on("click", ".CardClose", function () {
		$(".addformcard").remove();
	});



	$(".Close").click(function () {
		$("#addlistblock").hide();
	});
	/* To add a list code start here */
	$("#formList").on("submit", function (event) {
		event.preventDefault();
		addList();
	});


	function addList() {
		bodyWidth = $("body").width();
		nextWidth = bodyWidth - 300;
		$('body').css('width', bodyWidth + 'px');
		var listName = $('#listname').val();
		var listcont = $('.list').length + 1;
		//$("#orders").append('<div class="list" id="list'+listcont+'"><h3 class="list-title">'+listName+'</h3><ul class="list-items droptrue"></ul><button class="add-card-btn btn">Add a card</button></div>');
		$(".addlistdiv:last").before('<div class="list" id="list' + listcont + '"><h3 class="list-title">' + listName + '</h3><ul class="list-items droptrue"></ul><button class="add-card-btn btn">Add a card</button></div><div class="addformcard"></div>');
		$("#addlistblock").hide();
		initSortable();
	}
	/* To add a list code start End here */



	$(document).on("submit", "#CardList", function (event) {
		event.preventDefault();
		var list = $(this).attr('list-id');
		addCardList(list);
	});






	function addCardList(list) {
		var Cardname = $('#Cardname').val();
		if ($.trim(Cardname) != "") {
			$("#" + list + " ul").append("<li><span>" + Cardname + "</span></li>");
			$("#AddCard").hide();
		}
	}
	/* On Mouseover to show edit and delete icons start */
	$(document).on("mouseenter", "ul.list-items li", function () {
		var mouseenterev = $(this);
		$(this).append('<div class="icons_edit"><p class="ui-icon ui-icon-trash trsh" style="float: right;"></p><p class="ui-icon ui-icon-pencil" style="float: right;"></p></div>');
	});

	$(document).on("mouseleave", "ul.list-items li", function () {
		$(".icons_edit").remove();
	});
	/* On Mouseover to show edit and delete icons End */

	/* delete items from the list start */
	$(document).on("click", ".ui-icon-trash", function () {
		$(this).closest('li').remove();
	});
	/* delete items from the list End */

	/* edit item description Start */
	$(document).on("click", ".ui-icon-pencil", function () {

		var li_text = $(this).closest('li').children('span').html();
		$(this).closest('li').children('span').hide();
		$(this).closest('li').children('.icons_edit').hide();
		$(this).closest('li').append("<div class='editdiv'><div> <input class='txtedit' style='width:100%;height:40px;' type='text' value='" + li_text + "' > </div> <div><button class='text_save'>Save</button></div> </div>   ");
	});

	$(document).on("keyup", ".txtedit", function () {
		$(this).closest('li').children('span').html($(this).val());
	});
	$(document).on("click", ".text_save", function () {
		$(this).closest('li').children('.editdiv').hide();
		$(this).closest('li').children('span').show();
	});
	/* edit item description End */


	$(document).on("click", ".add-card-btn", function (event) {
		$("div.addformcard").remove();
		var list = $(this).parent('div').attr('id');
		$(this).after('<div style="display: none; margin-top:5px;width: 150px;" id="AddCard" class="addformcard"><form id="CardList" list-id="' + list + '" ><input  type="text" id="Cardname" name="Cardname" placeholder="Enter Card title..." autocomplete="off" dir="auto" maxlength="160"><div class="list-add-controls u-clearfix"><input class="button" type="submit" value="Add Card"><span class="CardClose" style="color: #414141;font-weight: bold;font-family: Constantia, Lucida Bright,DejaVu Serif, Georgia, serif; font-size: 14px;">X</span></div></form></div>');
		$('#AddCard').show();


	});

});