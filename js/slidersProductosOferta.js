var current = 0;
    var imagenes = new Array();
    
    $(document).ready(function() {
        var numImages = 6;
        if (numImages <= 3) {
            $('.right-arrowProductosOferta').css('display', 'none');
            $('.left-arrowProductosOferta').css('display', 'none');
        }
         
        $('.left-arrowProductosOferta').on('click',function() {
            if (current > 0) {
                current = current - 1;
            } else {
                current = numImages - 3;
            }
            
            $(".carruselProductosOferta").animate({"left": -($('#productOferta_'+current).position().left)}, 600);
            
        
            
            return false;
        });
    
        $('.left-arrowProductosOferta').on('hover', function() {
            $(this).css('opacity','0.5');
        }, function() {
            $(this).css('opacity','1');
        });
    
        $('.right-arrowProductosOferta').on('hover', function() {
            $(this).css('opacity','0.5');
        }, function() {
            $(this).css('opacity','1');
        });
    
        $('.right-arrowProductosOferta').on('click', function() {
            if (numImages > current + 3) {
                current = current+1;
            } else {
                current = 0;
            }
            
            $(".carruselProductosOferta").animate({"left": -($('#productOferta_'+current).position().left)}, 600);
            
            
            
            return false;
        }); 
     });