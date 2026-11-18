const $=id=>document.getElementById(id);const money=v=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(v||0);
function calc(){const salary=+$('salary').value||0, weekday=+$('weekday').value||0, dsr=+$('dsr').value||0;const hour=salary/200;const he50=(weekday*hour*1.5)+((weekday*hour*1.5)/20*10);const he100=(dsr*hour*2)+((dsr*hour*2)/20*10);const total=he50+he100;const thirteen=total/12;const vac=thirteen*1.33;const reflex=thirteen+vac;$('hour').textContent=money(hour);$('v50').textContent=money(he50);$('v100').textContent=money(he100);$('total').textContent=money(total);$('thirteen').textContent=money(thirteen);$('vac').textContent=money(vac);$('reflex').textContent=money(reflex);return{salary,weekday,dsr,hour,he50,he100,total,thirteen,vac,reflex}}
['salary','weekday','dsr'].forEach(x=>$(x).addEventListener('input',calc));$('reset').onclick=()=>{$('salary').value=5000;$('weekday').value=0;$('dsr').value=0;$('days').value='';calc()};$('copy').onclick=async()=>{const x=calc(),t=`PALFINGER | Simulação de Horas Extras
Salário: ${money(x.salary)}
Salário-hora: ${money(x.hour)}
HE seg-sex: ${x.weekday}h | ${money(x.he50)}
HE DSR: ${x.dsr}h | ${money(x.he100)}
Custo direto: ${money(x.total)}
Média 13º: ${money(x.thirteen)}
Média férias: ${money(x.vac)}
Total reflexos: ${money(x.reflex)}
Compensação: ${$('days').value||'não informada'}`;await navigator.clipboard.writeText(t);$('copy').textContent='Resumo copiado';setTimeout(()=>$('copy').textContent='Copiar resumo',1400)};calc();
