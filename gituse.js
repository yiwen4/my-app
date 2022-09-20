//Git  分布式版本控制系统

//git init                      把这个目录变成Git可以管理的仓库
//把一个文件放到Git仓库
//1. git add                    把文件添加到仓库
//2.git commit                  告诉Git，把文件提交到仓库
//-m                            后面输入的是说明

//git status                    掌握仓库当前的状态
//git diff                      查看和上一个版本的不同
//git log                       查看历史提交日志
//git log --pretty=oneline      同上 精简版

//当前版本append GPL
//HEAD                          当前版本
//HEAD^                         上一个版本就是   
//HEAD^^                        上上一个版本
//HEAD~100                      就是当然往上100个版本 

//git reset --hard HEAD^        回退到上一个版本
//cat readme.txt                查看仓库里的这个文件
//git reset --hard 1094a        指定回到1094a版本 (1094a,某个版本号的前几位，终端没关时可向上查询)
//git reflog                    记录你的每一次命令（可查询操作的版本号，终端关了也不怕）

//HEAD指向master，master指向提交

//工作区：电脑里能看到的目录
//版本库：隐藏目录.git
//工作区 --add-- 版本库
//版本库：stage --commit-- (HEAD->)master
//stage暂存区，git有别于其它版本工具的地方   ******（特色）
//Git跟踪并管理的是修改，而非文件

//回退修改
//回退到上一个版本，的条件是没有把自己的本地版本库推送到远程
//git checkout -- file          丢弃工作区的修改, 一键还原工作区的修改
//git reset HEAD <file>         把暂存区的修改撤销掉（unstage），重新放回工作区

//rm test.txt                   删除文件
//git rm                        删除提交到stage

//远程仓库      ******（特色）
//github提供git仓库托管服务，（一般要搭建git服务器
//本地Git仓库和GitHub仓库之间的传输是通过SSH加密的
//open ~/.ssh                   找到.ssh文件
//公开的Git仓库 /交费变私有的仓库 或 自己动手，搭一个Git服务器

//本地与服务器上的两个仓库进行远程同步
//origin  远程库
//git remote                查看远程库
//git remote -v
//ssh免密配置登陆  

//登录名是邮箱，密码是令牌
//git branch -M main
//git push -u origin main

//git clone git@github.com:xxx/yyy.git      克隆一个远程库
//Git支持多种协议，包括https，但ssh协议速度最快

//分支
//git分支与svn之类相比，极快
//Git鼓励使用分支完成某个任务，合并后再删掉分支，这和直接在master分支上工作效果是一样的，但过程更安全
//git switch -c dev             创建并切换到叫“dev”的分支 
//git checkout -b dev           同上，以前的叫法
//git branch dev  
//git checkout dev              这两条作用同上
//git branch                    查看当前分支，标*号的表示当前分支
//git switch master             切换回master/main分支（主分支）
//git checkout master/main      同上，以前的叫法
//git merge dev                 把dev分支的工作成果合并到主分支上
//git branch -d dev             删除dev分支
//解决冲突就是把Git合并失败的文件手动编辑为我们希望的内容，再提交
//“Fast-forward”                “快进模式”合并，直接把master指向dev的当前提交，合并速度非常快
//“merge with no-ff”            合并后的历史有分支，能看出来曾经做过合并。快速模式看不出
//git merge --no-ff -m "merge with no-ff" dev    --no-ff方式的合并

//分支管理
//master分支应该是非常稳定的，仅用来发布新版本，平时不能在上面干活
//dev分支是不稳定的，版本发布时，再把dev分支合并到master上，在master分支发布1.0版本
//小伙伴们每个人都有自己的分支，时不时地往dev分支上合并就可

//git stash                     可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作
//git stash list                查看刚才的工作现场
//git stash apply               恢复工作现场，恢复后，stash内容并不删除，你需要用git stash drop来删除
//git stash pop                 恢复的同时把stash内容也删了

