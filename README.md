# ShiTuServer

### 下载之后,可以直接配置config文件夹下的config文件,将四个参数对应上就可以了.

### 如果不明白怎么操作可以加QQ群:397885169询问

#### ps:需要先申请[七牛云](https://portal.qiniu.com/signup?code=3lltr8m6i84eq),也可以用过我这个邀请链接直接注册.(通过下面链接注册后,会给我添加一些空间.)
##### https://portal.qiniu.com/signup?code=3lltr8m6i84eq

`config`

```
qiniu:{
        // 存储图片的空间名
        imagePutPolicy:'',
        // 图片的测试域名(可以使用正式的)
        imageDomainName:'',
        // 注册之后,头像=>个人中心=>秘钥管理
        // 将AK和SK填写在下面
        AK:'',
        SK:'',
    },
```

完成上面的步骤之后,就可以使用`node index`来运行本地服务器了.


```
const { res } = this;
```
如果遇到上面的报错,可以升级一下node环境试一下.

![](https://github.com/RabbitDream/ShiTuServer/blob/master/%E4%B8%83%E7%89%9B%E4%BA%91%E9%85%8D%E7%BD%AE.png)

