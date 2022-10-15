const delayMiddleware = store => next => action => {
    setTimeout(() => {
        console.log('Delaying action: ', action)
        next(action)
    }, 1000)
}

module.exports = {delayMiddleware}