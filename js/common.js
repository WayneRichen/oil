window.onload = function() {
    let loading = document.querySelector('.loading');
    loading.style.opacity = 0;
    setTimeout(function() {
        loading.remove();
    }, 500);
};