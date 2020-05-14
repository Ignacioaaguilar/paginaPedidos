var current = 0;
    var imagenes = new Array();
    
    $(document).ready(function() {
        var numImages = 6;
        if (numImages <= 3) {
            $('.right-arrowProductosCortoVencimiento').css('display', 'none');
            $('.left-arrowProductosCortoVencimiento').css('display', 'none');
        }
         
        $('.left-arrowProductosCortoVencimiento').on('click',function() {
            if (current > 0) {
                current = current - 1;
            } else {
                current = numImages - 3;
            }
            
            $(".carruselProductosCortoVencimiento").animate({"left": -($('#productCortoVencimiento_'+current).position().left)}, 600);
            
        
            
            return false;
        });
    
        $('.left-arrowProductosCortoVencimiento').on('hover', function() {
            $(this).css('opacity','0.5');
        }, function() {
            $(this).css('opacity','1');
        });
    
        $('.right-arrowProductosCortoVencimiento').on('hover', function() {
            $(this).css('opacity','0.5');
        }, function() {
            $(this).css('opacity','1');
        });
    
        $('.right-arrowProductosCortoVencimiento').on('click', function() {
            if (numImages > current + 3) {
                current = current+1;
            } else {
                current = 0;
            }
            
            $(".carruselProductosCortoVencimiento").animate({"left": -($('#productCortoVencimiento_'+current).position().left)}, 600);
            
            
            
            return false;
        }); 
     });