const getPrice = async () => {
    const url = 'https://query1.finance.yahoo.com/v7/finance/spark?symbols=%5EIXIC&range=1d&interval=5m&indicators=close&includeTimestamps=false&includePrePost=false&corsDomain=finance.yahoo.com&.tsrc=finance',
    req = new Request(url),
    txt = JSON.parse(await req.loadString()),
    arr = txt.spark.result.map(e => [ e.symbol, e.response.map(f => f.meta.regularMarketPrice) ]),
    price = arr[0][1][0];

    console.log(`L'or est à ${ price }$/g`);
    return `L'or est à ${ price }$/g`;
}

const createWidget = async () => {
    const w = new ListWidget()
    w.backgroundColor = new Color('#b00a0f'),
    txt = await getPrice();

    w.addText(txt);

    return w;
}





if (config.runsInWidget) {
    let widget = await createWidget();
    Script.setWidget(widget);
} else {
    WebView.loadHTML(`<h1 align="center">${ await getPrice() }</h1>`, null, new Size(0, 100));
}

Script.complete();
