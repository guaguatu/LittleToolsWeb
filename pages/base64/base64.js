$("#encode").click(function () {
    let areaOutput = $("#output");
    areaOutput.val("");

    let inText = $("#input").val();
    let newText = btoa(inText);
    areaOutput.val(newText);
});

// 监听下拉框的 change 事件
$('#type').on('change', function () {
    // 获取下拉框当前选中的值
    var selectedValue = $(this).val();
    if (selectedValue === 'pdf') {
        // 当选择 PDF 时，禁用 encode 按钮
        $('#encode').prop('disabled', true).addClass('disabled');
    } else {
        // 当选择其他值时，启用 encode 按钮
        $('#encode').prop('disabled', false).removeClass('disabled');
    }
});

$("#decode").click(function () {
    let areaOutput = $("#output");
    areaOutput.val("");

    let inText = $("#input").val();
    let newText = inText;

    if ($("#type").val() === "pdf") {
        GeneratePDF(inText);
    } else {
        newText = atob(inText);
        areaOutput.val(newText);
    }
});


function GeneratePDF(content) {
    let base64URL = "data:application/pdf;base64," + content;
    // let elemDownload = $("#download");
    // elemDownload.text("download pdf");
    // elemDownload.removeClass("disabled");
    // elemDownload.attr("href", base64URL);
    debugBase64(base64URL);
}

function debugBase64(base64URL) {
    var win = window.open();
    win.document.write('<iframe src="' + base64URL + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
}


