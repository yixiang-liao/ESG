var area = document.getElementById('number');
var list = document.querySelector('.list_ncC');

var county = [
    {
        farmer: '11 kg',
        place: 'AO-03410'
    },
    {
        farmer: '10.8 kg',
        place: 'AO-03020'
    },
    {
        farmer: '10.4kg',
        place: 'AO-03430'
    },
    {
        farmer: '10.5kg',
        place: 'AO-03440'
    },
    {
        farmer: '10.6kg',
        place: 'AO-03450'
    }
];


var countyLen = county.length;

function updateList(e){
    var select = e.target.value;
    var str = '';
    for(var i=0;i<countyLen;i++){
        if(select == county[i].place){
            str += '<div>'+ county[i].farmer +'</div>'         
        }        
    }

    list.innerHTML = str;
};

// 在「下拉式選單」做監聽事件
area.addEventListener('change',updateList,false);// JavaScript Document