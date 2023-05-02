
// ジャンケンゲーム
let win = 0;
let lose = 0;
let shizuku = "original";

$("#gu").on('click', function(){
    var random = Math.floor(Math.random() * 3 + 1);
 
    if(random == 1)
    {
        $("#cpu").html("✊");
        $("#result").html("あいこ");
        $("#shizuku").attr("src","images/" + shizuku + "/draw-200.png");
    }
    else if(random == 2)
    {
        lose++;
        $("#cpu").html("✌️");
        $("#result").html("負け😭");
        $("#shizuku").attr("src","images/" + shizuku + "/win-200.png");
    }
    else if(random == 3)
    {
        win++
        $("#cpu").html("✋");
        $("#result").html("勝ち👑");
        $("#shizuku").attr("src","images/" + shizuku + "/lose-200.png");
    }

    $("#score").html(win + "勝" + lose + "敗");
});

$("#choki").on('click', function(){
    var random = Math.floor(Math.random() * 3 + 1);
 
    if(random == 1)
    {
        win++
        $("#cpu").html("✊");
        $("#result").html("勝ち👑");
        $("#shizuku").attr("src","images/" + shizuku + "/lose-200.png");
    }
    else if(random == 2)
    {
        $("#cpu").html("✌️");
        $("#result").html("あいこ");
        $("#shizuku").attr("src","images/" + shizuku + "/draw-200.png");
    }
    else if(random == 3)
    {
        lose++;
        $("#cpu").html("✋");
        $("#result").html("負け😭");
        $("#shizuku").attr("src","images/" + shizuku + "/win-200.png");
    }

    $("#score").html(win + "勝" + lose + "敗");
});

$("#pa").on('click', function(){
    var random = Math.floor(Math.random() * 3 + 1);
 
    if(random == 1)
    {
        lose++;
        $("#cpu").html("✊");
        $("#result").html("負け😭");
        $("#shizuku").attr("src","images/" + shizuku + "/win-200.png");
    }
    else if(random == 2)
    {
        win++
        $("#cpu").html("✌️");
        $("#result").html("勝ち👑");
        $("#shizuku").attr("src","images/" + shizuku + "/lose-200.png");
    }
    else if(random == 3)
    {
        $("#cpu").html("✋");
        $("#result").html("あいこ");
        $("#shizuku").attr("src","images/" + shizuku + "/draw-200.png");
    }

    $("#score").html(win + "勝" + lose + "敗");
});

$("#original").on('click', function(){
    shizuku = "original";
    $("#result").html("　　　　");
    $("#cpu").html("🔸");
    $("#shizuku").attr("src","images/" + shizuku + "/normal-200.png");
})

$("#idol").on('click', function(){
    shizuku = "idol";
    $("#result").html("　　　　");
    $("#cpu").html("🔸");
    $("#shizuku").attr("src","images/" + shizuku + "/normal-200.png");
});

$("#miko").on('click', function(){
    shizuku = "miko";
    $("#result").html("　　　　");
    $("#cpu").html("🔸");
    $("#shizuku").attr("src","images/" + shizuku + "/normal-200.png");
});