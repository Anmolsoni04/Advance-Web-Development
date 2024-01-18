function onReloading(title, cName, noOfViews, duration, months, thumbnail) {

    if (noOfViews > 999999) {
        var htmlDesign = `
        <div class="leftcontainer">
                    <img
                    src="${thumbnail}"
                    alt="">
                    <div class="durationBox">
                        <span>${duration}</span>
                    </div>
                </div>
                    <div class="text">
                        <h2>${title}</h2>
                        <div class="text1">
                            <span>${cName}</span>
                            <span>
                            ${noOfViews / 1000000}M Views•</span>
                            <span>${months} months ago</span>
                        </div>
                    </div>  
        `
    }
    else if (noOfViews > 999) {
        var htmlDesign = `
        <div class="leftcontainer">
                    <img
                    src="${thumbnail}"
                    alt="">
                    <div class="durationBox">
                        <span>${duration}</span>
                    </div>
                </div>
                    <div class="text">
                        <h2>${title}</h2>
                        <div class="text1">
                            <span>${cName}</span>
                            <span>
                            ${noOfViews / 1000}k Views•</span>
                            <span>${months} months ago</span>
                        </div>
                    </div>  
        `
    }
    else {
        var htmlDesign = `
        <div class="leftcontainer">
                    <img
                    src="${thumbnail}"
                    alt="">
                    <div class="durationBox">
                        <span>${duration}</span>
                    </div>
                </div>
                    <div class="text">
                        <h2>${title}</h2>
                        <div class="text1">
                            <span>${cName}</span>
                            <span>
                            ${noOfViews} Views•</span>
                            <span>${months} months ago</span>
                        </div>
                    </div>  
        `
    }

    document.querySelector("#container").innerHTML = htmlDesign;
}


onReloading("Your First HTML website | Sigma Web Development - Tutorial #2", "CodeWithHarry •", 5000000, "10:00", 3, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDxR2Iy74ubFQvvf2uP0BepdJ_GNw")

