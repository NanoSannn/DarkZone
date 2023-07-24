let isLightTheme = false;

document.getElementById("theme").onclick = function () {
    if (isLightTheme) {
        removeCSSFile();
        switchTheme();
    } else {
        loadCSSFile();
        switchTheme();
    }
    isLightTheme = !isLightTheme;
};

function loadCSSFile() {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = './css/swal2.css';
    document.head.appendChild(linkElement);
}

function removeCSSFile() {
    const linkElement = document.querySelector('link[href="./css/swal2.css"]');
    if (linkElement) {
        linkElement.parentNode.removeChild(linkElement);
    }
}

function switchTheme() {
    const elementsToToggle = [
        ...document.getElementsByClassName('background-color'),
        ...document.getElementsByClassName('navigation-bar'),
        ...document.getElementsByClassName('navbar-btn-home'),
        ...document.getElementsByClassName('copyText-dialog-font'),
        ...document.getElementsByClassName('head-text'),
        ...document.getElementsByClassName('item-sheet'),
        ...document.getElementsByClassName('item-content'),
        ...document.getElementsByClassName('member-name'),
        ...document.getElementsByClassName('member-info'),
        ...document.getElementsByClassName('member-contact'),
        ...document.getElementsByClassName('member-profile-block'),
        ...document.getElementsByClassName('member-profile-detail'),
        ...document.getElementsByClassName('member-profile-detail-text'),
        ...document.getElementsByClassName('theme-btn'),
        ...document.getElementsByClassName('scroll-up-btn'),
        ...document.getElementsByClassName('not-support-text'),
        ...document.getElementsByClassName('interact-box'),
        ...document.getElementsByClassName('interact-btn'),
        ...document.getElementsByClassName('member-facebook-icon'),
        ...document.getElementsByClassName('member-instragram-icon'),
        ...document.getElementsByClassName('member-discord-name'),
        ...document.getElementsByClassName('member-discord-icon'),
        ...document.getElementsByClassName('member-external-icon'),
    ];

    elementsToToggle.forEach((element) => {
        const classNameList = element.className.split(' ');
        classNameList.forEach((className) => {
            if (className.endsWith('-light')) {
                element.classList.remove(className);
            } else {
                element.classList.add(`${className}-light`);
            }
        });
    });
}
