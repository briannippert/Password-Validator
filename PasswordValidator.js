var count = 0;

$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
    for (var i = 0; i < document.forms.length; i++) {
        for (var j = 0; j < document.forms[i].elements.length; j++) {
            var control = document.forms[i].elements[j];
            if (control.type.toString() == "password" && control.classList.contains("validate")) {
                addPasswordField(control);
            }
            else if (control.type.toString() == "password" && control.classList.contains("verify")) {
                addVerifyField(control);
            }

        }
    }

});

/**
 * Adds Status Bar and popover to element e.
 * @param e
 */
function addPasswordField(e) {
    e.setAttribute("data-placement", "right");
    e.setAttribute("data-toggle", "popover");
    e.setAttribute("data-trigger", "focus");
    e.setAttribute("data-html", "true");
    e.setAttribute("title", "Password Requirements");

    e.setAttribute("onfocus", "onFocus(this)");
    e.setAttribute("onblur", "onBlur(this)");
    e.setAttribute("onkeyup", "checkPassword(this)");

    var progressBardiv = document.createElement("div");
    var id = e.id;
    var num = id.match(/\d/g);
    num = num.join("");
    progressBardiv.id = "progress" + num;
    $(progressBardiv).addClass("progress");

    var progressBar = document.createElement("div");
    $(progressBar).addClass("progress-bar");
    $(progressBar).addClass("bg-success");
    progressBar.id = "progressBar" + num;
    progressBar.setAttribute("role", "progressbar");
    progressBar.setAttribute("aria-valuenow", "100");
    progressBar.setAttribute("aria-valuemin", "0");
    progressBar.setAttribute("aria-valuemax", "100");
    progressBar.style.width = "0%";
    progressBardiv.appendChild(progressBar);
    e.setAttribute("data-content", '&bull; Between 10-12 Characters <br/>&bull; An upper Case Letter<br/> &bull; A Number<br/> &bull; At Least 1 of the Following (_,-,#,%,*,+)<br/> &bull; None of the Following ($,&,=,!,@) <br/>' + progressBardiv.outerHTML);

  //  document.getElementById(e.id).parentElement.appendChild(progressBardiv);

}

function addVerifyField(e) {
    e.setAttribute("onkeyup", "checkVerify(this)");

}

function checkVerify(e) {

}

function checkPassword(e) {
    var id = e.id;
    var num = id.match(/\d/g);
    num = num.join("");
    count = 0;
    var password = e.value;
    var length = checkLength(password);
    var upper = checkUpperCase(password);
    var digit = checkDigit(password);
    var special = checkSpecialCharacters(password);
    var prohibited = checkProhibitedCharacter(password);
    if (length.length + upper.length + digit.length + special.length + prohibited.length == 0) {
        $(e).popover('hide')
    }else
    {
        $(e).popover('show')
    }
    setProgressBar(count, e);
    var popover = $(e).attr("data-content", length + upper + digit + special + prohibited +' <br/>' + document.getElementById("progress"+ num).outerHTML).data('bs.popover');
    popover.setContent();

    //popover.addClass("data-placement", "right");
}

function checkSpecialCharacters(string) {
    var specialChar = /[_\-#%*\+]/;
    if (specialChar.test(string) == false) {
        return addPopoutLine("At Least 1 of the Following (_,-,#,%,*,+)");
    }
    else {
        count++;
        return "";
    }
}

function checkProhibitedCharacter(string) {
    var specialChar = /[$&=!@]/;
    if (specialChar.test(string) == true) {
        return addPopoutLine("None of the Following ($,&,=,!,@)");
    }
    else {
        count++;
        return "";
    }
}

function checkDigit(string) {
    var hasNumber = /\d/;
    if (hasNumber.test(string) == false) {
        return addPopoutLine("A Number");
    }
    else {
        count++;
        return "";
    }
}

function checkUpperCase(string) {
    if (string.replace(/[^A-Z]/g, "").length == 0) {
        return addPopoutLine("An upper Case Letter");
    }
    else {
        count++;
        return "";
    }
}

function checkLength(string) {
    if (string.length > 13 || string.length < 10) {
        return addPopoutLine("Between 10-12 Characters");
    }
    else {
        count++;
        return "";
    }

}

function setProgressBar(percent, e) {
    var id = e.id;
    var num = id.match(/\d/g);
    num = num.join("");
    percentNum = (percent / 5) * 100;
    percent = percentNum.toString() + "%";
    $("#progressBar" + num).css("width", percent);
}

function addPopoutLine(string) {
    return "&bull;" + string + "<br/>";
}

function onFocus(e) {
    var id = e.id;
    var num = id.match(/\d/g);
    num = num.join("");
    checkPassword(e);
}

function onBlur(e) {
    var id = e.id;
    var num = id.match(/\d/g);
    num = num.join("");
}

