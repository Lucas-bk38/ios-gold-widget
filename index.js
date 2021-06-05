if (config.runsInWidget) {
    let widget = createWidget();
    Script.setWidget(widget);
    Script.complete();
} else {}

function createWidget() {
    const w = new ListWidget()
    w.backgroundColor = new Color('#b00a0f');
    w.addText('item.title');

    return w;
}
