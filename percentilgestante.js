function dmg_percentil(){

    var select = document.getElementById('dmg-idadegestacional');
	var ig = select.options[select.selectedIndex].value;

    var peso = parseFloat(document.getElementById('dmg-peso').value);

    listapeso = [
        [26,29,35,41,44], // 10 semanas
        [34,37,45,53,56], // 11
        [43,48,58,68,73], // 12
        [55,61,73,85,91], // 13
        [70,77,93,109,116], // 14
        [88,97,117,137,146], // 15
        [110,121,146,171,183], // 16
        [136,150,181,212,226], // 17
        [167,185,223,261,279], // 18
        [205,227,273,319,341], // 19
        [248,275,331,387,414], // 20
        [299,331,399,467,499], // 21
        [359,398,478,559,598], // 22
        [426,471,568,665,710], // 23
        [503,556,670,784,838], // 24
        [589,652,785,918,981], // 25
        [685,758,913,1068,1141], // 26
        [791,876,1055,1234,1319], // 27
        [908,1004,1210,1416,1513], // 28
        [1034,1145,1379,1613,1724], // 29
        [1169,1294,1559,1824,1649], // 30
        [1313,1453,1751,2049,2189], // 31
        [1465,1621,1953,2285,2441], // 32
        [1622,1794,2162,2530,2703], // 33
        [1783,1973,2377,2781,2971], // 34
        [1946,2154,2595,3036,3244], // 35
        [2110,2335,2813,3291,3516], // 36
        [2271,2513,3028,3543,3785], // 37
        [2427,2686,3236,3786,4045], // 38
        [2576,2851,3435,4019,4294], // 39
        [2714,3004,3619,4234,4524], // 40 semanas
    ];

    var i = ig - 10;

    var p3 = listapeso[i][0];
    var p10 = listapeso[i][1];
    var p50 = listapeso[i][2];
    var p90 = listapeso[i][3];
    var p97 = listapeso[i][4];


    if (peso < p3)
        dmgpeso = "Abaixo de p3";

    else if (peso == p3)
        dmgpeso = "p3";

    else if (peso > p3 && peso < p10)
        dmgpeso = "Entre p3 e p10";

    else if (peso == p10)
        dmgpeso = "p10";

    else if (peso > p10 && peso < p50)
        dmgpeso = "Entre p10 e p50";

    else if (peso == p50)
        dmgpeso = "p50";

    else if (peso > p50 && peso < p90)
        dmgpeso = "Entre p50 e p90";

    else if (peso == p90)
        dmgpeso = "p90";

    else if (peso > p90 && peso < p97)
        dmgpeso = "Entre p90 e p97";

    else if (peso == p97)
        dmgpeso = "p97";

    else if (peso > p97)
        dmgpeso = "Acima de p97";

    document.getElementById("dmg_resultadopeso").innerHTML = dmgpeso;

}
