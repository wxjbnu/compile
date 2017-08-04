var func = [] //函数对象
var obj = [] //


var vue_fun_name = [
    'data'
]

var vue_obj_name = [
    'props',
    'method',
    'mounted',
]

function buildjs(data) {
    const jstemp = data.substring(data.indexOf('<script'))
        .substring(data.substring(data.indexOf('<script')).indexOf(">")+1,data.indexOf('</script>')-data.indexOf('<script'))
    return `<js>${jstemp}</js>`
}

module.exports = buildjs