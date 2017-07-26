// var fs = require('fs')
// var fs = require('fs')
import fs from 'fs'
import {getPages} from './core'

console.log(getPages)

var base = {//node基本常数
    currentDir: process.cwd(),
    cliDir: __dirname,
}

// fs.appendFile
// console.log(__dirname+'/pages')
getPages()

// function getPages1() {
//     var files = fs.readdirSync(__dirname + '/pages');
//     files.map(function (file,i) {
//         genFiles(__dirname + '/pages/' + files[i],files[i].split('.')[0])
//     })
// }

// return
// fs.readFile(tfile, 'utf8', function (err, data) {
//     if (err) throw err;
//     var wfile = getTemplate(data);

//     var hwpath = './src/t.wxml'
//     var jwpath = './src/t.js'
//     var cwpath = './src/t.css'
//     var typeArr = [
//         'html',
//         'js',
//         'css'
//     ]
//     var tpath = [
//         hwpath,
//         jwpath,
//         cwpath
//     ]
//     var dd = [
//         getTemplate(data,'html'),
//         getTemplate(data,'js'),
//         getTemplate(data,'css'),
//     ]

//     dd.map(function (d,i) {
//         fs.writeFile(tpath[i], d, function (err) {
//             if (err) throw err;
//             console.log(typeArr[i]+ '\'s saved!');
//         });
//     })

//     // fs.writeFile(wpath, wfile, function (err) {
//     //     if (err) throw err;
//     //     console.log('It\'s saved!');
//     // });
// });
function readFile (p) {
    let rst = '';
    p = (typeof(p) === 'object') ? path.join(p.dir, p.base) : p;
    try {
        rst = fs.readFileSync(p, 'utf-8');
    } catch (e) {
        rst = null;
    }
    return rst;
}


var tags = [
    'div',
    'p',
]


/**
 * 标签替换
 * @param {*} t 
 */
function changeTemp(t){
    t = t.replace(/<div/g, '<view')
    t = t.replace(/<\/div/g, '</view')
    return t;
}