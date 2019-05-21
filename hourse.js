let chess = ['a1','a2','a3','a4','a5','a6','a7',
'b1','b2','b3','b4','b5','b6','b7',
'c1','c2','c3','c4','c5','c6','c7',
'd1','d2','d3','d4','d5','d6','d7',
'e1','e2','e3','e4','e5','e6','e7',
'f1','f2','f3','f4','f5','f6','f7',
'g1','g2','g3','g4','g5','g6','g7',
'h1','h2','h3','h4','h5','h6','h7',
    ];

function func1() {
    let coord = document.getElementById('coord').value;
    let a = chess.indexOf(coord);
    let steps = [chess[a-15],chess[a-5],chess[a+9],chess[a+13],
    chess[a+15],chess[a+5],chess[a-9],chess[a-13]];
    document.getElementById("result").innerHTML = "Результат: " + steps;
}
