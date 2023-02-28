/* ==============================
ver : 1.00
============================== */



/***********************************************
	* onload
	* 화면 로드 후 onload 함수 실행
************************************************/


$(function(){
	//개발단 화면 로드후 실행
	onload();
});


/***********************************************
	* 온로드 실행 함수
************************************************/
function onload(){
	__fn_toggleBtn();
    __fn_chkboxAll();
}

// 버튼 토글
function __fn_toggleBtn() {
	var $target = $('.btnToggle');
	$target.each(function () {
		$(this).off().on('click', function (event) {
			$target.removeClass("active");
			// 이벤트 버블링 방지
			event.stopPropagation();
			$(this).toggleClass('active')
		})
	});
}

// 전체 선택
function __fn_chkboxAll(){
	$('.checkAll').on('click', function(){
		if($('#checkAll').prop('checked')){
			$("input[name=checkAll]:checkbox").prop("checked", true);
			$(this).siblings("label").addClass("active");
		} else{
			$("input[name=checkAll]:checkbox").prop("checked", false);
			$(this).siblings("label").removeClass("active");
		}
	});
}

//accodian_menu
function toggleAccdian(obj) {
	var $item = $(obj).parent('.acc_item');
	$item.siblings('.acc_item').removeClass('active').children('.acc_cont').stop().slideUp(500);
	$item.toggleClass('active');
	if (!$item.hasClass('active')) {
		$item.children('.acc_cont').stop().slideUp(500)
	} else {
		$item.children('.acc_cont').stop().slideDown(500)
	}
}