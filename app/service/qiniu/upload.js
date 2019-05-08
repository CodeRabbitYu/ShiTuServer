'use strict';

const Service = require('egg').Service;

class UploadService extends Service {
  async uploadImage() {
    const { token } = this.ctx.request.body;
    const imageURL =
      'http://' + this.config.qiniu.imageDomainName + '/' + token;

    let webURL =
      'http://image.baidu.com/wiseshitu?' +
      'guess=1&uptype=upload_wise&queryImageUrl=' +
      imageURL +
      '&querySign=&simid=';

    webURL =
      'https://graph.baidu.com/details?isfromtusoupc=0&tn=wise&carousel=0' +
      '&promotion_name=pc_image_shituindex&extUiData%5bisLogoShow%5d=1&image=&image=' +
      imageURL;

    return webURL;
  }
}

module.exports = UploadService;
