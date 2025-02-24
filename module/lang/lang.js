class LanguageManager {
    constructor() {
        this.language = localStorage.getItem('language') || 'en'; // 默认语言
        this.texts = {};
        this.loadLanguage(this.language, null);
    }

    // 加载语言文件
    async loadLanguage(language, syncFunc) {
        try {
            let basePath = getBasePath();
            const response = await $.getJSON(`${basePath}/module/lang/resources/${language}.json`);
            this.texts = response;
            localStorage.setItem('language', language); // 保存选择
            this.updateText();
            if (syncFunc) {
                syncFunc();
            }
        } catch (error) {
            console.error("Failed to load language file:", error);
        }
    }

    // 更新页面中的文本
    updateText() {
        $('[data-i18n]').each((index, element) => {
            const key = $(element).data('i18n');
            if (this.texts[key]) {
                $(element).text(this.texts[key]);
            }
        });
    }

    // 切换语言
    switchLanguage(language, asyncFunc) {
        if (this.language !== language) {
            this.language = language;
            this.loadLanguage(language, asyncFunc);
        }
    }
}

// 初始化语言管理器
const languageManager = new LanguageManager();  // 全局变量
