$(document).ready(function() {
    // 对比按钮点击事件
    $("#compareBtn").click(function () {
        compareListsAndShowResult();
    });

    // 清空按钮点击事件
    $("#clearBtn").click(function () {
        $("#list_left").val("");
        $("#list_right").val("");
        $("#result_output").val("");
    });

    // 回车键快捷对比
    $("#list_left, #list_right").keydown(function(e) {
        if (e.ctrlKey && e.keyCode === 13) { // Ctrl + Enter
            compareListsAndShowResult();
        }
    });
});

function compareListsAndShowResult() {
    let leftText = $("#list_left").val().trim();
    let rightText = $("#list_right").val().trim();
    
    if (!leftText && !rightText) {
        $("#result_output").val("请输入要对比的列表数据");
        return;
    }
    
    // 解析列表数据
    let leftList = parseListData(leftText);
    let rightList = parseListData(rightText);
    
    // 排序后对比
    let sortedLeftList = [...leftList].sort();
    let sortedRightList = [...rightList].sort();
    
    // 计算差异
    let leftOnly = findDifference(sortedLeftList, sortedRightList);
    let rightOnly = findDifference(sortedRightList, sortedLeftList);
    let common = findCommon(sortedLeftList, sortedRightList);
    
    // 生成结果报告
    let result = generateComparisonReport(leftOnly, rightOnly, common, leftList.length, rightList.length);
    
    $("#result_output").val(result);
}

function parseListData(text) {
    if (!text) return [];
    
    return text.split("\n")
        .map(line => line.trim())
        .filter(line => line.length > 0);
}

function findDifference(list1, list2) {
    let set2 = new Set(list2);
    let result = [];
    let seen = new Set();
    
    for (let item of list1) {
        if (!set2.has(item) && !seen.has(item)) {
            result.push(item);
            seen.add(item);
        }
    }
    
    return result;
}

function findCommon(list1, list2) {
    let set2 = new Set(list2);
    let result = [];
    let seen = new Set();
    
    for (let item of list1) {
        if (set2.has(item) && !seen.has(item)) {
            result.push(item);
            seen.add(item);
        }
    }
    
    return result;
}

function generateComparisonReport(leftOnly, rightOnly, common, leftTotal, rightTotal) {
    let report = [];
    
    report.push("=== 列表对比结果 ===");
    report.push("");
    
    report.push("左侧列表总数: " + leftTotal);
    report.push("右侧列表总数: " + rightTotal);
    report.push("共同元素数量: " + common.length);
    report.push("");
    
    // 左侧独有的元素
    report.push("=== 左侧独有 (" + leftOnly.length + "个) ===");
    if (leftOnly.length > 0) {
        leftOnly.forEach(item => {
            report.push("+ " + item);
        });
    } else {
        report.push("(无)");
    }
    report.push("");
    
    // 右侧独有的元素
    report.push("=== 右侧独有 (" + rightOnly.length + "个) ===");
    if (rightOnly.length > 0) {
        rightOnly.forEach(item => {
            report.push("+ " + item);
        });
    } else {
        report.push("(无)");
    }
    report.push("");
    
    // 共同元素
    report.push("=== 共同元素 (" + common.length + "个) ===");
    if (common.length > 0) {
        common.forEach(item => {
            report.push("= " + item);
        });
    } else {
        report.push("(无)");
    }
    
    return report.join("\n");
}