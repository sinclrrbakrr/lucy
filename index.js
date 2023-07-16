clicou = false

function iHaveTelegram() { }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function ola() {
    var text1 = "OlÃ¡ me chamo ValÃ©ria e sou detetive digital a mais de 10 anos! "
    addTextInChat(text1);

    var text2 = "Para ver as mensagens, digite o nÃºmero de quem vocÃª quer monitorar no campo abaixo!";
    setTimeout(addTextInChat, text1.length * 23, text2);

    setTimeout(addInputNumber, (text1.length + text2.length) * 23, salvarNumero);
}

function salvarNumero() {
    var number = document.getElementById("input-number")
    if(number.value.length < 15) {
        alert('NÃºmero do telefone Ã© obrigÃ¡torio')
        return false
    }

    if(clicou == true){
        return false
    }
    clicou = true

    
    console.log(number.value, 'post')
    let post = JSON.stringify({ telefone: number.value })
    console.log(post, 'post')
    fetch("salvarTelefone.php", {
        method: 'post',
        body: post,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response.json()
    }).then((res) => {
        if (res.status === 201) {
            console.log("Post successfully created!")
        }
    }).catch((error) => {
        console.log(error)
    })



    // const url = "/save-number"
    // let xhr = new XMLHttpRequest()
    // xhr.open('POST', url, true)
    // xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    // xhr.send(post);

    if (number.value) {
        var text1 = "Ok estou analisando as mensagensâ€¦ ";
        setTimeout(addTextInChat, 200, text1);

        var text2 = "Enquanto isso, assista a esse pequeno depoimento de 5 minutos das minhas clientes, onde explico como funciona o nosso sistemaâ€¦";
        setTimeout(addTextInChat, (text1.length * 25) + 400, text2);
        var tempoVideo = 2500
        setTimeout(addVideoToChat, (text1.length * 25) + (text2.length * 25) + 400, "https://scripts.converteai.net/62ce4115-1667-4bb8-ae3d-c95d33a16292/players/6477cdeeee66280009d9d2fd/embed.html" );
        
        var text3 = "JÃ¡ encontrei 1 mensagem suspeitaâ€¦";
        setTimeout(addTextInChatScroll, (text1.length * 25) + (text2.length * 25) + (tempoVideo * 16) + 0, text3);
        
        var text4 = "Aguarde, vocÃª logo terÃ¡ acesso as mensagens, estou quase finalizando";
        setTimeout(addTextInChatScroll, (text1.length * 25) + (text2.length * 25) + (tempoVideo * 13) + (text3.length * 25) + 32500, text4);

        var text5 = "Estou surpreso, encontrei 9 mensagens e 3 fotos suspeitas...";
        setTimeout(addTextInChatScroll, (text1.length * 25) + (text2.length * 25) + (tempoVideo * 80) + (text3.length * 25) + (text4.length * 25) + 0, text5);
        
        var text6 = "Click no botÃ£o abaixo e faÃ§a seu pagamento para ter acesso Ã s mensagens agora...";
        setTimeout(addTextInChatScroll, (text1.length * 25) + (text2.length * 25) + (tempoVideo * 120) + (text3.length * 25) + (text4.length * 25) + (text5.length * 25) + 0, text6);
        
        setTimeout(linkFinal, (text1.length * 25) + (text2.length * 25) + (tempoVideo * 120) + (text3.length * 25) + (text4.length * 25) + (text5.length * 25) + (text6.length * 25) + 0);


    }
}

function addTimeToDiv(content) {
    var tm = document.createElement('div');
    tm.setAttribute("id", "time");
    var today = new Date();
    var time = today.getDate() + "/" + (today.getMonth() + 1) + '/' + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    tm.innerHTML = time;
    content.appendChild(tm);
}

function scrollDown() {
    var objDiv = document.getElementById("chatbox");  
    objDiv.scrollTop = objDiv.scrollHeight + 100;

    window.scrollTo(0, document.body.scrollHeight);
}

