1//
async function fetchUrls(urls){
    const results = [];
    for (const url of urls){
        const res = await axios.get(url);
        results.push(res);
    }
}
// fetchUrls thực hiện các cuộc gọi theo thứ tự, mỗi lần đợi cho đến khi cuộc gọi trước đó hoàn thành.


2//
async function fetchUrlsParallel(urls){
    const results = await Promise.all(
        urls.map(function(url){
            return axios.get(url)
        })
    )
    return results;
}
// fetchUrlsParallel thực hiện các cuộc gọi đồng thời bằng cách sử dụng Promise.all, tăng hiệu suất khi có thể.