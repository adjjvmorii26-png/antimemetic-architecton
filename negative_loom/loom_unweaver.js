const fs=require('fs');const path=require('path');
const DIR=path.join(__dirname,'anti_patterns');
function unweave(tick=0){
  const p=fs.readdirSync(DIR).filter(f=>f.endsWith('.nl')).map(f=>{
    const t=fs.readFileSync(path.join(DIR,f),'utf8');
    return parseFloat((t.match(/tension:\s*([\d.]+)/)||[])[1]||0.5);
  });
  const avg=p.reduce((a,b)=>a+b,0)/p.length;
  console.log(`[unweave] tick=${tick}  tension=${avg.toFixed(3)}  patterns=${p.length}`);
  return {tension:+avg.toFixed(3),patterns:p.length};
}
module.exports={unweave};
if(require.main===module){console.log('NEGATIVE LOOM…\n');for(let t=0;t<5;t++)unweave(t);}
