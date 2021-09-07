function showDate() {
    let date = setInterval(() => {
        let dates = new Date();
        let year = dates.getFullYear();
        let month = dates.getMonth() + 1;
        let day = dates.getDate();
        let hour = dates.getHours();
        let minute = dates.getMinutes();
        let second = dates.getSeconds();
        document.querySelector('#date').innerHTML = `${year}年${month}月${day}日${hour}時${minute}分${second}秒`;
    }, 1000);

    let btn = document.createElement('button');
    btn.innerText = "停止";
    btn.style.fontSize = '16px';
    btn.style.color = '#0bfff4';
    btn.style.backgroundColor = '#e666e5';
    btn.style.outline = 'none';
    btn.style.borderRadius = '10px';
    btn.style.width = '50px';
    btn.style.height = '50px';
    document.body.append(btn)

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        clearInterval(date);
        btn.style.width = '80px';
        btn.style.height = '50px';
        btn.innerText = "已停止！";
    })
    btn.addEventListener("dblclick", (e) => {
        e.preventDefault();
        setInterval(() => {
            let dates = new Date();
            let year = dates.getFullYear();
            let month = dates.getMonth() + 1;
            let day = dates.getDate();
            let hour = dates.getHours();
            let minute = dates.getMinutes();
            let second = dates.getSeconds();
            document.querySelector('#date').innerHTML = `${year}年${month}月${day}日${hour}時${minute}分${second}秒`;
        }, 1000);
        btn.style.width = '80px';
        btn.style.height = '50px';
        btn.innerText = "已开启！";
    })


}

function months() {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    document.body.append(document.createElement("p").innerHTML = months);
}

class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    setAnimal(name, age) {
        this.name = name;
        this.age = age;
    }

    getAnimal() {
        let div = document.createElement('div');
        div.innerText = (`名字：${this.name},年龄：${this.age} `)
        document.body.append(div)

    }
}

function TestData() {

    let testDatas = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    for (const testData of testDatas) {
        let p = document.createElement('p');
        p.className = 'app';
        p.id = 'root';
        p.style.borderBottom = '1px solid black';
        p.style.borderRadius = '5px';
        p.style.paddingLeft = '5px';
        p.innerText = testData;
        document.body.append(p);
        // document.getElementById('root').innerHTML = "改变了";
        document.querySelector('#root').innerHTML = `这就是app吗？`;
    }
}

function MAP() {
    console.log([1, 2, 3].map(n => n + 1));
}


export {
    showDate,
    months,
    Animals,
    TestData,
    MAP
}