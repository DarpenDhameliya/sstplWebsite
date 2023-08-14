export default function StickyMenu() {
    document.addEventListener('scroll', () => {
        const element = document.querySelector('.softstormweb-header_sticky');
         if (element) {
            if (document.documentElement.scrollTop > 150) {
                element.classList.add('sticky');
            } else {
                element.classList.remove('sticky');
            }
        }
    });
}
