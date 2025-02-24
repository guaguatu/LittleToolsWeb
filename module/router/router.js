
const initialGlobals = Object.keys(window);

function removePreviousPage() {
    // 移除之前引入的页面相关CSS（这里假设CSS是通过link标签引入，并且有相应的标识类或ID等可以用来选择移除，简单示例如下，实际可能需调整）
    $('link[rel="stylesheet"][href*="pages"]').remove();
    // 移除之前引入的页面相关JS（假设通过script标签引入，有相应标识来选择移除，简单示例如下）
    $('script[src*="pages"]').remove();
    // 移除之前引入的页面相关CSS（这里假设CSS是通过link标签引入，并且有相应的标识类或ID等可以用来选择移除，简单示例如下，实际可能需调整）
    $('link[rel="stylesheet"][href*="third_party"]').remove();
    // 移除之前引入的页面相关JS（假设通过script标签引入，有相应标识来选择移除，简单示例如下）
    $('script[src*="third_party"]').remove();
    // 清空内容展示区域
    $('#content-container').empty();
    // 清理全局变量
    const currentGlobals = Object.keys(window);
    currentGlobals.forEach(key => {
        if (!initialGlobals.includes(key)) {
            console.log("delete key: ", key, delete window[key]);
        }
    });
}

let isLoading = false; // 标志变量，用于表示是否正在加载页面
function loadPage(page) {
    if (isLoading) {
        console.log(page + " loading...")
        return; // 如果正在加载，不进行新的请求
    }
    isLoading = true; // 标记为正在加载

    // 更新导航状态
    $('.nav-link').removeClass('active'); // 移除所有 .active
    $(`a[href="${page}"]`).addClass('active'); // 为当前链接添加 .active

    loadingPage(page);
    isLoading = false;
}

// loadingPage 加载对应路径的 html、css、js
function loadingPage(page) {
    let pageFile = page.split("/").pop();
    let pageFilePath = getBasePath() + '/pages' + page + "/" + pageFile;

    // 加载 HTML 内容
    $.get(pageFilePath + '.html')
        .done(function (data) {
            if (data.includes('<div id="content-container"></div>')) {
                $('#content-container').html('<h1>404 - Page Not Found</h1>');
            } else {
                $('#content-container').html(data);

                // 加载 CSS 文件
                $('<link>', {
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: pageFilePath + '.css'
                }).appendTo('head');

                // 加载 JS 文件
                $('<script>', {
                    src: pageFilePath + '.js'
                }).appendTo('body');
            }
        })
        .fail(function (jqXHR) {
            $('#content-container').html('<h1>Error: ' + jqXHR.status + '</h1>');
        });
}


// updatePageContent 单页应用更新页面内容
function updatePageContent(page)
{
    removePreviousPage();
    loadPage(page);
}

function navigateTo(page) {
    console.log("navigateTo: ", page)
    if (page === "/" || page === "") {
        page = "/home"
    }

    // console.log("real navigateTo: ", page)
    // 使用 History API 的 pushState 方法
    let fullPath = getBasePath() + page;
    // console.log("navigateTo: ", page, "\nfull path: ", fullPath);

    // 检查是否需要更新历史记录
    if (window.location.pathname !== fullPath) {
        history.pushState({page: page}, null, fullPath);
    }

    // 在这里根据 page 进行页面内容的更新，例如更新组件或显示不同的内容
    updatePageContent(page);
}


// 监听浏览器的后退和前进事件
window.addEventListener('popstate', function (event) {
    let page = window.location.pathname.replace(getBasePath(), '');
    // console.log("popstate: ", page);
    navigateTo(page);  // 单页应用切换页面，前进后退触发
});


// 从 str 左侧去掉 target
function lstrip(str, target = "aaa") {
    if (target === "") {
        return str
    }
    let pattern = new RegExp("^" + target + "+");
    return str.replace(pattern, '');
}



// 动态加载navbar.html
$(document).ready(function () {
    // 动态加载，刷新的时候效果不好
    // let navbarHtml = getBasePath() + `/module/router/navbar.html`;
    // $('#navbar-container').load(navbarHtml, function () {
    //     init();
    // });

    // 记录当前的全局变量
    init();
});

function init() {
    if (getBasePath()) {  // 如果 base path 不为空，修改 brand 链接指向
        $("#navbar-brand").attr("href", getBasePath());
    }

    // 点击导航按钮，导航到对应页面
    $('nav ul.navbar-nav a.nav-link').click(function (e) {
        e.preventDefault();  // 阻止默认跳转，因为路径可能不对，需要拼装
        let page = $(this).attr('href');
        let currentPage = lstrip(window.location.pathname, getBasePath());
        if (page === currentPage) {
            return; // 若页面相同则不进行加载操作
        }
        navigateTo(page);  // 单页应用切换页面，点击导航栏时
        // window.location.href = getBasePath() + page;
    });

    // 获取当前 URI 路径，加载对应页面
    let page = lstrip(window.location.pathname, getBasePath());
    navigateTo(page);  // // 单页应用切换页面，刷新或带路径加载触发

    // 在这里你可以继续做语言切换或其他初始化操作
    $('#switch-language').on('click', function () {
        const newLang = languageManager.language === 'en' ? 'zh' : 'en';
        languageManager.switchLanguage(newLang, function () {
            let page = lstrip(window.location.pathname, getBasePath());
            console.log("change page language: ", page, newLang, localStorage.getItem("language"));
            removePreviousPage();
            loadPage(page);
        });
    });
}

