document.body.setAttribute('style', 'padding: 0; margin: 0;');

window.onresize = resize;

function resize(){

    if(document.getElementById('mobileNav')){

        var aspectR = window.innerWidth/window.innerHeight;
        var buttons = document.getElementsByClassName('navButtons');

        if(aspectR < 0.90 || window.innerWidth < 750){
            for(i = 0; i < buttons.length; i++){
                buttons[i].setAttribute('style', 'display: none;');
                if(document.getElementById('mobileNavButton')){
                    document.getElementById('mobileNavButton').setAttribute('style', 'display:block;');
                }
            }
        }else{
            if(!navToggled){
                for(i = 0; i < buttons.length; i++){
                    buttons[i].setAttribute('style', 'display: block;');
                }
                if(document.getElementById('mobileNavButton')){
                    document.getElementById('mobileNavButton').setAttribute('style', 'display:none');
                }
            }
        }
    }
}

function addMobileNav(min_width){
    
    mobileNav = true;

    var mobileNavButton = document.createElement('button');
    mobileNavButton.id='mobileNavButton';
    mobileNavButton.onclick = toggleMobileNav;
    var imageN = document.createElement('img'); imageN.setAttribute('src', 'menu-icon.png'); imageN.setAttribute('style', 'width: 48px; height: 48px;');
    mobileNavButton.appendChild(imageN);
    document.getElementById('navbar').appendChild(mobileNavButton);

    var mobileNav = document.createElement('div'); mobileNav.id='mobileNav'
    document.body.appendChild(mobileNav);

    var navButtons = document.getElementsByClassName('navButtons');
    for(i = 0; i < navButtons.length; i++){
        var button = document.createElement('button');
        button.setAttribute('onclick', 'goToPage("'+navButtons[i].innerHTML+'")');
        var text = document.createTextNode(navButtons[i].innerHTML);
        button.appendChild(text);
        button.className="mobileNavButtons";
        mobileNav.appendChild(button);
    }

    navCheck();

}

var navToggled = false;

function toggleMobileNav(){

    if(navToggled){
        navToggled = false;
        document.getElementById('mobileNav').setAttribute('style', 'height: 0%;');
    }else{
        navToggled = true;
        document.getElementById('mobileNav').setAttribute('style', 'height: 100%;');
    }

    navCheck();

}

function addNav(height, style, title, addPaddingAuto){
    switch(style){
        case('right'):
            //NORMAL NAVBAR
            var navbar = document.createElement('div'); navbar.id='navbar';
            var h1Obj = document.createElement('a'); h1Obj.className='pageTitle'; h1Obj.setAttribute('href', 'index.html'); var text1 = document.createTextNode(title);
            h1Obj.appendChild(text1);
            navbar.appendChild(h1Obj);
            document.body.appendChild(navbar);
            break;
        case('center'):
            var navbar = document.createElement('div'); navbar.id='navbar';
            var h1Obj = document.createElement('h1'); h1Obj.className='pageTitle'; var text1 = document.createTextNode(title);
            h1Obj.appendChild(text1);
            navbar.appendChild(h1Obj);
            document.body.appendChild(navbar);
            break;
    }

    if(addPaddingAuto){
        addPadder(height);
    }
}

function addTitle(text, subtitle, height){
    var div = document.createElement('div'); div.className='title-div'; div.setAttribute('style', 'height:'+height+';');

    //ACTUAL TITLE
    var textNode = document.createTextNode(text);
    var title = document.createElement('h1'); title.appendChild(textNode); title.className='header-title';
    div.appendChild(title);

    //SUBTITLE
    var textNode = document.createTextNode(subtitle);
    var title = document.createElement('h1'); title.appendChild(textNode); title.className='header-subtitle';
    div.appendChild(title);
    document.body.appendChild(div);
}

