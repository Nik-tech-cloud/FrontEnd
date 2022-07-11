$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() >= $(document).height()-100) {
        loadMoreData();
    }
});

function findProduct() {
    var xhttp = new XMLHttpRequest();
    const text = document.getElementById('srch');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200 && text.value.length > 0) {
            text.value = "Results for: " + text.value + " (Clear text to continue...)";
            const container = document.getElementById('prod_wrapper');
            container.innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "product.txt", true);
    xhttp.send();
}

function loadMoreData(last_id) {
    var xhttp = new XMLHttpRequest();
    const text = document.getElementById('srch');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200 && text.value.length == 0) {
            const container = document.getElementById('prod_wrapper');
            container.insertAdjacentHTML(
                'beforeend',
                this.responseText,
              );
        }
    };
    xhttp.open("GET", "product.txt", true);
    xhttp.send();
}