export const servicesticky1 = () => {

  document.addEventListener('scroll', () => {
    const element = document.querySelector('.service-header')

    if (element) {
        if (document.documentElement.scrollTop > 878) {
        document.querySelector('.blog-sidebar').style.top = '135px'
        element.classList.remove('display');
      }
    }
  })
}
export const servicesticky2 = () => {

  document.addEventListener('scroll', () => {
    const element = document.querySelector('.service-header')

    if (element) {
      if (document.documentElement.scrollTop < 922) {
        document.querySelector('.blog-sidebar').style.top = '85px'
        element.classList.add('display');

      }
    }
  })
}

export const servicesticky4 = () => {

  document.addEventListener('scroll', () => {
    const element = document.querySelector('.service-header')
    if (element) {
      if (document.documentElement.scrollTop > 747) {
        document.querySelector('.blog-sidebar').style.top = '130px'
        // class display = display-none
        element.classList.remove('display');
      }
    }
  })
}

export const servicesticky3 = () => {
     document.addEventListener('scroll', () => {
    const element = document.querySelector('.service-header')
    if (element) {
      if (document.documentElement.scrollTop < 790) {
        document.querySelector('.blog-sidebar').style.top = '85px'
        element.classList.add('display');
      }
    } 
  })
}


export const servicesticky5 = () => {

  document.addEventListener('scroll', () => {
    const element = document.querySelector('.service-header')
    if (element) {
      
      if (document.documentElement.scrollTop > 839) {
        document.querySelector('.blog-sidebar').style.top = '135px'
        element.classList.remove('display');
      }
    }
  })
}
export const servicesticky6 = () => {

  document.addEventListener('scroll', () => {
    const element = document.querySelector('.service-header')

    if (element) {
      if (document.documentElement.scrollTop < 880) {
        document.querySelector('.blog-sidebar').style.top = '85px'
        element.classList.add('display');

      }
    }
  })
}