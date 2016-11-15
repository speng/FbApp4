function initApp(){
	console.log("fuck");
	alert("fuck");
	$("#btnLogin").on("click", login);
	$("#btnLogout").on("click", logout);
	$("#btnShare").on("click", share);
	//document.addEventListener('deviceready', initApp, false);
}

function login(){
	facebookConnectPlugin.login(["public_profile","user_friends","email"],
        fbLoginSuccess,
        function (error) { alert("" + error) }
    );
}

var fbLoginSuccess = function (userData) 
{
    alert("UserInfo: " + JSON.stringify(userData));
}

function logout(){
	facebookConnectPlugin.logout(fbLogoutSuccess, 
		function (error) { alert("" + error) }
	)
}

function fbLogoutSuccess(){
	alert("Logout Success");
}

function share(){
	facebookConnectPlugin.showDialog(
				{
					method: "share",
					href: "http://example.com",
					caption: "Such caption, very feed.",
					description: "Much description",
					picture: 'http://example.com/image.png',
					share_feedWeb: true, // iOS only
				},
				fbShareSuccess, 
				function (error) { alert("" + error) }
	)
}

function fbShareSuccess(){
	alert("success share");
}