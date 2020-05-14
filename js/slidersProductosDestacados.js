var current = 0;
    var imagenes = new Array();
    
    $(document).ready(function() {
        var numImages = 6;
        if (numImages <= 3) {
            $('.right-arrowProductosDestacados').css('display', 'none');
            $('.left-arrowProductosDestacados').css('display', 'none');
        }
         
        $('.left-arrowProductosDestacados').on('click',function() {
            if (current > 0) {
                current = current - 1;
            } else {
                current = numImages - 3;
            }
            
            $(".carruselProductosDestacados").animate({"left": -($('#productDestacado_'+current).position().left)}, 600);
            
        
            
            return false;
        });
    
        $('.left-arrowProductosDestacados').on('hover', function() {
            $(this).css('opacity','0.5');
        }, function() {
            $(this).css('opacity','1');
        });
    
        $('.right-arrowProductosDestacados').on('hover', function() {
            $(this).css('opacity','0.5');
        }, function() {
            $(this).css('opacity','1');
        });
    
        $('.right-arrowProductosDestacados').on('click', function() {
            if (numImages > current + 3) {
                current = current+1;
            } else {
                current = 0;
            }
            
            $(".carruselProductosDestacados").animate({"left": -($('#productDestacado_'+current).position().left)}, 600);
            
            
            
            return false;
        }); 
     });