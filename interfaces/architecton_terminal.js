const {unweave}=require('../negative_loom/loom_unweaver.js');
const {burn}=require('../paradox_furnace/furnace_core.js');
async function run(){
  console.log('Architecton Terminal…\n');
  console.log('Unweave:',unweave(0));
  console.log('Furnace:',burn(0));
}
if(require.main===module)run();
