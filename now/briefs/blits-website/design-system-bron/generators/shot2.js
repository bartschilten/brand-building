const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{
 const names=process.argv.slice(2);
 const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 for(const n of names){
  const p=await b.newPage({viewport:{width:960,height:400}});
  const errs=[]; p.on('pageerror',e=>errs.push(String(e))); p.on('console',m=>{if(m.type()==='error'&&!/net::|Failed to load/.test(m.text()))errs.push(m.text())});
  await p.goto('http://localhost:8765/test/'+n+'.html'); await p.waitForTimeout(1600);
  await p.screenshot({path:'/tmp/claude-0/-home-user/87219723-8819-5e92-bb3f-14525c97a532/scratchpad/blits-ds/test/'+n+'.png',fullPage:true}); console.log(n, errs.slice(0,3)); await p.close();
 }
 await b.close();
})();
