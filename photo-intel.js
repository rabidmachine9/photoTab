window.onload = (event) => {
   var unsplash_image = document.getElementById('unsplash-image');
   console.log('image selected');
   var canvas = document.createElement('canvas').getContext('2d');

    unsplash_image.crossOrigin = "anonymous";  // This enables CORS
    unsplash_image.onload = function (event) {
        try {
            width = this.width;
            height = this.height;
            console.log(width);
            console.log(height);
            canvas.drawImage(unsplash_image, 0, 0);
            var sum_r = 0;
            var sum_g = 0;
            var sum_b = 0;
            var real_index = 0;
            for(var i = 0;i<100;i++){
                random_width = Math.floor(Math.random() * Math.floor(width));
                random_height = Math.floor(Math.random() * Math.floor(height));
                var pix = canvas.getImageData(random_width, random_height, 1, 1).data;
                
                if(pix[0] != 0 || pix[1] != 0 && pix[2] != 0){
                    console.log(pix+"");
                    sum_r += pix[0];
                    sum_g += pix[1];
                    sum_b += pix[2];
                    console.log(sum_r);
                    real_index++;
                    console.log(real_index)
                }          
            }
            var avg_r = Math.round(sum_r / real_index);
            var avg_g = Math.round(sum_g / real_index);
            var avg_b = Math.round(sum_b / real_index);  
            console.log(avg_r, avg_g, avg_b);
            document.body.style.backgroundColor = 'rgb(' + avg_r + ',' + avg_g + ',' + avg_b + ')';  

        } catch (e) {
            alert(e);
        }
    };
};
