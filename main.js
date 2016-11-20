$(document).ready(function(){
        function ClickBlock(w, h){
            $(".block1, .block2").on("click",function(){
                $(".block1").addClass("block3");
                $(".block2").addClass("block3");
                $("body").addClass("body1");
                // $(".block1").removeClass("block1");
                // $(".block2").removeClass("block2");

             });
             var parent = $(".block4").parent()
            $(".block4").on("click",function(){
                 $(".block1").removeClass('block3');

             });
}
        ClickBlock();
});