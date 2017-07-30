require('colors');
const path = require('path');
const download = require('download-github-repo');

function create(name, options) {
     let rootDir = path.join(process.cwd(), name);
    console.log('下载初始项目...'.green);
    download('maichong/labrador-demo', rootDir, () => {
        console.log('下载完毕'.green);
    })
}

create('repo')