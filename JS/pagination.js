import fetch from 'node-fetch';

const ary = [];
async function loadDatas(){
    const response = await fetch('https://yts.mx/api/v2/list_movies.json');
    const datas = await response.json();
    console.log(datas.data.movies);
    ary = [...datas.data.movies];
    console.log(ary.length);
}

loadDatas();

function createDom(data){
    let str = `
        <tr>
            <td>${data.id}</td>
            <td>${data.myId}</td>
            <td><img src="${data.small_cover_image}"></td>
            <td>${data.title_long}</td>
            <td>${data.rating}</td>
        </tr>
    `
    return str; 
}