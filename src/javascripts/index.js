// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO

const disrand = function(){
    let r = Math.random()
    if(r<.5){
        document.write('<div class="red box"></div>');
    }else{
        document.write('<div class="blue box"></div>');
    }
}

for(let i = 0; i < 50; i++){
    disrand();
}

alert(square(10));