function addVideoToChat(videoURL) {
    var avatar = document.createElement('img');
    avatar.setAttribute("id", "avatar");
    avatar.setAttribute("src", "./public/images/perfil.jpg");
    avatar.classList.add("avatarStyle");

    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-text-video");
    textElement.classList.add("textConversaVideo");

    textElement.appendChild(avatar);

    var video = document.createElement('iframe');
    video.src = videoURL;
    video.controls = true;
    video.muted = false;
    video.height = 240;
    video.width = 320;

    textElement.appendChild(video);

    document.getElementById("chatbox").appendChild(textElement);

    scrollDown()
    // avatar.scrollIntoView();

    // addTimeToDiv(textElement)
}
function addLinkInChat(text, link) {
    var avatar = document.createElement('img');
    avatar.setAttribute("id", "avatar");
    avatar.setAttribute("src", "./public/images/perfil.jpg");

    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-text");
    textElement.classList.add("textConversa");

    textElement.appendChild(avatar);

    var p = document.createElement('p');

    textElement.appendChild(p);

    document.getElementById("chatbox").appendChild(textElement);

    var a = document.createElement('a');
    a.setAttribute("href", link);

    textElement.appendChild(a);

    typeWriter(text, a);

    // addTimeToDiv(textElement);

    // avatar.scrollIntoView();
    scrollDown();
}

function addInputNumber(func) {

    var div = document.createElement('div');
    div.setAttribute("id", "chat-user-text");

    var input = document.createElement('input');
    input.setAttribute("id", "input-number")
    input.setAttribute("placeholder", "EX: DDD + NÃºmero")
    input.classList.add("inputStyle");
    input.classList.add("phone_with_ddd");
    $(input).ready(function () {
        $('.phone_with_ddd').mask('(00) 00000-0000');
    })

    div.appendChild(input);

    var div2 = document.createElement('div');
    div2.setAttribute("id", "chat-user-button");

    var button = document.createElement('button');
    button.classList.add("form-control");
    button.innerHTML = "Enviar";
    button.onclick = func

    div2.appendChild(button);

    document.getElementById("chatbox").appendChild(div);

    document.getElementById("chatbox").appendChild(div2);
}

function addButtonToChat(text, func, element) {
    var bt = document.createElement("button");
    bt.setAttribute("id", "bot-bt");
    bt.innerHTML = text;
    bt.onclick = func;

    element.appendChild(bt);
    document.getElementById("chatbox").appendChild(element);

    // element.scrollIntoView();
    scrollDown();
}

function addTextInChat(text) {
    const delay = ms => new Promise(res => setTimeout(res, ms));

    var avatar = document.createElement('img');
    avatar.setAttribute("id", "avatar");
    avatar.setAttribute("src", "./public/images/perfil.jpg");
    avatar.classList.add("avatarStyle");

    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-text");
    textElement.classList.add("textConversa");

    textElement.appendChild(avatar);

    var p = document.createElement('p');

    textElement.appendChild(p);
    document.getElementById("chatbox").appendChild(textElement);

    // addTimeToDiv(textElement);
    typeWriter(text, p);
}

function addTextInChatScroll(text) {
    const delay = ms => new Promise(res => setTimeout(res, ms));

    var avatar = document.createElement('img');
    avatar.setAttribute("id", "avatar");
    avatar.setAttribute("src", "./public/images/perfil.jpg");
    avatar.classList.add("avatarStyle");

    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-text");
    textElement.classList.add("textConversa");

    textElement.appendChild(avatar);

    var p = document.createElement('p');

    textElement.appendChild(p);
    document.getElementById("chatbox").appendChild(textElement);    

    scrollDown()
    typeWriter(text, p);
    scrollDown()
    
}

function addUserTextInChat(text) {
    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-user-text");

    var p = document.createElement('p');

    textElement.appendChild(p);

    document.getElementById("chatbox").appendChild(textElement);

    typeWriter(text, p);

    // textElement.scrollIntoView();
    scrollDown();

    var tm = document.createElement('div');
    tm.setAttribute("id", "time-user");
    var today = new Date();
    var time = today.getDate() + "/" + (today.getMonth() + 1) + '/' + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    tm.innerHTML = time;
    textElement.appendChild(tm);
}

function typeWriter(txt, div) {
    let i = 0;

    typeWriterHandler = () => {
        txt = txt.slice(1);
        typeWriter(txt, div);
    }
    if (i < txt.length) {
        div.innerHTML += txt.charAt(i)
        i++;
        setTimeout(typeWriterHandler, 20);
    }
}

function linkFinal() {
    var div = document.createElement('div');
    div.setAttribute("id", "chat-user-text");
    div.classList.add("MensagemSuspeitaStyle");
    var bt = document.createElement("a");
    bt.setAttribute("id", "chat-user-text");
    bt.innerHTML = "Ver mensagens suspeitas agora";
    bt.href = 'https://go.perfectpay.com.br/PPU38CM39KR';

    div.appendChild(bt);

    document.getElementById("chatbox").appendChild(div);
    scrollDown();
}

ola()