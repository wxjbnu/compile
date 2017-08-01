var str = '<div>{{name}}</div>'
str.replace(/\{\{([^}]+)\}\}/ig, function (matchs, words) {
    console.log(matchs,words)
})