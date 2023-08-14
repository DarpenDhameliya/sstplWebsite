export default function TopToBottom(value) {
    const result = document.querySelector(value);
    if (result) {
        document.addEventListener('scroll', () => {
            if (
                document.documentElement.scrollTop > 200
            ) {
                result.style.display = 'block';
            } else {
                result.style.display = 'none';
            }
        });
    }
}
