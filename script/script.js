'use strict';
document.addEventListener('DOMContentLoaded', function(){
    const DOMElement = function(selector, height, width, bg, fontSize){
        console.log(selector[0]);
        let el;
        if(selector[0] === '#'){
            el = document.createElement('p');
            el.id = selector.slice(1);
        } else if(selector[0] === '.'){
            el = document.createElement('div');
            el.classList.add(selector.slice(1));
            
        }
        height = height;
        width = width;
        bg = bg;
        fontSize = fontSize;
        el.style.cssText = `height:${height}; 
                            width:${width};
                            background-color:${bg};
                            font-size:${fontSize};
                            display:block;
                            position:absolute;`;
        document.body.prepend(el);
        console.log(document.body);
    };
    const element = new DOMElement('.eldfgdf','100px','100px','red','2em');
    console.log(element);

})