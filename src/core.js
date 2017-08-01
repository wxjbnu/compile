/**
 * wxj
 * 
 */
import fs from 'fs'
import config from './config'
import path from 'path'


// 获取页面文件
export function getPages() {
    // 找到需要编译的文件夹 page表示页面
    var files = fs.readdirSync(__dirname + '/pages');
    
    // 循环生成所有页面
    files.map(function (file,i) {
        genFiles(path.join(__dirname,'pages',files[i]),files[i].split('.')[0])
    })
}

/**
 * 将js的export default去掉
 * @param {*} code 
 */
function jstojs(code) {
    function test($1){   
     return 'obj=';
    }   
    var reg = new RegExp("export default","g");   
    var newstr = code.replace(reg,test);
}

/**
 * 获取文件后缀
 * @param {*} filepath 
 */
function getExt(filepath){
    let info = path.parse(filepath);
    return info.ext;
}

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
    const wpath = './'+config.out_path+'/'+ name +'.vue'
    if(!fs.existsSync(config.out_path)){  
        fs.mkdirSync(config.out_path)
    }
    fs.readFile(file, 'utf8', function (err, data) {
        const file_data = getTemplate(data,'template');
        fs.writeFile(wpath, file_data, function (err) {
            if (err) throw err;
            console.log(wpath+'\'s saved!');
        });
    })
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
function _dom_temp(){

}

/**
 * js的模板
 */
function _js_temp(){

}

/**
 * css的模板
 */
 function _css_temp(){

 }

/**
 * 
 * @param {*转换模板数据} data 
 */
function changeTemp(data){

}

/**
 * 主要包括事件，生命周期的转换
 * @param {*转换js} js 
 */
function changeJS(js){

}

/**
 * 
 * @param {*转换css} css 
 */
function changeCSS(css){

}