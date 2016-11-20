$(document).ready(function(){
    var widthBlock = '200';
    var heightBlock = '200';

        $(".block1").css({"width":widthBlock,"height": heightBlock});

        function ClickBlock(){
           
            $(".block1").on("click",function(){
            $("body").addClass('body1');
                var clone ;
                clone = $(".block1").clone();
                $(clone).on("click",function(){
                            $width = $('.block1').width();
                            $height = $('.block1').height();
                            var clone ;
                            clone = $(".block1").clone();
                                $(clone).on("click",function(){
                                    $width = $('.block1').width();
                                    $height = $('.block1').height();
                                    var clone ;
                                    clone = $(".block1").clone();
                                       $(clone).on("click",function(){
                                            $width = $('.block1').width();
                                            $height = $('.block1').height();
                                            var clone ;
                                            clone = $(".block1").clone();
                                                
                                            clone.appendTo("body"); 
                                            $(".block1").css({"width": $width/2,"height": $height/2});
                                });       
                                    clone.appendTo("body"); 
                                    $(".block1").css({"width": $width/2,"height": $height/2});
                                });      
                            clone.appendTo("body"); 
                            $(".block1").css({"width": $width/2,"height": $height/2});
               });      
                clone.appendTo("body"); 
                 $width = $('.block1').width();
                 $height = $('.block1').height();
                $(".block1").css({"width": $width/2,"height": $height/2});
             });      

}
        ClickBlock();
});