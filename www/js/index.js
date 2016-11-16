function initApp(){
	console.log("fuck");
	alert("fuck");
	$("#btnLogin").on("click", login);
	$("#btnLogout").on("click", logout);
	$("#btnShare").on("click", share);
	$("#btnAppRequest").on("click", fbRequest);
	$("#btnAppInvite").on("click", fbInvite);
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

function fbRequest(){
	facebookConnectPlugin.showDialog(
				{
					method: "apprequests",
					message: "Come on man, check out my application.",
					data: "",
					title: "epwebapp",
					actionType: 'askfor',
					filters: 'app_non_users'
				},
				fbShareSuccess, 
				function (error) { alert("" + error) }
	)
}

function fbInvite(){
	facebookConnectPlugin.appInvite(
    {
        url: "https://fb.me/1303938399678942",
        picture: "http://example.com/image.png"
    },
    function(obj){
        if(obj) {
            if(obj.completionGesture == "cancel") {
                // user canceled, bad guy
				 alert("cancel");
            } else {
                // user really invited someone :)
				alert("success to invite");
            }
        } else {
            // user just pressed done, bad guy
			alert("just press done");
        }
    },
    function(error){
        // error
        alert("" + error);
    }
);
}