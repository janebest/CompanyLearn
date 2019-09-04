### layui
lay 内置模块
layui.all.js 默认引入所有模块的js
layui.js 引入js的入口，要调用需要使用layui.use（["table","form"]） 
## 图标
&：&amp
相关样式：layui-icon
## 按钮
必要样式：layui-btn
主题样式：
layui-btn-primary  原始按钮
layui-btn-normal 百搭按钮
layui-btn-warm 暖色按钮
layui-btn-danger 警告按钮
layui-
按钮尺寸：
 layui-btn-lg 大型
layui-btn-sm 小型
layui-btn-xs 迷你
layui-btn-fluid 流体按钮
不同风格：
layui-btn-radius 圆角
按钮组：
layui-btn-group
按钮容器：layui-btn-container
## 导航
相关样式：
     方向：水平：默认
           垂直：layui-nav-tree
其他样式：
     layui-nav：导航菜单
     layui-nav-item：导航菜单的子项
     layui-nav-child：子项的子项
     layui-this：当前选中的菜单项
 layui.use(["element"], function () {})
 ## 选项卡
 **注意：选项卡 依赖 element 模块，否则无法进行功能性操作**
 风格：
    默认：layui-tab
    简洁： layui-tab-brief
    卡片：layui-tab-card
部件：
    卡片头内容：layui-tab-title
    卡片头内容子项被选中：layui-this
    卡片内容包装体：layui-tab-content
    选中的卡片内容：layui-tab-item
    选中显示：layui-show
属性：
     是否启用关闭效果：lay-allowclose="true"
     layui可以找到元素（类似id选择器）：lay-filter="demo"

