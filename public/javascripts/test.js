function login(){
	var name = $("#name").val();

	$.ajax({
		type: 'get',
		url: '/',
		data: {
			name: name
		},
		dataType: 'json',
		success: function(data){
			if(data){
				// alert(data.selection);
				document.body.innerHTML = "<p> You have chosen " + data.selection;
			}
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert("failed " + textStatus + " " + errorThrown);
			return;
		}
	})
}