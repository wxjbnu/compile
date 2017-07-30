import fs from 'fs'
import path from 'path'

// import {getPages} from './core'

/**
 * 此处只支持小文件，大文件需要用流操作
 * @param {*} src 
 * @param {*上级文件夹} dist 
 * @param {*} name 
 */
function copy(src, dist, name) {
    //  fs.createReadStream(src).pipe(fs.createWriteStream(dst))
    let fileBase = path.join(src, name) //当前的是文件名，包括文件和文件夹
    let fileDist = path.join('dist',dist,name)
console.log(fileBase,fileDist,name)
    // const wpath = './'+config.out_path+'/'+ name +'.vue'
    // fs.mkdirSync('dist')
    if(!fs.existsSync('dist')){
        fs.mkdirSync('dist')
    }
    // 判断是否需要新建文件夹
    if(!fs.existsSync(fileDist)
        &&fs.statSync(fileBase).isDirectory()) {
        fs.mkdirSync(fileDist)
    }
    // 如果当前为文件夹就结束复制
    if(fs.statSync(fileBase).isDirectory()){
        return
    }
    fs.readFile(fileBase, 'utf8', function (err, data) {
        fs.writeFile(fileDist, data, function (err) {
            if (err) throw err;
            // console.log(wpath+'\'s saved!');
        });
    })
}

/**
 * 遍历文件夹里面所有文件(和文件夹)
 * 若是文件夹就继续，不是就结束
 * @param {*遍历到的当前文件或者文件夹} dir 
 * @param {*遍历到的目录} root
 */
function travel(dir,root) {
    // return new Promise((resolve,reject)=>{
    let rootfile = root || ''
    fs.readdirSync(dir).forEach(function(file) {
        var pathname = path.join(dir, file)

        copy(dir, rootfile, file)
        if(fs.statSync(pathname).isDirectory()) {
            // 是文件夹，就创建新文件夹
            // 遍历带上上一级的文件夹
            travel(pathname,path.join(rootfile, file))
        }else {
            // 不是文件夹，就复制
            // mkdir (dist+'/'+file)
        }
    });
}


// 以下没用到

function getTemplates(){
    var files = fs.readdirSync(__dirname + './../templates')
    return files
}

/**
 * 获取文件后缀名
 * @param {*文件名} file 
 */
function fileExt(file){
    const dir = __dirname + './../templates'
    let filePath = path.join(dir, file)
    let info = path.parse(filePath)
    return info.ext
}
/**
 * base
 * 判断是否是文件夹
 * @param {*文件名} file 
 */
function isDir(filePath){
    // const dir = __dirname + './../templates/'
    let info = fs.statSync(filePath)
    // console.log(info.isDirectory())
    return info.isDirectory()
}

function copyTemplate (from, to) {
    const files = getTemplates()
    const PATH = 'public'
    files.map((e)=>{
        isDir(e)
        // let f = path.join(__dirname, './../templates', e)
        // write(PATH+'/'+e, fs.readFileSync(f, 'utf-8'))
    })
//   from = path.join(__dirname, './../templates', from)
//   write(to, fs.readFileSync(from, 'utf-8'))
}
function write (path, str, mode) {
  fs.writeFileSync(path, str)
}
function mkdir (path) {
    console.log(path)
    return new Promise((resolve,reject)=>{
        fs.mkdir(path, function (err) {
            resolve(err)
            if(err){
                reject(err)
                return
            }
        })
    })
}
travel(path.join('templates'))


