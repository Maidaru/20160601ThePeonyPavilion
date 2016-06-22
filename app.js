$(function () {

    // 下決定function，決定場景切換到哪張圖片還有對應的訊息
    function makeDecision(decision) {
        if (currentScene === 1) {
            currentScene = 2;
            scene = {
                message: "第一題",
                yesButtonMessage: "1夢迴鶯囀亂煞年光遍",
                noButtonMessage: "2原來奼紫嫣紅開遍",
                yesButtonShow: true,
                noButtonShow: true,
                position: 0

            };
        } else if (currentScene === 2) {
            if (decision === 1) { //選擇1
                currentScene = 8;
                scene = {
                    message: "答錯了!",
                    yesButtonMessage: "重新開始",
                    noButtonMessage: "",
                    yesButtonShow: true,
                    noButtonShow: false
                };
            } else {
                currentScene = 3;
                scene = {
                    message: "第二題", //選擇2
                    yesButtonMessage: "3錦屏人忒看的這韶光賤",
                    noButtonMessage: "4恰三春好處無人見",
                    yesButtonShow: true,
                    noButtonShow: true,
                    position: 25,
                    music: ("src","music/ZhangZhiHuangCUT02.mp3")
                };
            }

        } else if (currentScene === 3) {
            if (decision === 1) {
                currentScene = 4;
                scene = {
                    message: "第三題", //選擇3
                    yesButtonMessage: "5閒凝眄",
                    noButtonMessage: "6閒庭院",
                    yesButtonShow: true,
                    noButtonShow: true,
                    position: 25,
                    music:("src","music/ZhangZhiHuangCUT03.mp3")
                };
            } else {
                currentScene = 5;
                scene = {
                    message: "答錯了!", //選擇4
                    yesButtonMessage: "重新開始",
                    noButtonMessage: "",
                    yesButtonShow: true,
                    noButtonShow: false
                };
            }

        } else if (currentScene === 4) {
            if (decision === 1) {
                currentScene = 6;
                scene = {
                    message: "遊園成功", //選擇5
                    yesButtonMessage: "再玩一次!",
                    noButtonMessage: "",
                    yesButtonShow: true,
                    noButtonShow: false,
                    position: 25
                };
            } else {
                currentScene = 7;
                scene = {
                    message: "答錯了!", //選擇6
                    yesButtonMessage: "重新開始",
                    noButtonMessage: "",
                    yesButtonShow: true,
                    noButtonShow: false
                };
            }

        }
        //決定完之後 重新繪製畫面
        render(scene);
    }

    // 繪製畫面的函數
    function render(music) {
        $("#mp3Source1").attr("src", "music/ZhangZhiHuangCUT01.mp3" + currentMusic + ".mp3");
        $("#mp3Source2").attr("src", "music/ZhangZhiHuangCUT02.mp3" + currentMusic + ".mp3");
        $("#mp3Source3").attr("src", "music/ZhangZhiHuangCUT03.mp3" + currentMusic + ".mp3");

    }
     
  
    

    function render(scene) {
        $message.text(scene.message);
        $yesButton.text(scene.yesButtonMessage);
        $noButton.text(scene.noButtonMessage);
        // 場景決定要不要顯示yesButton
        if (scene.yesButtonShow)
            $yesButton.show();
        else
            $yesButton.hide();
        // 場景決定要不要顯示noButton
        if (scene.noButtonShow)
            $noButton.show();
        else
            $noButton.hide();

    }

    var scene = {
        message: "與杜麗娘一同遊園",
        yesButtonMessage: "開始",
        noButtonMessage: "",
        yesButtonShow: true,
        noButtonShow: false,
        position: 0,
        moveForward: function (distance) {
            this.position = this.position + distance;
        }
    };
    var currentMusic = 1;
    var currentScene = 1;

    var $message = $("#message");
    var $yesButton = $("#yesButton");
    var $noButton = $("#noButton");
    
   // 當按下Yes的時候 使用決定參數1
    $yesButton.click(function () {
        makeDecision(1);
    });
    // 當按下No的時候 使用決定參數2
    $noButton.click(function () {
        makeDecision(2);
    });

     // 當按下Yes的時候 scene往右移
    $yesButton.on('click',function() {
         $("#scene").animate({right:'30px'}, 2000,
            function(){
             
         });
    });
    // 當按下No的時候 scene往左移
    $noButton.on('click',function () {
        $("#scene").animate({left:'10px'}, 2000);
    });
    
    // 音樂播放
    
    
   
});