function navCheck(){
    if(document.getElementById('mobileNav')){

        var aspectR = window.innerWidth/window.innerHeight;
        var buttons = document.getElementsByClassName('navButtons');

        if(aspectR < 0.90 || window.innerWidth < 750){
            for(i = 0; i < buttons.length; i++){
                buttons[i].setAttribute('style', 'display: none;');
                if(document.getElementById('mobileNavButton')){
                    document.getElementById('mobileNavButton').setAttribute('style', 'display:block;');
                }
            }
        }else{
            if(!navToggled){
                for(i = 0; i < buttons.length; i++){
                    buttons[i].setAttribute('style', 'display: block;');
                }
                if(document.getElementById('mobileNavButton')){
                    document.getElementById('mobileNavButton').setAttribute('style', 'display:none');
                }
            }
        }
    }
}

function addNavButtons(aa){
    aa.forEach(element => {
        var _button = document.createElement('button'); var _text = document.createTextNode(element);
        _button.appendChild(_text); _button.className = 'navButtons'; _button.setAttribute('onclick', 'goToPage("'+element+'")');
        document.getElementById('navbar').appendChild(_button);
    });

    navCheck();
}

function goToPage(name){
    window.location.href = name + '.html';
}

function addPadder(height){
    var padder = document.createElement('div'); padder.setAttribute('style', 'height:'+height+'px; width: 100%;');
    document.body.appendChild(padder);
}


function createContainers(arr){

    var first_C = false;

    arr.forEach(row => {

        var _row = document.createElement('div');
        _row.className='row-container';

        if(row.title != null){
            var text = document.createTextNode(row.title);
            var titleObject = document.createElement('h1'); titleObject.appendChild(text); titleObject.className='container-title'; titleObject.setAttribute('style', 'color:'+ row.color +';');
            _row.appendChild(titleObject);
        }

        row.content.forEach(item => {

            var div1 = document.createElement('div'); div1.className='row-item'; div1.setAttribute('style', 'background-color:'+ row.background +';');

            //Title
            var textDiv1 = document.createTextNode(item[0]);
            var h1Object = document.createElement('h1'); h1Object.appendChild(textDiv1); h1Object.setAttribute('style', 'color:'+row.color+';');
            div1.appendChild(h1Object);

            //Content
            var textDiv2 = document.createTextNode(item[1]);
            var pObject = document.createElement('p'); pObject.appendChild(textDiv2); pObject.setAttribute('style', 'color:'+row.color+';');
            div1.appendChild(pObject);
            

            _row.appendChild(div1);

        });

        //Change background color of container
        
        if(first_C == false){
            _row.setAttribute('style', 'margin-top: 0px; background-color:'+ row.background +';');
            first_C = true;
        }else{
            _row.setAttribute('style', 'background-color:'+ row.background +';');
        }
        document.body.appendChild(_row); 
    });

}


function createRowsArray(arr){

    arr.forEach(row => {

        var _row = document.createElement('div');
        _row.className='row-container';

        row.forEach(item => {

            var div1 = document.createElement('div'); div1.className='row-item'; div1.setAttribute('style', 'background-color:'+item.background +';');

            //Title
            var textDiv1 = document.createTextNode(item.content[0]);
            var h1Object = document.createElement('h1'); h1Object.appendChild(textDiv1); h1Object.setAttribute('style', 'color:'+item.color+';');
            div1.appendChild(h1Object);

            //Content
            var textDiv2 = document.createTextNode(item.content[1]);
            var pObject = document.createElement('p'); pObject.appendChild(textDiv2); pObject.setAttribute('style', 'color:'+item.color+';');
            div1.appendChild(pObject);

            //Change background color of container
            _row.setAttribute('style', 'background-color:'+item.background +';');
            _row.appendChild(div1);

        });

        document.body.appendChild(_row); 
    });

}

function addImage(imageSRC){

    var _row = document.createElement('div'); _row.className='title-div';

    var div1 = document.createElement('img'); div1.setAttribute('src', imageSRC); div1.className = 'centerImage';
    _row.appendChild(div1);

    document.body.appendChild(_row); 

}


function addFadeInEffect(){
    var allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        if(element != document.body){
            element.setAttribute('style', 'animation: fade-in ease 1s');
        }
    });
}

function addFooter(height, color){
    var footer = document.createElement('div'); 
    footer.className='footer';
    footer.setAttribute('style', 'background-color:'+color+'; height:'+height+'px;');
    document.body.appendChild(footer);
}
