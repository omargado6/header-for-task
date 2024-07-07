document.getElementById('mobile-menu-button').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    var openIcon = document.getElementById('open-icon');
    if (sidebar.classList.contains('-left-full')) {
        sidebar.classList.remove('-left-full');
        sidebar.classList.add('left-0', 'open');
    }
});

document.getElementById('closeSidebarButton').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('left-0', 'open');
    sidebar.classList.add('-left-full');

});

