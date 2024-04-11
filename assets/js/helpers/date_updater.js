function updateCopyright(){
    const currentYear = new Date().getFullYear();

    const copyrightElement = document.querySelector('.footer__copy');
    copyrightElement.textContent = `© ${currentYear}, todos los derechos reservados`;
}
export default updateCopyright();