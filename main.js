$(document).ready(function(){
    var widthBlock = '400';
    var heightBlock = '400';

        $(".block1").css({"width":widthBlock,"height": heightBlock});
        
        function ClickBlock(){
            // var widths =  $(".block1").css.width;
            $width = $('.block1').width();
            $height = $('.block1').height();
            $(".block1").on("click",function(){
                $("body").addClass('body1');
                var clone ;
                $(".block1").css({"width": $width/2,"height": $height/2});
                clone = $(".block1").clone();
                clone.appendTo("body"); 
             });
            
}
        ClickBlock();
});