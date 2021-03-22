addFadeInEffect();

addNav(100, 'right', 'Monospace', true); //MAKE HEIGHT ADJUSTABLE, AND CENTER:RIGHT
addNavButtons(['Home', 'Info', 'About', 'App']);
addMobileNav(750);




addTitle('MONOSPACE','Web. Easy. Fast.' , '600px');


var contentBox = {
    title: 'Container Title',
    content: [['Title', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'], ['Title', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.']],
    background: 'rgb(19,20,24)',
    color: 'rgb(255,255,255)'
}

var contentBox1 = {
    content: [['Title', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.']],
    background: 'rgb(255,255,255)',
    color: 'rgb(19,20,24)'
}

createContainers([contentBox, contentBox1, contentBox]);

addFooter(400, 'white');