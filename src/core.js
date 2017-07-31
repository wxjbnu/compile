/**
 * wxj
 * 
 */
import fs from 'fs'
import config from './config'
import path from 'path'

export function getPages() {
    // 找到需要编译的文件夹 page表示页面
    let dir = path.join(__dirname,'pages')
    var files = fs.readdirSync(dir);
    // 循环生成所有页面
    files.map(function (file,i) {
        let src = path.join(__dirname,'pages',files[i])
        genFiles(src,files[i].split('.')[0])
    })
}
genFiles(path.join(__dirname,'temp','vue.wxj'),'test')
/**
 * 
 * @param {*需要将文件编译成什么类型} type 
 */
function compile_file(type){

}
/**
 * 
 * @param {*文件地址} file 
 * @param {*生成文件名称} name 
 */
function genFiles(file,name) {
    // writeFileSync
    // readFileSync
    const type = 'js'
    let ext = '.vue'
    if(type=='template'){

    }
    if(type=='js'){
        ext = '.js'
    }
    if(type=='css'){
        ext = '.css'
    }

    const wpath = './'+config.out_path+'/'+ name + ext
    if(!fs.existsSync(config.out_path)){  
        fs.mkdirSync(config.out_path)
    }

    const data = fs.readFileSync(file,'utf-8')
    const dom_data = changeTemp(data)
    const js_data = changeJS(data)
    const css_data = changeCSS(data)

    fs.writeFileSync(wpath, js_data);

    // fs.readFile(file, 'utf8', function (err, data) {
    //     const file_data = getTemplate(data,'js');
    //     fs.writeFile(wpath, file_data, function (err) {
    //         if (err) throw err;
    //         console.log(wpath+'\'s saved!');
    //     });
    // })
}

/**
 * 模板获取，该方法之间通过字符串的匹配获取。
 * 如有需要，可以将template转换为节点树，通过遍历节点转换模板
 *          将js转换为class，
 * @param {*} data 
 */
function getTemplate(data,type){
    // var temp = data.match(/<template>(\S*)<\/template>/);
    // var temp = data.substring(data.indexOf("<template")+10,data.indexOf("</template>"))
    var temp = data.substring(data.indexOf('<template'))
        .substring(data.substring(data.indexOf('<template')).indexOf(">")+1,data.indexOf('</template>')-data.indexOf('<template'))

    var jstemp = data.substring(data.indexOf('<script'))
        .substring(data.substring(data.indexOf('<script')).indexOf(">")+1,data.indexOf('</script>')-data.indexOf('<script'))

    var csstemp = data.substring(data.indexOf('<style'))
        .substring(data.substring(data.indexOf('<style')).indexOf(">")+1,data.indexOf('</style>')-data.indexOf('<style'))
    // var temp = changeTemp(data)
    if(type=='template'){
        return temp;
    }
    if(type=='js'){
        return jstemp;
    }
    if(type=='css'){
        return csstemp;
    }
}

/**
 * dom的模板
 */
function _dom_temp(data){
    const temp = data.substring(data.indexOf('<template'))
        .substring(data.substring(data.indexOf('<template')).indexOf(">")+1,data.indexOf('</template>')-data.indexOf('<template'))
    return temp
}

/**
 * 获取文件中的js
 * @param {*源地址} src 
 */
function _js_temp(data){
    // 变换
    // const data = fs.readFileSync(src,'utf-8')
    const jstemp = data.substring(data.indexOf('<script'))
        .substring(data.substring(data.indexOf('<script')).indexOf(">")+1,data.indexOf('</script>')-data.indexOf('<script'))
    return jstemp
}

/**
 * css的模板
 */
 function _css_temp(data){
    //  变换
    const csstemp = data.substring(data.indexOf('<style'))
        .substring(data.substring(data.indexOf('<style')).indexOf(">")+1,data.indexOf('</style>')-data.indexOf('<style'))
    return csstemp
 }

/**
 * 
 * @param {*转换模板数据} data 
 */
function changeTemp(data){
    return _dom_temp(data)
}

/**
 * 主要包括事件，生命周期的转换
 * @param {*转换js} js 
 */
function changeJS(js){
    // 变换
    return _js_temp(js)
}

/**
 * 
 * @param {*转换css} css 
 */
function changeCSS(css){
    return _css_temp(css)
}