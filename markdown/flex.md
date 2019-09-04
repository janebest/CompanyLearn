### flex
先将元素变为弹性盒子元素：display：flex
使元素横向排列：flex：wrap
### nline-block的适用：横向导航栏。
需要将元素（图片、横向排列链接）排列成一行或者多行时，inline-block会更好
### `box-sizing` 
1.**content-box**：只有width,height,不包括padding，margin
2.**border-box**：width包括padding和margin
### 响应式布局
(1)允许网页的宽度自动的调整
(2)尽量少使用绝对的宽度，多点百分比
(3)相对大小的字体:字体不要使用px写死，最好使用相对大小的em，或者高清方案rem
(4)流式布局，float的好处是，如果宽度太小，放不下两个元素，后面的元素会自动滚动到前面元素的下方，不会在水平方向overflow（溢出），避免了水平滚动条的出现。
(5)选择加载css，<link rel="stylesheet" type="text/css" media="screen and (max-device-width: 400px)" href="tinyScreen.css" />，这个意思是如果屏幕宽度小于400像素（max-device-width: 400px），就加载tinyScreen.css文件。
### 自适应网页设计
### 1、 允许或禁止调整页面大小
<meta name=”viewport” content=”initial-scale=2.0,width=device-width,user-scalable=yes”/>
如果不允许调整页面大小，那么把user-scalable=yes改为user-scalable=no，如：
<meta name=”viewport” content=”initial-scale=2.0,width=device-width,user-scalable=no”/>
### 2、将网页修改为百分比布局
### 3、用em替换px  （建议用rem更好）
### 4、流动布局（fluid grid）的使用
“流动布局”指的是各个区块的位置都浮动，不是固定不变的。
　　.main {float: right;width: 70%;}
　　.leftBar {float: left;width: 25%;}
这么做的好处是，如果宽度太小，放不下两个元素，后面的元素会自动滚动到前面元素的下方，不会在水平方向溢出，避免了水平滚动条的出现，大大提升了用户的阅读体验。另外，绝对定位（position:absolute）的使用，也要非常小心。
**行内元素：** span , a , b , i , u , em
- 与其他行内元素并排
- 不能设置宽高，默认的宽度就是文字的宽度
**块级元素：**p,div
- 霸占一行，不能与其他任何元素并列。
- 能接受宽高，如果不设置宽度，那么宽度将默认变为父级的100%。
**display：inline;**
　　那么这个标签将变为行内元素，即：
　　　　1，此时这个div将**不能设置宽度和高度**了。
　　　　2，此时这个div可以和其他行内元素并排了
　**display：block；**
　　那么这个span标签将变为块级标签，即：
　　　　1，此时这个span能够设置宽度，高度。
　　　　2，此时这个span必须独占一行，其他元素无法与之并排。
　　　　3，**如果不设置宽度，将占满父级**。

**使用margin: 0 auto;   要注意：**
1.使用margin: 0 auto;水平居中盒子必须有width，要有width，文字水平居中使用text-align: center;
2.只有标准流下的盒子 才能使用margin:0 auto; 当一个盒子浮动了，固定定位，绝对定位(后面会讲)， 不能用了
3.margin：0 auto;**居中盒子**。而不是居中文本，文字水平居中使用text-align: center;
**margin属性是描述兄弟盒子的关系。**
**善于使用父盒子的padding来调整子盒子的位置**
## 定位：
**相对定位(relative)：相对于自己原来的位置的定位。**
**绝对定位（absolute）：**
一、单独一个绝对定位的盒子
1.当我使用top属性描述的时候 是以页面的左上角（跟浏览器的左上角区分）为参考点来调整位置
2.当我使用bottom属性描述的时候。是以首屏页面左下角为参考点来调整位置。
1.父辈元素设置相对定位，子元素设置绝对定位，那么会以父辈元素左上角为参考点，这个父辈元素不一定是爸爸，它也可以是爷爷，曾爷爷。
2.如果父亲设置了定位，那么以父亲为参考点。那么如果父亲没有设置定位，那么以父辈元素设置定位的为参考点
3.不仅仅是父相子绝，父绝子绝 ，父固子绝,都是以父辈元素为参考点
还要注意，绝对定位的盒子无视父辈的padding
## z-index:
1，z-index值大的遮盖z-index值小的。
2，只有定位了的元素，才会有z-index这个属性。
3，z-index没有单位，就是一个正整数。默认的z-index值是0，如果都没有z-index值，那么在后面会遮盖前面的，且定位了的元素，永远可以遮盖没有定位的元素。
4，从父现象：意思就是如果有几个同一级别的盒子，如果一个盒子的z-index值是最大的，那么这个盒子将遮盖其他同级别的盒子，且，这个盒子的子级盒子，也将可以遮盖其他盒子的子级盒子。(白话谓之：父类不行，那么儿子也不行。)