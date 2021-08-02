const button = document.getElementById('btn1')
const text = document.getElementById('input1')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const idd = text.value
    console.log(idd);

    const url = `https://jsonplaceholder.typicode.com/users/${idd}`

    const xhr = new XMLHttpRequest()

    xhr.open('GET', url)
    xhr.onreadystatechange = () => {
        if (xhr.status == 200 ) {
            console.log(xhr.responseText);
            const userData = JSON.parse(xhr.responseText)
            const data1 = document.getElementById('table-data')
            data1.innerHTML = userData.id
            const data = document.getElementById('table-data1')
            data.innerHTML = userData.username

            const data2 = document.getElementById('table-data2')
            data2.innerHTML = userData.email

            const data3 = document.getElementById('table-data3')
            data3.innerHTML = userData.phone

            const data4 = document.getElementById('table-data4')
            data4.innerHTML = userData.website

            
        }
        if (xhr.status == 404) {
            // alert('Username does not exist')
            const errorBox = document.getElementById('error-box')
            errorBox.innerHTML = `<h4>Sorry, ID: ${idd} does not exist! Please Enter a number between 1 to 10</h4>`
            const userData = JSON.parse(xhr.responseText)
            const data = document.getElementById('table-data')
            data.innerHTML = `<h3>null</h3>`
        }
    }
    xhr.send()
})