var roles = ENV.current_user_roles;

if (roles.indexOf('teacher') != -1 || roles.indexOf('admin') != -1)
{
	var content = $("#content");
	content.prepend ("<button id='captionSIKT'>Caption</button>");
	$("#captionSIKT").click(function(){

		parent.tinymce.activeEditor.execCommand('mceInsertContent', false, '<div style="float: right;">\
	<figure><img src="https://it.wisc.edu/wp-content/uploads/Canvas-675x300-News-Images.png"\
	 alt="SKRIV INN DET DU MÅTTE ØNSKE"\
	 width="700" height="620"/>\
	 <figcaption> <a id="" class="" title="" href="https://www.vg.no">\
	 SKRIV INN DET DU MÅTTE ØNSKE</a> </figcaption></figure>\
	</div>');
	});

	// uob-info
	content.prepend ("<button id='infoSIKT'>Info</button>");
	$("#infoSIKT").click(function(){

		tinymce.activeEditor.execCommand('mceInsertContent', false, '<p class="uob-info">Content for the info box</p>');
	});
}
