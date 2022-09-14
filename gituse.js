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

//工作区：电脑里能看到的目录
//版本库：隐藏目录.git
//工作区 --add-- 版本库
//版本库：stage --commit-- (HEAD->)master
//stage暂存区，git有别于其它版本工具的地方
//Git跟踪并管理的是修改，而非文件

//yy is sb
