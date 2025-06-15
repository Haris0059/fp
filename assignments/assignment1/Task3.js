//Write a function fetchData that returns a Promise that resolves with "Data received" after 2 seconds.

const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => ("Data recived"),2000)
    })
}
