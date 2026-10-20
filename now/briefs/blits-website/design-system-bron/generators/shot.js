const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{
 const b = await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'}).catch(async()=>chromium.launch());
 const names=['Cover','Button','Heading','PlaqueCard','SpecPlate','Divider','Marker'];
 for(const n of names){
  const p=await b.newPage({viewport:{width:960,height:n==='Cover'?300:420}});
  const errs=[]; p.on('pageerror',e=>errs.push(String(e))); p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
  await p.goto('file://'+process.cwd()+'/'+n+'.html'); await p.waitForTimeout(1500);
  await p.screenshot({path:n+'.png',fullPage:true}); console.log(n, errs.slice(0,3));
  await p.close();
 }
 await b.close();
})();
