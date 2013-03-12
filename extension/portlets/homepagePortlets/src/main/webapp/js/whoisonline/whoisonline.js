(function($) {

	var activity = $('#onlineList input[name=activity]').val();
	var connect = $('#onlineList input[name=connect]').val();
	
	$('#onlineList li').each(function() {
		var userId = $(this).find("input[name=userId]").val();
		var userAvatar = $(this).find("input[name=userAvatar]").val();
		var profileURL = $(this).find("input[name=profileURL]").val();
		var fullName = $(this).find("input[name=fullName]").val();
		var userPosition = $(this).find("input[name=userPosition]").val();
		var userIdentity = $(this).find("input[name=userIdentity]").val();
		var userRelationId = $(this).find("input[name=userRelationId]").val();
		
		showToolTip(userId, userAvatar, profileURL, fullName, userPosition, activity, connect)
	});
	
	function showToolTip(Id,Avatar,ProfileUrl,FullName,Position,activity,connect){
		console.log("show tooltip " + Id);
		$("#"+Id).tipTip({
			conent: "<div>hello would</div>",defaultPosition: "left",keepAlive: true ,maxWidth: "240px"
		});
	}

//	$("#${user.getId()}connect a.connect").live("click", function(){
//	$.getJSON("/rest/homepage/intranet/people/contacts/connect/${user.getIdentity()}", null);
//	$("#${user.getId()}connect").fadeOut(500, function () {
//	$("#${user.getId()}connect").html("<div id='connectMessge'>${messageLabel}</div>");
//	$("#${user.getId()}connect").fadeIn(500, function() {});
//	});
//	var refresh = function() {
//	$("#onlineList").each(function() {
//	$(this).jzLoad("WhoIsOnLineController.users()");
//	});
//	};

//	setTimeout(refresh, 500);


//	});

//	$("#${user.getId()}accept a.connect").live("click", function(){
//	$.getJSON("/rest/homepage/intranet/people/contacts/confirm/${user.getRelationId()}", null);
//	$("#${user.getId()}accept").hide();
//	var refresh = function() {
//	$("#onlineList").each(function() {
//	$(this).jzLoad("WhoIsOnLineController.users()");
//	});
//	};

//	setTimeout(refresh, 500);

//	});

	var refresh = function() {
		$("#onlineList").each(function() {
			$(this).jzLoad("WhoIsOnLineController.users()");
			
			$('#onlineList li').each(function() {
				var userId = $(this).find("input[name=userId]").val();
				var userAvatar = $(this).find("input[name=userAvatar]").val();
				var profileURL = $(this).find("input[name=profileURL]").val();
				var fullName = $(this).find("input[name=fullName]").val();
				var userPosition = $(this).find("input[name=userPosition]").val();
				var userIdentity = $(this).find("input[name=userIdentity]").val();
				var userRelationId = $(this).find("input[name=userRelationId]").val();
				showToolTip(userId, userAvatar, profileURL, fullName, userPosition, activity, connect)
			});
		});
	};
	// Wait 1/2 second (not realistic of course)
	// And we should use setInterval with 60 seconds
	setTimeout(refresh, 500);
	setInterval(refresh,60000);
})($);
