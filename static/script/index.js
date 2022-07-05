import { App } from './app.js'
import { gs } from './gs.js';

window.app = new App();



app.openNav = function() {
};

app.closeNav = function() {
};

app.destroyParticles = function() {
};


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
    app.search.input = app.createElement('input', [], {
        attrs: {
            placeholder: ''
        },
        class: 'interactive',
    });
});

app.on('default', gs);

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
