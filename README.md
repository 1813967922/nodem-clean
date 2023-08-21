# nodem-clean

这是一个删除指定目录下所有 node_modules 的命令行工具

## 安装
```sh
npm install -g nodem-clean
```

## 使用

```sh
# .为当前目录
nodem-clean killer .

# 简写,不加 . 默认为当前目录
nodem-clean k

# 指定路径
nodem-clean k --path D:\\projects\\test
```

删除当前目录下的所有 node_modules 文件夹