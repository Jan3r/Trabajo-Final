export const imagen1 = () =>{
    const navCont = `
    
    <img src="https://www.awsfzoo.com/media/Potato-1140x580.png">
    
    `;
    
    
    const minNav = document.createElement('div');
    minNav.classList.add("main-nav");
    minNav.innerHTML = navCont;
    document.body.appendChild(minNav);
    }