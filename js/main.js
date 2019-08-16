
$(document).ready(function(){

	//Code to center the subscription pup-up box
	$box = $('#box');
	$box.css({
		'left' : '50%',
		'top' : '50%',
		'margin-left' : -$box.width()/2 + 'px',
		'margin-top' : -$box.height()/2 + 'px'
	});


	//Subscription pup-up
	$('.start_btn').click(function(){
		$('#lightbox').width($(window).width()).height($(window).height()).fadeIn(200);
		$('#box').fadeIn(200);

		return false;
	});

	$('#lightbox, .close').click(function(){
		$('#lightbox').width(0).height(0).fadeOut(200);
		$('#box').fadeOut(200);

		return false;
	});


	//비디오 객체 가져오기 
	var player=$('video')[0];
	// var player=document.getElementById('video');
	console.log(player);

	//재생/일시정지 
	$('#btn-play-pause').click(function(){
		console.log(player.paused);                
		if(player.paused){//일시정지 상태일때
			player.play();
			$(this).find('i').text('pause');
		}else{//재생 상태일때
			player.pause();
			$(this).find('i').text('play_arrow');
		}
	})

	//다시시작 
	$('#btn-replay').click(function(){
		// 현재 플레이되고 있는 시간을 0으로 초기화
		player.currentTime=0;
		player.play();
		$('#btn-play-pause i').text('pause');
	})

	//음소거/해제 
	$('#btn-volume').click(function(){
	   if(player.muted){//음소거 상태이면 
			player.muted=false;
			$(this).find('i').text('volume_up');
	   }else{//음소거 상태가 아니면(소리가 나오고 있다면)
			player.muted=true;
			$(this).find('i').text('volume_off');
	   }
	})

	//전체화면/기본화면
	$('#btn-fullscreen').click(function(){
	   if($(this).text()=='fullscreen'){//아이콘이 풀스크린이면
			$('body').addClass('fullscreen');
			$(this).find('i').text('fullscreen_exit');
	   }else{//아이콘이 풀스크린이 아니면 
			$('body').removeClass('fullscreen');
			$(this).find('i').text('fullscreen');
	   }
	})

});
