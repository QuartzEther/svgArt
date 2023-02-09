const cx = 250
const cy = 250
const R = 100;

const draw = (mnog) =>	document.getElementById('mnog').setAttribute('points', mnog.flat())


const mnogoug = (n) => {
    const a = Math.PI*2/n;
    const sa = Math.sin(a)
    const ca = Math.cos(a)
    let sc = 0.;
    let cc = 1.;
    const mnog = []
    for (let i=0; i< n; i++) {
        mnog.push([R*cc+cx, R*sc+cy])
        let tsc = sc;
        sc = sc*ca+cc*sa;
        cc = cc*ca-tsc*sa;
    }
    return mnog
}

document.getElementById('p2').addEventListener('click', () => {
    const n = document.getElementById('nu').valueAsNumber;
    mnog = mnogoug(n)
    draw(mnog)
})