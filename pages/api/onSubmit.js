

const onSubmit = e => {
    e.preventDefault();
    const url = '"https://gmail.us8.list-manage.com/subscribe/post?u=06c5cfe85e8441854cd2b954b&amp;id=eafc28b971&amp;f_id=008e79e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank"';
    jsonp(`${url}&EMAIL=${email}`, { param: 'c' }, (_, data) => {
        const { msg, result } = data
        // do something with response
        alert(msg);
    });
};

