const Scroll = () => {
    let check = window.location.href.includes('#');
    if( check ) document.getElementById(window.location.href.split('#')[1]).scrollIntoView();   
}

export default Scroll;