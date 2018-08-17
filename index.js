module.exports = function(context, event) {

    // context.log("event: %j", event);
    const rawText = event.body.split('&').find((pair) => {
        return pair.startsWith('text=');
    });
    const userName = event.body.split('&').find((pair) => {
        return pair.startsWith('user_name=');
    });

    context.log("userName: %j", userName);
    if (rawText === undefined || userName === undefined || userName === 'user_name=slackbot') {
        context.done();
        return;
    }   

    const text = decodeURIComponent(rawText.substr(5));
    context.log("text:%s", text);

    // この辺でいろいろやってみる

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            text: "わぁい " + text + " あかり" + text + "大好き!"
        }
    };
    context.bindings.outputDocument = {text};
    context.done();
};
