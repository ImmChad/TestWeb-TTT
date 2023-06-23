< div class = "item-contentDescription__product_detail" >
    <
    div class = "headerDescription-mainTab__product_detail" >
    <
    div class = "title-headerDescription__tabProduct_detail  halfParent" >
    $ {
        el.title_description
    } <
    /div> <
    div class = "text-headerDescription__tabProduct_detail halfParent" >
    $ {
        el.content_description
    } <
    /div> <
    /div> <
    div class = "bodyImages-mainTab__product_detail" >
    <
    div class = "list-imagesDescription__tabProduct_detail" >
    $ {
        el.list_img_description_product
            .map((img, i) => {
                if (
                    el.list_img_description_product
                    .length %
                    2 !=
                    0
                ) {
                    if (i == 0) {
                        return `
                                                <div class="item-imagesDescription__tabProduct_detail fullParent">
                                                    <img src="${img.url_img_description_product}" alt="" srcset="">
                                                </div>
                                                `;
                    } else {
                        return ` <
                    div class = "item-imagesDescription__tabProduct_detail halfParent" >
                    <
                    img src = "${img.url_img_description_product}"
                alt = ""
                srcset = "" >
                    <
                    /div>
                `;
                    }
                } else {
                    return ` <
                div class = "item-imagesDescription__tabProduct_detail fullParent" >
                    <
                    img src = "${img.url_img_description_product}"
                alt = ""
                srcset = "" >
                    <
                    /div>
                `;
                }
            })
            .join("")
    } <
    /div> <
    /div> <
    /div>
`;