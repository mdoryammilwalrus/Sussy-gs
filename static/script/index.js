import { App } from './app.js'
import { gs } from './gs.js';
import { apps } from './apps.js';
import { access } from './home.js';
import { options } from './options.js';
import { support } from './support.js';
import { community } from './community.js';

window.app = new App();


switch(localStorage.getItem('incog||background')) {
    case 'stars':
        particlesJS.load('.particles', './json/stars.json');
        break;
    case 'particles':
        particlesJS.load('.particles', './json/particles.json'); 
};

app.openNav = function() {
    document.querySelector('#close-nav').style.display = 'flex';
    document.querySelector('nav').style.display = 'flex';
};

app.closeNav = function() {
    document.querySelector('#close-nav').style.removeProperty('display')
    document.querySelector('nav').style.removeProperty('display')
};

app.destroyParticles = function() {
    if (window.pJSDom && window.pJSDom.length) window.pJSDom[0].pJS.fn.vendors.destroypJS();
    window.pJSDom = [];
    return true;
};

document.querySelector('#open-nav').addEventListener('click', app.openNav);
document.querySelector('#close-nav').addEventListener('click', app.closeNav);

document.title = localStorage.getItem('incog||title') || 'Sussy GS';
window.icon = document.querySelector('#favicon');

icon.href = localStorage.getItem('incog||icon') || './favicon.png';

app.on('init', () => {
    app.icon = document.querySelector('#favicon');
    app.search.back = app.createElement('a', 'chevron_left', {
        class: 'submit', 
        style: {
            'font-family': 'Material Icons',
            'font-size': '30px',
            'color': 'var(--accent)',
            'display': 'none',
        }
    });
    app.search.title = app.createElement('div', [], {
        class: 'title',
        style: {
            'font-size': '16px',
            'font-weight': '500',
            color: 'var(--accent)',
            display: 'none',
        }
    });
    app.search.logo = createLink('#', '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="101" height="128" viewBox="0,0,101,128"><g transform="translate(-189,-116)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="none" fill-rule="nonzero" stroke="none" stroke-width="0.5" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style="mix-blend-mode: normal"><image x="378" y="232" transform="scale(0.5,0.5)" width="202" height="256" xlink:href="data:image/png;base64,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"/></g></g></svg>', {
        style: {
    style: {
            display: 'none'
        }
    });
    app.search.input = app.createElement('input', [], {
        attrs: {
            placeholder: ''
        },
        class: 'interactive',
    });
    app.search.submit = app.createElement('button', '<i class="fas fa-search"></i>', {
        class: 'submit', 
        style: {
            display: 'none'
        }
    });
});

app.on('exit', async () => {
    document.querySelector('#open-nav').removeAttribute('data-open');
    if (document.querySelector('header').hasAttribute('data-init')) {
        document.querySelector('header').removeAttribute('data-init')
    };
    
    if (app.search.logo.style.display === 'none') {
        app.search.logo.style.removeProperty('display');
    };

    if (document.querySelector('header').hasAttribute('data-page')) {
        document.querySelector('header').removeAttribute('data-page');
    };

    app.search.logo.style.display = 'none';
    app.search.submit.style.display = 'none';

    app.search.input.removeAttribute('oninput');
    app.search.title.textContent = '';
    app.search.title.style.display = 'none';

    app.nav.clear();
    app.main.clear();

    app.main.target.classList.toggle('transition')
});


app.on('after', () => {
    app.main.target.classList.toggle('transition')
});


document.querySelector('#access-form').addEventListener('submit', event => {
    event.preventDefault();
    app.main.target.style.display = 'none';
    app.header.target.style.display = 'none';
    
    const frame = document.querySelector('.access-frame');

    frame.src = '/load.html#' + btoa(event.target[0].value);
    frame.style.display = 'block';

    document.querySelector('.access-panel').style.removeProperty('display');
});

document.querySelector('.close-access').addEventListener('click', event => {
    event.preventDefault();
    app.main.target.style.display = 'block';
    app.header.target.style.display = 'flex';
    
    const frame = document.querySelector('.access-frame');

    frame.src = 'about:blank';
    frame.style.display = 'none';

    document.querySelector('.access-panel').style.display = 'none';
});

document.querySelector('.refresh-access').addEventListener('click', () => {
    const frame = document.querySelector('.access-frame');
    const win = frame.contentWindow;

    try {
        win.location.reload();
    } catch(e) {

    };
});

document.querySelector('.access-link').addEventListener('click', () => {
    const frame = document.querySelector('.access-frame');
    const win = frame.contentWindow;
    
    if (win.__uv) {
        navigator.clipboard.writeText(
            new URL('./?link=' + encodeURIComponent(btoa(win.__uv.location.href)), location.href).href
        );
    };

});

document.querySelector('.access-panel .controls .icon').addEventListener('error', event => {
    event.target.src = 'img/globe.svg';
});


document.querySelector('.access-panel').addEventListener('mouseenter', async event => {
    const frame = document.querySelector('.access-frame');
    const win = frame.contentWindow;

    if (win && win.__uv) {
        document.querySelector('.access-panel .controls input').value = Object.getOwnPropertyDescriptor(Document.prototype, 'title').get.call(win.document);
        const favi = document.querySelector.call(win.document, 'link[rel=icon]');

        if (favi && Object.getOwnPropertyDescriptor(HTMLLinkElement.prototype, 'href').get.call(favi)) {
            const res = await win.__uv.client.fetch.fetch.call(
                win,
                Object.getOwnPropertyDescriptor(HTMLLinkElement.prototype, 'href').get.call(favi)
            );

            const blob = await res.blob();
            const url = URL.createObjectURL(blob);

            document.querySelector('.access-panel .controls .icon').src = url;
            URL.revokeObjectURL(url);
        } else {
            const res = await win.__uv.client.fetch.fetch.call(
                win,
                win.__uv.rewriteUrl(
                    '/favicon.ico'
                )
            );

            const blob = await res.blob();
            const url = URL.createObjectURL(blob);

            document.querySelector('.access-panel .controls .icon').src = url;
            URL.revokeObjectURL(url);
        };
    };
});

app.on('default', access);
app.on('#gs', gs);
app.on('#apps', apps);
app.on('#settings', options);
app.on('#support', support);
app.on('#community', community);

app.init();


function createLink(href = null, content = '', config = {}) {
    const elem = app.createElement('a', content, config);
    if (href) elem.href = href;
    return elem;
};

function timeout(time = 1000) {
    return new Promise(resolve => 
        setTimeout(resolve, time)
    );
};
