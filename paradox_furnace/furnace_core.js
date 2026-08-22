const fs=require('fs');const path=require('path');
const DIR=path.join(__dirname,'contradictions');
function burn(tick=0){
  const c=fs.readdirSync(DIR).filter(f=>f.endsWith('.pf')).map(f=>{
    const t=fs.readFileSync(path.join(DIR,f),'utf8');
    return parseFloat((t.match(/inversion:\s*([\d.]+)/)||[])[1]||0.4);
  });
  const avg=c.reduce((a,b)=>a+b,0)/c.length;
  console.log(`[furnace] tick=${tick}  inversion=${avg.toFixed(3)}`);
  return {inversion:+avg.toFixed(3)};
}
module.exports={burn};
if(require.main===module)for(let t=0;t<4;t++)burn(t);
