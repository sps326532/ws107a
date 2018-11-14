var fs = require('fs'); // 引用檔案物件

fs.readFile('hello.txt', 'utf-8', function (err, text) {
    if (err) throw Error('error!') //辨識是否發生錯誤
    console.log('text=', text)  
    fs.readFile('test.txt', 'utf-8', function (err, text2) {
        console.log('text2=', text2)        
    })
})

