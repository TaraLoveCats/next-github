# next-github

基于Next.js构建的简易版github（主要是展示数据，其他功能会慢慢完善），数据来源于github的官方api接口


## 服务端

基于Koa，自定义服务端代替Next默认的server，用于读取文件、请求代理等

## OAuth授权

使用OAuth授权体系，用户在客户端（浏览器）进行github账户登录

- 客户端得到用户的授权，获得令牌，才能请求资源
- 采用授权码（Authorization code）模式给客户端授权

OAuth的流程图如下：

```
+--------+                                +---------------+    
|        | --(A)- Authorization Request ->|   Resource    |
|        | <-(B)- Authorization Grant --  |    Owner      |
|        |                                +---------------+
|        |                 
|        |                                +---------------+
| Client | --(C)- Authorization Grant ->  | Authorization |
|        | <-(D)----Access Token -------  |    Server     |
|        |                                +---------------+
|        |                               
|        |                                +---------------+
|        | --(E)-----Access Token------>  |  Resource     |
|        | <-(F)-- Protected Resource --- |    Server     |
+--------+                                +---------------+
```

## Redis存储

session默认存储在cookie中，有以下缺点：

- session存储在客户端，前后端都可以修改，不能保护敏感数据
- 浏览器cookie有长度限制

项目使用Redis作为外部存储，保存用户的会话信息

## 缓存

- 对变化较慢的数据进行缓存，减少http网络请求
- 使用LRU缓存策略

## 项目主要依赖

- react
- react-dom
- next
- redux
- react-redux
- redux-thunk
- koa：server framework
- koa-body：body parser middleware for koa
- koa-router: router middleware for koa
- koa-session：session middleware for koa
- axios
- antd: UI
- @zeit/next-css：Next项目中引入`.css`文件
- lru-cache：缓存策略
- ioredis：redis client for node
- markdown-it：markdown parser
- moment

## 项目模块

- 首页：用户的Repositories和Stars数据
- 搜索页面：展示搜索结果数据，可以选择语言和排序方式进行过滤 
- 仓库详情页面：readme页面和issues展示页面


## 截图
### 首页
![用户首页.png](https://github.com/TaraLoveCats/next-github/raw/master/screenshots/stars.png)

### 授权页
![授权页.png](https://github.com/TaraLoveCats/next-github/raw/master/screenshots/auth.png)

![授权跳转.png](https://github.com/TaraLoveCats/next-github/raw/master/screenshots/redirect.png)

### 搜索结果

#### 默认结果

![搜索结果.png](https://github.com/TaraLoveCats/next-github/raw/master/screenshots/search.png)

#### 选择语言和排序

![搜索结果.png](https://github.com/TaraLoveCats/next-github/raw/master/screenshots/lang_sort.png)
___
![搜索结果.png](https://github.com/TaraLoveCats/next-github/raw/master/screenshots/lang_sort2.png)

### 仓库详情

#### 详情页

暂时只展示readme

![readme.png](https://github.com/TaraLoveCats/next-github/raw/master/screenshots/index_readme.png)

#### Issues页

issues列表展示
![issues.png](https://github.com/TaraLoveCats/next-github/raw/master/screenshots/issues.png)

详情

![issues详情.png](https://github.com/TaraLoveCats/next-github/raw/master/screenshots/issues_detail.png)

根据条件搜索issues

![issues搜索.png](https://github.com/TaraLoveCats/next-github/raw/master/screenshots/issues_search.png)
___
![issues搜索.png](https://github.com/TaraLoveCats/next-github/raw/master/screenshots/issues_search2.png)

## 目录结构

```
next-github
├── components                                  ---页面的组件
│   ├── Container.jsx      
│   ├── Layout.jsx
│   ├── Markdown.jsx       
│   ├── Repo.jsx
│   ├── SearchUser.jsx     
│   └── with-repo-basic.jsx
├── lib                                         ---功能模块
│   ├── api.js
│   ├── json.js
│   ├── repo-basic-cache.js
│   └── with-redux.js      
├── pages                                       ---路由页面
│   ├── detail                                  ---项目详情页
│   │   ├── index.js       
│   │   └── issues.js      
│   ├── index.js                                ---入口
│   ├── search.js                               ---搜索页
│   └── _app.js                                 ---页面初始化
├── server                                      ---服务器功能模块
│   ├── api.js
│   ├── auth.js
│   ├── json.js
│   └── session-store.js
├── store                                       ---redux store
│   └── store.js                        
├── .babelrc                                    ---babel配置
├── colors.json                                 ---github语言和对应颜色JSON
├── config.js                                   ---配置
├── next.config.js                              ---next server配置
├── package.json
├── server.js                                   ---服务器入口
└── Readme.md
```

## 接口问题

提供数据的resource server在国外（看IP地址可能是Amazon在新加坡的服务器），可能因为“国情”原因，接口不稳定，有时候会没有response（科学上网不能完全解决问题）；头像一类的图片资源经常会请求不到