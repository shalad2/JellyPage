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
                            '<li><a href="' + rootDir + 'gromacs/gromacs_mdp.html">GROMACS.mdpオプション</a></li>' +
                        '</ul>' +
                    '</li>' +
                '</ul>' +
                '<ul class="menu-click">' +
                    '<li>' +
                        '<div class="menu">LAMMPS</div>' +
                        '<ul>' +
                            '<li>開発中</li>' +
                            //'<li><a href="' + rootDir + 'lammps/lammps_input.html">LAMMPSインプットコマンド</a></li>' +
                        '</ul>' +
                    '</li>' +
                '</ul>' +
                '<ul class="menu-click">' +
                    '<li>' +
                        '<div class="menu">Linux</div>' +
                        '<ul>' +
                            '<li><a href="' + rootDir + 'linux/users_management.html">Linuxユーザー管理</a></li>' +
                            //'<li><a href="' + rootDir + 'linux/linux_command1.html">Linuxコマンド【初級編】</a></li>' +
                            //'<li><a href="' + rootDir + 'linux/linux_command2.html">Linuxコマンド【中級編】</a></li>' +
                        '</ul>' +
                    '</li>' +
                '</ul>' +
                '<ul class="menu-click">' +
                    '<li>' +
                        '<div class="menu">Python</div>' +
                        '<ul>' +
                            '<li><a href="' + rootDir + 'python/matplotlib1.html">matplotlibの使い方</a></li>' +
                        '</ul>' +
                    '</li>' +
                '</ul>' +
            '</nav>';
    html += '</aside>';
    html += '</div>'
    document.write(html);
}