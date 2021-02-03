$(function() {
    var mclick = $('.menu-click > li');

    $(mclick).click(function() {

        // openしているところに'menu-open'を与える
        if ($(this).hasClass('menu-open')) {
            $('ul', this).slideUp();
            $(this).removeClass('menu-open');

        } else {
            $(mclick).removeClass('menu-open');
            $(this).addClass('menu-open');
            $('ul', mclick).slideUp();
            $('ul', this).slideDown();
        }
        
        /*$(this).toggleClass('menu-open');
        if ($(this).hasClass('menu-open')) {
            $('ul', this).slideDown();
        } else {
            $('ul', this).slideUp();
        }*/
    });
});

function loadMenu(rootDir){
    var html = "";
    html += '<div class="side-bar">';
    html += '<aside>'
    html += '<h1><a href="' + rootDir + 'index.html"><img class="menu-logo" src="' + rootDir + 'images/logo.png" alt="JellyPageホーム"></a></h1>';
    html += '<nav>' +
                '<ul class="menu-click">' +
                    '<li>' +
                        '<div class="menu">GROMACS</div>' +
                        '<ul>' +
                            '<li><a href="' + rootDir + 'gromacs/gromacs_install.html">GROMACSのインストール</a></li>' +
                            '<li><a href="' + rootDir + 'gromacs/gromacs_tutorial1_top.html">GROMACSチュートリアル①</a></li>' +
                            '<li><a href="' + rootDir + 'gromacs/gromacs_tutorial2_top.html">GROMACSチュートリアル②</a></li>' +
                        '</ul>' +
                    '</li>' +
                '</ul>' +
                '<ul class="menu-click">' +
                    '<li>' +
                        '<div class="menu">LAMMPS</div>' +
                        '<ul>' +
                            '<li>メニュー1</li>' +
                            '<li>メニュー2</li>' +
                            '<li>メニュー3</li>' +
                            '<li>メニュー4</li>' + 
                            '<li>メニュー5</li>' +
                        '</ul>' +
                    '</li>' +
                '</ul>' +
                '<ul class="menu-click">' +
                    '<li>' +
                        '<div class="menu">Linux</div>' +
                        '<ul>' +
                            '<li><a href="' + rootDir + 'linux/command1.html">Linuxコマンド【初級編】</a></li>' +
                            '<li>メニュー2</li>' +
                            '<li>メニュー3</li>' +
                            '<li>メニュー4</li>' + 
                            '<li>メニュー5</li>' +
                        '</ul>' +
                    '</li>' +
                '</ul>' +
                '<ul class="menu-click">' +
                    '<li>' +
                        '<div class="menu">Python</div>' +
                        '<ul>' +
                            '<li>メニュー1</li>' +
                            '<li>メニュー2</li>' +
                            '<li>メニュー3</li>' +
                            '<li>メニュー4</li>' + 
                            '<li>メニュー5</li>' +
                        '</ul>' +
                    '</li>' +
                '</ul>' +
            '</nav>';
    html += '</aside>';
    html += '</div>'
    document.write(html);
}