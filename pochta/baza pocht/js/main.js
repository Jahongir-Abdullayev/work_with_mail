clients = [
    {
        login: 'USC191',
        fio: 'ShomurodovEldorShomurodov',
        email: 'Erik61.Genoa@gmail.comdscsdcsdccsdretrhyrtgrf',
        type: 'client'
    },
    {
        login: 'USC777',
        fio: 'Masharipov Jaloliddin',
        email: 'Paxtakor_1191@mail.com',
        type: 'client'
    },
    {
        login: 'USC002',
        fio: 'Qudratullayev O`tkir',
        email: 'O`tkir1771_.@gmail.com',
        type: 'performer'
    },
    {
        login: 'USC154',
        fio: 'Fayzullayev Eshmat',
        email: 'Fayz.studio@mail.com',
        type: 'performer'
    },
    {
        login: 'USC288',
        fio: 'Fayzasdsadassssssssssssssssssxasxa.rjvn;eairjvb;ivbiavui;bv;uir;irb',
        email: 'Fayz.stasdasdsdsaxxxxxxxxrt6yhrgefwdqdeefrgthyujkiukyjthrgfexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        type: 'performer'
    }
]

block()
function block(){
    let s = '';
    let n = 1;
    
    
    //  clients[0].fio.push("...");
    for (const client of clients) {
        if(client.fio.length > 20){
            client.fio = client.fio.slice(0,50);
            client.fio +="...";
        }
        if(client.email.length > 25){
            client.email = client.email.slice(0,50);
            client.email +="...";
        }
        s+=`<div class="body_item">
        <div class="emails">${n}</div>
        <a href="#" class="emails login">${client.login}</a>
        <div class="emails">${client.fio}</div>
        <a href="#" class="emails mail">${client.email}</a>
        </div>`
        n++
    }

    document.querySelector('.body_content').innerHTML = s
    
    function checked() {
        if (document.querySelectorAll('#client')[0].checked == true && document.querySelectorAll('#programer')[0].checked != true) {
            s = '';
            n = 1;
            for (const client of clients) {
                if (client.type == 'client') {
                    s += `<div class="body_item">
                    <div class="emails">${n}</div>
                    <a href="#" class="emails login">${client.login}</a>
                    <div class="emails">${client.fio}</div>
                    <a href="#" class="emails mail">${client.email}</a>
                    </div>`
                    n++
                }
            }
        } else if (document.querySelectorAll('#client')[0].checked != true && document.querySelectorAll('#programer')[0].checked != true) {
            s = '';
            n = 1;
            for (const client of clients) {
                if (client.type == 'client' || client.type == 'performer') {
                    s += `<div class="body_item">
                    <div class="emails">${n}</div>
                    <a href="#" class="emails login">${client.login}</a>
                    <div class="emails">${client.fio}</div>
                    <a href="#" class="emails mail">${client.email}</a>
                    </div>`
                    n++
                }
            }
        } else if (document.querySelectorAll('#client')[0].checked == true && document.querySelectorAll('#programer')[0].checked == true) {
            console.log(1);
            s = '';
            n = 1;
            for (const client of clients) {
                s += `<div class="body_item">
                <div class="emails">${n}</div>
                <a href="#" class="emails login">${client.login}</a>
                <div class="emails">${client.fio}</div>
                <a href="#" class="emails mail">${client.email}</a>
                </div>`
                n++
            }
        } else if (document.querySelectorAll('#programer')[0].checked == true && document.querySelectorAll('#client')[0].checked != true) {
            s = '';
            n = 1;
            for (const client of clients) {
                if (client.type == 'performer') {
                    s += `<div class="body_item">
                    <div class="emails">${n}</div>
                    <a href="#" class="emails login">${client.login}</a>
                    <div class="emails">${client.fio}</div>
                    <a href="#" class="emails mail">${client.email}</a>
                    </div>`
                    n++
                    document.querySelector('.body_content').innerHTML = s
                }
            }
        } 
    }

    document.querySelector('#client, #programer').addEventListener('click', () => {
        checked();
        document.querySelector('.body_content').innerHTML = s
    })

    document.querySelector('#programer').addEventListener('click', () => {
        checked();
        document.querySelector('.body_content').innerHTML = s
    })


}


