class NextMenu {

    constructor() {
        this.side_flag = false;     // 定义一个上下拉标志
        this.deviceHeight = window.innerHeight; // 获取窗口可视区域的高
        this.menu = document.querySelector('.menu_box');    // 获取菜单DOM对象
    }

    // 下拉菜单滑动操作方法
    menuSide() {
        this.side_flag = !this.side_flag;
        if (this.side_flag) {
            this.menu.style.height = `${(this.deviceHeight/16 - 2)}rem`;
            this.menu.style.opacity = '0.95';
        } else {
            this.menu.style.height = '0';
            this.menu.style.opacity = '0';
        }
    }
}

let side_button = document.getElementById('side_button');   // 获取上下拉按钮DOM对象
let nextMenu = new NextMenu();  // 实例化一个NextMenu对象
side_button.onclick = nextMenu.menuSide.bind(nextMenu);







