async function list() {
    if (localStorage.getItem("myCart") != null) {
        const myCart = JSON.parse(localStorage.getItem("myCart"))
        let add = ''
        myCart.forEach(element => {
            add += `
            <tr>
                    <td style = "width: 22%">
                        <div class="media">
                           
                            <div class="media-body">
                                <p>${element.name}</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <h5>${element.price}</h5>
                    </td>
                    <td>
                        <div class="product_count">
                            <input type="text" name="qty" id = 'sst${element.id}' maxlength="12" value="${element.quantity}" title="Quantity:"
                                class="input-text qty">
                            <button class="btn btn-primary" onclick="var result = document.getElementById('sst${element.id}'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                class="increase items-count" type="button">+</button>
                            <button  class="btn btn-primary" onclick="var result = document.getElementById('sst${element.id}'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                                class="reduced items-count" type="button">-</button>
                        </div>
                    </td>
                    <td>
                        <h5>${(element.price * element.quantity)}</h5>
                    </td>
                    <td>
                    <button type="button" class="btn btn-primary" onclick="updata('${element.id}')">Update</button>

                    <button type="button" class="btn btn-danger" onclick="deleteProduct('${element.id}')">Delete</button>
                    </td>
                </tr>
            `
            document.getElementById ('myCart').innerHTML = add
        });
        document.getElementById('myCart').innerHTML += `
        <tr>
        
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td> <a class="btn btn-danger" href="shop.html">Continue to buy</a>
        <a class="btn btn-primary" href="./chackout.html">Pay</a></td>
        
        </tr>
        `
    }
    
}



list();
async function updata (id) {
    const myCart = JSON.parse (localStorage.getItem("myCart"))
    await myCart.forEach (myCart => {
        if (myCart.id == id) {
            const sl = document.getElementById (`sst${myCart.id}`).value
            myCart.quantity = sl
        }
    })
    await localStorage.setItem ("myCart" , JSON.stringify (myCart))
    await list ()
}


async function deleteProduct(id){
	const myCart = JSON.parse (localStorage.getItem ("myCart"))
    for(let i = 0; i< myCart.length;i++){
        if(myCart[i].id == id){
            await myCart.splice(i,1);
        }
    }
    if (myCart.length > 0) {
        await localStorage.setItem("myCart",JSON.stringify(myCart));
        list ()
    } else {
        await localStorage.removeItem ("myCart")
        list ()
    }
}