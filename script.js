function getSettings() {
    // Получаем значения из полей ввода
    var idInstance = document.getElementById('idInstance').value;
    var apiTokenInstance = document.getElementById('apiTokenInstance').value;

    // Формируем URL для вызова API
    var url = 'https://api.green-api.com/waInstance' + idInstance + '/getSettings/' + apiTokenInstance;

    // Выполняем GET запрос к API
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Выводим ответ в текстовое поле
            document.getElementById('responseTextarea').value = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}


function getStateInstance() {
    // Получаем значения из полей ввода
    var idInstance = document.getElementById('idInstance').value;
    var apiTokenInstance = document.getElementById('apiTokenInstance').value;

    // Формируем URL для вызова API
    var url = 'https://api.green-api.com/waInstance' + idInstance + '/getStateInstance/' + apiTokenInstance;

    // Выполняем GET запрос к API
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Выводим ответ в текстовое поле
            document.getElementById('responseTextarea').value = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}


function sendMessage() {
    // Получаем значения из полей ввода
    var idInstance = document.getElementById('idInstance').value;
    var apiTokenInstance = document.getElementById('apiTokenInstance').value;
    var phoneNumber = document.getElementById('phoneNumber').value + "@c.us";
    var message = document.getElementById('message').value;

    // Формируем URL для вызова API
    var url = 'https://api.green-api.com/waInstance' + idInstance + '/sendMessage/' + apiTokenInstance;

    //обявляем параметры для передачи
    var requestData = {
        chatId: phoneNumber,
        message: message
    };

    // Выполняем GET запрос к API
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    // Выводим ответ в текстовое поле
    .then(data => {
        document.getElementById('responseTextarea').value = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}



function sendFileByUrl() {
     // Получаем значения из полей ввода
    var idInstance = document.getElementById('idInstance').value;
    var apiTokenInstance = document.getElementById('apiTokenInstance').value;
    var phoneNumber = document.getElementById('phoneNumberFile').value + "@c.us";
    var fileUrl = document.getElementById('fileUrl').value;
    var fileName = "файл";

    // Формируем URL для вызова API
    var url = 'https://api.green-api.com/waInstance' + idInstance + '/sendFileByUrl/' + apiTokenInstance;

    //обявляем параметры для передачи
    var requestData = {
        chatId: phoneNumber,
        urlFile: fileUrl,
        fileName: fileName
    };
    
    // Выполняем GET запрос к API
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    // Выводим ответ в текстовое поле
    .then(data => {
        document.getElementById('responseTextarea').value = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}

