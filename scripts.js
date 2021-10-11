$(document).ready(function () {

    const carouselControls = (on, id) => {
        if (on) {
            $(`${id}`).append(`
                <div class="loaderContainer d-flex align-items center">
                    <div id="loading" class="d-flex spinner-border justify-content-center" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            `)
        } else {
            $(".loaderContainer").remove();
        }
    }
    const getQuotes = () => {
        $.ajax({
            type: "GET",
            url: "https://smileschool-api.hbtn.info/quotes",
            beforeSend: () => carouselControls(1, "#mycarousel"),
            success: function (data) {
                for (let i in data) {
                    $("#carouselInner").append(`
                        <div class="carousel-item py-5 p-md-5">
                            <div class="item-inner d-md-flex flex-row">
                                <img src="${data[i].pic_url}" width="160px" heigth="160px" class="d-block mr-auto rounded-circle mr-2 alt="Author of the quote 2">
                                <div class="carousel-caption d-md-block text-left">
                                    <p>${data[i].text}</p>
                                    <p class="font-weight-bold">${data[i].name}</p>
                                    <p class="font-italic">${data[i].title}</p>
                                </div>
                            </div>
                        </div>
                    `);
                    if (i == 0) {
                        $("#carouselInner .carousel-item").first().addClass("active");
                        carouselControls();
                    }
                }
            }


        })
    }
    getQuotes();
})
