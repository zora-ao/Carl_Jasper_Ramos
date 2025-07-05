const certificatesImg = [
    {title: "Web Design", src: './certificates/responsive.png'},
    {title: "Javascript Data Structure and Algorithm", src: './certificates/javascript.png'},
    {title: "Front End Development Libraries", src: './certificates/react.png'}
];

const certificateBtn = document.querySelectorAll('.certificate-btn');
const displayCertificate = document.getElementById('display-certificate');

certificateBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {

        displayCertificate.classList.add('opacity-0', 'ease', "duration-300");
        
        setTimeout(() => {
            displayCertificate.setAttribute('src', certificatesImg[index].src);
            displayCertificate.classList.remove('opacity-0');
        }, 500)
        
    })
})