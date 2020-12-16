# 终止一个错误
set -e

# 构建
npm run docs:build

# 进入生成的构建文件夹
cd docs/.vuepress/dist

# 如果你是要部署到自定义域名
 echo 'docs.leeao82.com' > 'CNAME'

git init
git add -A
git commit -m '增加九宫格抽奖'

# 如果你想要部署到 https://<USERNAME>.github.io
#git push -f git@github.com:<cokucoku>/<cokucoku>.github.io.git master

# 如果你想要部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:cokucoku/docs.git master:gh-pages

cd -