let date = 0;
let timer = null;

$(function() {

    $("#start,#stop,#reset").removeClass("disabled");

     // スタートボタン処理
     $("#start").click(function() {
        if(timer == null) { timer = setInterval("showTime()",100); }
		
		$(this).prop('disabled', true);
    	$('#stop,#reset').prop('disabled', false);
        $("#start").addClass("disabled");
        $("#stop").removeClass("disabled");
        $("#reset").removeClass("disabled");
     });

     // ストップボタン処理
     $("#stop").click(function() {
        clearInterval(timer);
		timer = null;
		$(this).prop('disabled', true);
    	$('#start,#reset').prop('disabled', false);
        $("#start").removeClass("disabled");
        $("#stop").addClass("disabled");
        $("#reset").removeClass("disabled");
     });

     // リセットボタン処理
     $("#reset").click(function() {
        $("#timer").text("0:0:0:0");
		clearInterval(timer);
		timer = null;
        date = 0;
		$(this).prop('disabled', true);
    	$('#start,#stop').prop('disabled', false);
        $("#start").removeClass("disabled");
        $("#stop").addClass("disabled");
        $("#reset").addClass("disabled");
     });
});

function showTime() {
     date += 1;

     let millisec = date % 10;
	 let sec = Math.floor(date / 10) % 60;
     let min = Math.floor(date / 600) % 60;
     let hr = Math.floor(date / 36000) % 60;

     // 時間表示
	 $("#timer").text(`${String(hr).padStart(1,'0')}:${String(min).padStart(1,'0')}:${String(sec).padStart(1,'0')}:${String(millisec).padStart(1,'0')}`);
}