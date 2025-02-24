// $('#compare').click(function () {
//    console.log("COMPARE")
//     jdd.compare();
// });

async function loadJDD() {
    try {
        // 动态加载 JDD 的依赖文件
        await import('./third_party/jdd/jsl/jsl.format.js');
        await import('./third_party/jdd/jsl/jsl.parser.js');
        const jddModule = await import('./third_party/jdd/jdd.js');

        // 将 JDD 挂载到全局对象（如果需要）
        window.jdd = jddModule.default || jddModule;
        console.log('JDD loaded successfully');
    } catch (error) {
        console.error('Failed to load JDD:', error);
    }
}



async function initJsonCompare() {
    // 加载 CSS 文件
    loadCssByUrl('./third_party/jdd/reset.css');
    loadCssByUrl('./third_party/jdd/throbber.css');
    loadCssByUrl('./third_party/jdd/jdd.css');

    // 加载 JDD 的 JavaScript 文件
    await loadJDD();
    console.log("Load JDD!!")

    // 初始化 JDD 功能
    document.getElementById('compare').addEventListener('click', () => {
        // const leftJson = document.getElementById('textarealeft').value;
        // const rightJson = document.getElementById('textarearight').value;
        jdd.compare();
        // try {
        //     const leftObj = JSON.parse(leftJson);
        //     const rightObj = JSON.parse(rightJson);
        //     const diff = jdd.diff(leftObj, rightObj);
        //
        //     // 显示比较结果
        //     document.getElementById('out').textContent = JSON.stringify(diff, null, 2);
        // } catch (error) {
        //     console.error('JSON parsing error:', error);
        // }
    });
}

initJsonCompare();