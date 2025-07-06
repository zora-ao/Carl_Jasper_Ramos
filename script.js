const certificatesImg = [
    {title: "Web Design", src: './certificates/responsive.png', link: "https://www.freecodecamp.org/certification/ao_zora/responsive-web-design"},
    {title: "Javascript Data Structure and Algorithm", src: './certificates/javascript.png', link: "https://www.freecodecamp.org/certification/ao_zora/javascript-algorithms-and-data-structures-v8"},
    {title: "Front End Development Libraries", src: './certificates/react.png', link: "https://www.freecodecamp.org/certification/ao_zora/front-end-development-libraries"}
];

const certificateBtn = document.querySelectorAll('.certificate-btn');
const displayCertificate = document.getElementById('display-certificate');
const closeCertificate = document.getElementById("close-certificate");
const certificateImg = document.getElementById("certificate-img");
const certificateLink = document.getElementById('certificate-link');

certificateBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {

        displayCertificate.classList.add('opacity-0', 'ease', "duration-300");
        
        setTimeout(() => {
            displayCertificate.setAttribute('src', certificatesImg[index].src);
            displayCertificate.classList.remove('opacity-0');
            certificateImg.classList.toggle('hidden');
            certificateLink.setAttribute(href, certificatesImg[index].link)
        }, 500)  
    })
});

closeCertificate.addEventListener('click', () => {
    certificateImg.classList.toggle('hidden');
})












//Transitions
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            if(entry.target.classList.contains('hide')){
                entry.target.classList.remove('hide')
                entry.target.classList.add('show')
                
            }
        } else {
            entry.target.classList.remove('show')
            entry.target.classList.add('hide')
        }
    })
});

const element = document.querySelectorAll('.hide');
element.forEach((el) => observer.observe(el));