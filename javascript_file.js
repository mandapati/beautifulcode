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

		$("#orders").append("<div class=\"list droptrue\">" +
			"<h3 class=\"list-title\">" + listName + "</h3>" +
			" <ul class=\"list-items droptrue\">" +
			"</ul> " +
			" <button class=\"add-card-btn btn\">Add a card</button>" +
			"</div>");
		$("#addlistblock").hide();
		initSortable();
	}
	$(".add-card-btn").click(function () {
		$("#AddCard").show();
	});

	$("#CardList").on("submit", function (event) {
		event.preventDefault();
		addCardList();
	});

	function addCardList() {
		var Cardname = $('#Cardname').val();
		
		$(".list-items").append("<li>" + Cardname + "</li>");
		$("#AddCard").hide();
	}


	$("ul.list-items li").mouseenter(function (event) {
		var mouseenterev = $(this);
		$(this).append('<div class="icons_edit"><p class=\"ui-icon ui-icon-trash\" style=\"float: right;\"></p><p class=\"ui-icon ui-icon-pencil\" style=\"float: right;\"></p></div>');
	});
	$("ul.list-items li").mouseleave(function () {
		$(".icons_edit").empty();
	});



	$('li').click(function () {
		$(this).remove();
	});



});