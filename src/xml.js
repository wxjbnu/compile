import {DOMParser, DOMImplementation} from 'xmldom';

import cheerio from 'cheerio'
import fs from 'fs'
import path from 'path'


const domstr = `
            <div>
                <ul @click="showall">
                    <li>aaa</li>
                    <li>bbb</li>
                    <li>ccc</li>
                </ul>
                <p>这个是列表</p>
            </div>
        `
const dom1 = `
    <div @click="showall" class="main">
        <span>欢迎欢迎</span>
        <br>
        <span class="toggle">wxj</span>
        <br>
        <p @click="goto(123)">
        oschina github
        1:git add .
        2:git commit -am "speak"
        3:git push origin dev
        </p>
    </div>
`
// new DOMParser().parseFromString(domstr,'text/html');
// const $ = cheerio.load(`<temp>${dom1}</temp>`,{
//     ignoreWhitespace: true,
//     decodeEntities: false
// });


function xmlLoop(node,$) {
    // console.log($)
    // console.log('xmlloop')
    // console.log(node)
    // console.log(node.html())
    // console.log(node.length)
    if(node.length>0){
        node.map(function(i,e) {
            
            if($(this).children().length>0){
                // 如果还有子元素继续遍历
                xmlLoop($(this).children(),$)
            }
            // 没有子元素了
            // 判断点击事件
            if($(this).attr('@click')){
                console.log($(this).attr('@click'))
                // 有click事件
                $(this).attr('wx:tap',$(this).attr('@click'))
                $(this).attr('@click',null)
            }
            // 判断列表渲染
            if($(this).attr('w:for')){
                if(!$(this).attr('w:item')){
                    // 必须要有item
                    return
                }
                if(!$(this).attr('w:index')){
                    // 必须要有index
                    return
                }
                let arr = $(this).attr('w:for')
                let item = $(this).attr('w:item')
                let index = $(this).attr('w:index')
                console.log($(this).attr('@click'))
                // 有click事件
                $(this).attr('wx:for',`(${item},${index}) in ${arr}`)
                $(this).attr('w:for',null)
                $(this).attr('w:item',null)
                $(this).attr('w:index',null)
            }
            console.log($(this).html())
        });
        
    }
}



// xmlLoop($('temp').children())
// console.log('输出html:')
// console.log($('temp').html())
// console.log($('temp').children().eq(0).html())
const fileDist = path.join('dist','index.html')
// fs.writeFile(fileDist, $('temp').html(), function (err) {
//     if (err) throw err;
//         console.log('保存完成')
//     // console.log(wpath+'\'s saved!');
// });

fs.readFile(path.join(__dirname,'pages','index.wxj'), 'utf8', function (err, data) {
    // data = data.replace(/template/g,'temp')
    let $ = cheerio.load(`<temp>${data}</temp>`,{
        ignoreWhitespace: true,
        decodeEntities: false
    });
    // 只获取template部分,script和style部分过滤掉
    let dd = $('template').html()
    $ = cheerio.load(`<temp>${dd}</temp>`,{
        ignoreWhitespace: true,
        decodeEntities: false
    });
    // console.log($('temp').html())
    // console.log($('temp'))
    // console.log($.html())
    // return
    xmlLoop($('temp').children(),$)
    let outdata = $('temp').html().replace(/temp/g,'template')
    fs.writeFile(fileDist, outdata, function (err) {
        if (err) throw err;
            console.log('保存完成')
        // console.log(wpath+'\'s saved!');
    });
})
