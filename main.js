//Task 1
const newWindow = window.open("", "New Window", "width=410, height=410");

//Task 2
setTimeout(() => {
    newWindow.resizeTo(500, 500);

    //Task 3
    setTimeout(() => {
        newWindow.moveTo(200, 200);

        //Task 4
        setTimeout(() => newWindow.close(), 2000);
    }, 2000);
}, 2000);