# npm init -y

# 依赖包
- express

# 基于  express 快速创建 web 服务器



# 渲染引擎
- ejs     index.ejs  使用 ejs 的语法来输出数据，遍历数据，判断数据等等一些js操作
- pug     index.pug  使用 pug 的语法来输出数据，。。。。。。。。。。
- xxx


# ejs 模板引擎在 express 中的使用

1. 安装  ejs  npm install ejs --save
2. 设置 express 实例 的 1. 模板文件的存放路径 2. 使用的什么模板引擎
3. res.render('模板文件的名字', 需要带入到模板文件中的数据) 
4. 最终 浏览器，会将 模板文件的内容跟 数据的内容做拼接之后再渲染到 浏览器

# res.render('模板文件的名字', 需要带入到模板文件中的数据) 


# 静态文件托管

> 你可以通过 express.static() 中间件函数，告诉 express 将项目中某个文件夹进行托管。托管之后，这个文件夹下的文件，可以使用 路径的方式去访问（类似 wampserver） ，可以将这个文件夹，当成  wampserver 的www 文件夹。


# express 本身只提供了很简单的功能。

# 一系列高级操作，都是中间件函数来实现的。

# 中间件