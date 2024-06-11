$(document).ready(function() {
    // Навигация по страницам комикса
    let pages = [
        'images/comic1_page1.jpg',
        'images/comic1_page2.jpg',
        // Добавьте остальные страницы комикса здесь
    ];
    let currentPage = 0;

    function updatePage() {
        $('#comic-page').attr('src', pages[currentPage]);
    }

    $('.next').click(function() {
        if (currentPage < pages.length - 1) {
            currentPage++;
            updatePage();
        }
    });

    $('.prev').click(function() {
        if (currentPage > 0) {
            currentPage--;
            updatePage();
        }
    });

    $('#read-comic').click(function() {
        window.location.href = 'reader.html';
    });

    $('#close-reader').click(function() {
        window.location.href = 'comic.html';
    });

    updatePage();
});
