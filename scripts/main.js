const div_notification_list = document.querySelectorAll('div.notification');
div_notification_list.forEach(div => {
    div.addEventListener('click', function (e) {
       div.parentElement.removeChild(div); 
    });
});