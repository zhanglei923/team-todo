let taskUtil = {
    addTask:() => {
        let promise = new Promise((resolve, reject) => {
            var timeOut = Math.random() * 2;
            setTimeout(function () {
                if (timeOut < 1) {
                    resolve('200 OK');
                }
                else {
                    reject('timeout in ' + timeOut + ' seconds.');
                }
            }, timeOut * 1000);
        });
        return promise
    }
};
export default taskUtil;
