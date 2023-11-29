const btn = document.querySelector("#throttle");

// Throttling Function
const throttleFunction = (func, delay) => {

    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();

        // If difference is greater than delay call
        // the function again.
        if (now - prev > delay) {
            prev = now;

            // "..." is the spread operator here 
            // returning the function with the 
            // array of arguments
            return func(...args);
        }
    }
}
document.querySelector('#center').addEventListener("mousemove", throttleFunction((details) => {
    var div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = details.clientX + 'px';
    div.style.top = details.clientY + 'px';
    document.body.appendChild(div);
    const imageUrls = [
        "https://marketplace.canva.com/EAEUNaZvSwI/1/0/1600w/canva-white-and-grey-conservative-%26-minimal-wireless-earbuds-electronics-product-images-3GO3X2ZZgyE.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMYGAwfMpMGm0rF9GDr8mX3MkYnXfCsIRvbw&usqp=CAU",
        "https://m.media-amazon.com/images/I/51Tffq4DVcL._AC_UY1000_.jpg",
        "https://m.media-amazon.com/images/I/7142RXzBYAL.jpg",
        "https://m.media-amazon.com/images/I/61EA66BTOeL.jpg",

    ]
    let imageLoaded = 0;
    imageUrls.forEach((url, index) => {
        var img = document.createElement("img");
        img.setAttribute("src", url);
        div.appendChild(img)
        gsap.to(img, {
            y: "0",
            easy: Power2,
            duration: 0.4 * (index + 1)
        });
        gsap.to(img, {
            y: "100%",
            delay: 0.6 + (0.2 * index),
            easy: Power2,
            onComplete: () => {
                imageLoaded++;
                if (imageLoaded === imageUrls.length) {
                    setTimeout(function () {
                        div.remove();
                    }, 2000)
                }
            }

        });

    })

}, 1000));