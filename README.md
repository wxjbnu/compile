# compile

## 文件夹说明
- pages:放页面(√)
- component:组件(未实现)

## 其他说明
- dom的内嵌值、内嵌事件、内嵌样式
- API的替换

### 已有命令
- npm run build
- npm run copy
- npm run init

## 运行
- npm i
- npm run build

### 流程
- 首先运行初始化 将templates里面文件复制出来
- 其次运行编译   将模板编译

#### 第一步 拷贝模板文件
- 先遍历templates里面文件和文件夹
- 复制出来
- npm run create

#### 第二步 编译文件
- 将xml,js,css分别提取，并根据目标模板编译
- npm run compile
