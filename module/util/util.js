
function getBasePath() {  // 根据后退配置调整
    let rootPath = window.location.pathname.split('/').slice(0, 2).join('/');
    // console.log("ROOT PATH: ", rootPath);
    return rootPath;
}

function loadScript(scripts) {
    scripts.forEach(function (scriptPath) {
        let script = document.createElement('script');
        script.src = getBasePath() + scriptPath;
        document.body.appendChild(script);
    });
}

function loadCss(stylesheets) {
    stylesheets.forEach(function (stylePath) {
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = getBasePath() + stylePath;
        document.head.appendChild(link);
    });
}

// 动态加载 CSS 文件
function loadCssByUrl(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
}
