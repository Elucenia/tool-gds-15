/* tool-gds-15 · Elucenia · https://github.com/Elucenia/tool-gds-15
   Copyright (c) 2026 Elucenia · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"gds-15","title":"Escala de Depressão Geriátrica (GDS-15)","fields":[["q1","1. Está basicamente satisfeito com sua vida?","radio",{"opts":{"0":"Sim","1":"Não"}}],["q2","2. Deixou muitos de seus interesses e atividades?","radio",{"opts":{"0":"Não","1":"Sim"}}],["q3","3. Sente que sua vida está vazia?","radio",{"opts":{"0":"Não","1":"Sim"}}],["q4","4. Aborrece-se com frequência?","radio",{"opts":{"0":"Não","1":"Sim"}}],["q5","5. Sente-se de bom humor a maior parte do tempo?","radio",{"opts":{"0":"Sim","1":"Não"}}],["q6","6. Tem medo de que algum mal vá lhe acontecer?","radio",{"opts":{"0":"Não","1":"Sim"}}],["q7","7. Sente-se feliz a maior parte do tempo?","radio",{"opts":{"0":"Sim","1":"Não"}}],["q8","8. Sente que sua situação não tem saída?","radio",{"opts":{"0":"Não","1":"Sim"}}],["q9","9. Prefere ficar em casa a sair e fazer coisas novas?","radio",{"opts":{"0":"Não","1":"Sim"}}],["q10","10. Sente que tem mais problemas de memória que a maioria?","radio",{"opts":{"0":"Não","1":"Sim"}}],["q11","11. Acha maravilhoso estar vivo?","radio",{"opts":{"0":"Sim","1":"Não"}}],["q12","12. Sente-se inútil nas atuais circunstâncias?","radio",{"opts":{"0":"Não","1":"Sim"}}],["q13","13. Sente-se cheio de energia?","radio",{"opts":{"0":"Sim","1":"Não"}}],["q14","14. Acha que sua situação é sem esperança?","radio",{"opts":{"0":"Não","1":"Sim"}}],["q15","15. Sente que a maioria das pessoas está melhor que você?","radio",{"opts":{"0":"Não","1":"Sim"}}]],"config":{"unit":"de 15","label":"GDS-15","fields":[["q1","radio",0],["q2","radio",0],["q3","radio",0],["q4","radio",0],["q5","radio",0],["q6","radio",0],["q7","radio",0],["q8","radio",0],["q9","radio",0],["q10","radio",0],["q11","radio",0],["q12","radio",0],["q13","radio",0],["q14","radio",0],["q15","radio",0]],"bands":[[0,"low","Sem sintomas depressivos significativos (0 a 5)"],[6,"mid","Sugere depressão (6 a 10)","Confirmar com avaliação clínica pelos critérios do DSM-5 ou CID."],[11,"high","Sugere depressão grave (11 a 15)","Avaliação clínica prioritária, incluindo risco de suicídio."]]},"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* Elucenia arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);


function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
