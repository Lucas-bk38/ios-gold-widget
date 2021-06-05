if (config.runsInWidget) {
    let widget = await createWidget();
    Script.setWidget(widget);
    Script.complete();
} else {}

async function createWidget () {
    const w = new ListWidget()
    w.backgroundColor = new Color('#b00a0f');

    const url = 'https://query1.finance.yahoo.com/v7/finance/spark?symbols=%5EIXIC&range=1d&interval=5m&indicators=close&includeTimestamps=false&includePrePost=false&corsDomain=finance.yahoo.com&.tsrc=finance',
    req = new Request(url),
    res = JSON.parse(await req.loadString()),
    arr = txt.spark.result.map(e => [ e.symbol, e.response.map(f => f.meta.regularMarketPrice) ]),
    price = arr[0][1][0];

    w.addText(`L'or est à ${ price }$/g`);

    return w;
}
