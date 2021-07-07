window.onload = () => {
    let as = document.getElementsByTagName("a");
    if (as != null && as.length > 0) {
        for(let element of as) {
            let target = element.getAttribute("target");
            if (target != null && target == "_blank") {
                element.setAttribute("target", "_self");
                element.setAttribute('href', 'open_browser:' + element.href)
                element.textContent = element.getAttribute("href");
            }
        }
    }
}