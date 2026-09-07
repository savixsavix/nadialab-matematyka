const $ = s => document.querySelector(s);
const lessons = window.lessons;
// Give the companion the flexible central space between question and controls.
const companion=document.createElement('div');
companion.className='companion-stage';
companion.append($('#quiz-dragon'));
$('#question').after(companion);
for(const id of ['intro','complete']) {
  const portrait=document.createElement('div');portrait.className='lesson-portrait';
  portrait.setAttribute('role','img');portrait.setAttribute('aria-label','Iskierka zaprasza do wspólnej nauki');
  $('#'+id+' .card').prepend(portrait);
}
const all = lessons.flatMap(l => l.questions.map((q,i) => ({...q,id:`${l.id}:${i}`})));
let saved;
try { saved = JSON.parse(localStorage.getItem('nadialab-v2') || 'null'); } catch {}
let state = {completed:{},review:[]};
if (saved && typeof saved.completed === 'object' && saved.completed && !Array.isArray(saved.completed) && Array.isArray(saved.review)) {
  state = {completed:saved.completed,review:saved.review.filter(id=>all.some(q=>q.id===id))};
} else {
  try {
    const old = JSON.parse(localStorage.getItem('nadialab-mistakes') || '[]');
    if(Array.isArray(old)) state.review = all.filter(q=>old.includes(q.q)).map(q=>q.id);
  } catch {}
}
let selected = lessons[0], session = null;
let mapPage=0,reviewPage=0;
function pager(parent,page,total,change) {
  if(total<=1)return;
  const row=document.createElement('div');row.className='pager';
  const back=document.createElement('button');back.textContent='← Wstecz';back.disabled=page===0;back.onclick=()=>change(page-1);
  const label=document.createElement('span');label.textContent=`${page+1} / ${total}`;
  const next=document.createElement('button');next.textContent='Dalej →';next.disabled=page===total-1;next.onclick=()=>change(page+1);
  row.append(back,label,next);parent.append(row);
}
function save() {
  try { localStorage.setItem('nadialab-v2',JSON.stringify(state)); }
  catch { $('#storage-note').textContent='Zapis jest niedostępny. Postęp zostanie zachowany tylko do zamknięcia strony.'; }
}
function showView(id) {
  document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id===id));
  document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('on',b.dataset.view===id || (['intro','quiz','complete'].includes(id)&&b.dataset.view==='map')));
  if(id==='map'||id==='home') renderMap();
  if(id==='review') renderReview();
  window.scrollTo(0,0);
}
document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>showView(b.dataset.view));
function renderMap() {
  $('#done-count').textContent=`${lessons.filter(l=>state.completed[l.id]).length}/${lessons.length} misje`;
  const map=$('#mission-map'); map.replaceChildren();
  if(session) {
    const resume=document.createElement('button');resume.className='subject';resume.textContent=`▶ Wznów: ${session.title} · zadanie ${session.current+1}/${session.questions.length}`;
    resume.onclick=()=>{showView('quiz');renderQuestion();};map.append(resume);
  }
  lessons.slice(mapPage*2,mapPage*2+2).forEach((l,index)=>{
    const i=mapPage*2+index;
    const b=document.createElement('button');b.className='subject';
    const title=document.createElement('strong');title.textContent=`${l.icon} ${i+1}. ${l.title}`;
    const detail=document.createElement('small');detail.textContent=`${l.topic} · ${l.questions.length} zadań · ok. ${l.id==='workshop'?10:7} min`;
    const status=document.createElement('small');status.textContent=state.completed[l.id]?`✓ Ukończona · najlepszy wynik ${state.completed[l.id].best}/${l.questions.length} · ćwicz ponownie`:'Rozpocznij misję →';
    b.append(title,detail,status); b.onclick=()=>{selected=l;$('#intro-title').textContent=l.title;$('#intro-meta').textContent=l.topic;$('#intro-text').textContent=l.intro;$('#intro-example').textContent=l.example;showView('intro');};map.append(b);
  });
  pager(map,mapPage,Math.ceil(lessons.length/2),p=>{mapPage=p;renderMap();});
}
$('#start-lesson').onclick=()=>start(selected.id,selected.title,all.filter(q=>q.id.startsWith(selected.id+':')));
function start(id,title,qs) {
  session={id,title,questions:qs,current:0,answers:[],hints:[]};showView('quiz');renderQuestion();
}
function renderQuestion() {
  const s=session,item=s.questions[s.current],choice=s.answers[s.current];
  $('#quiz').classList.toggle('answered',choice!==undefined);
  $('#quiz').classList.toggle('answer-success',choice!==undefined&&choice===item.correct);
  $('#quiz').classList.toggle('answer-error',choice!==undefined&&choice!==item.correct);
  $('#quiz-dragon').className='dragon think';
  $('#progress-label').textContent=`${s.title} · ${s.current+1}/${s.questions.length}`;
  $('#progress-bar').style.width=`${(s.current+(choice!==undefined?1:0))/s.questions.length*100}%`;
  $('#question').textContent=item.q;$('#answers').replaceChildren();
  item.a.forEach((a,i)=>{const b=document.createElement('button');b.className='answer';b.textContent=a;
    if(choice!==undefined){b.disabled=true;if(i===item.correct)b.classList.add('correct');if(i===choice&&i!==item.correct)b.classList.add('wrong');}
    b.onclick=()=>answer(i);$('#answers').append(b);
  });
  $('#hint').textContent=item.hint;$('#hint').className='hint'+(s.hints[s.current]?' show':'');
  if(s.hints[s.current]&&choice===undefined)$('#quiz-dragon').className='dragon helping';
  $('#result').className='result'+(choice!==undefined?' show':'');$('#result').setAttribute('aria-live','polite');
  if(choice!==undefined){const good=choice===item.correct;$('#result').textContent=(good?'✓ Dobra odpowiedź! ':'✕ Tym razem nie. Spróbujmy razem. ')+item.explain;$('#quiz-dragon').className='dragon '+(good?'celebrate':'kind');}
  $('#next-button').className='next'+(choice!==undefined?' show':'');$('#next-button').textContent=s.current===s.questions.length-1?'Zakończ misję':'Dalej';
}
function answer(i){if(session.answers[session.current]!==undefined)return;session.answers[session.current]=i;renderQuestion();}
$('#hint-button').onclick=()=>{session.hints[session.current]=true;renderQuestion();};
$('#next-button').onclick=()=>{
  const s=session;if(!s||s.answers[s.current]===undefined)return;
  if(s.current<s.questions.length-1){s.current++;renderQuestion();return;}
  let score=0;
  s.questions.forEach((q,i)=>{const good=s.answers[i]===q.correct;if(good)score++;
    if(good&&!s.hints[i])state.review=state.review.filter(id=>id!==q.id);
    else if(!state.review.includes(q.id))state.review.push(q.id);
  });
  if(s.id!=='review')state.completed[s.id]={best:Math.max(score,Number(state.completed[s.id]?.best)||0),date:new Date().toISOString()};
  save();$('#summary').textContent=`${s.title}: ${score}/${s.questions.length} poprawnych odpowiedzi. ${state.review.length?'W powtórkach czekają zadania po błędzie lub z podpowiedzią.':'Wszystko utrwalone — możesz wybrać kolejną misję!'} `;
  session=null;showView('complete');renderMap();
};
function renderReview(){
  const list=$('#review-list');list.replaceChildren();const qs=all.filter(q=>state.review.includes(q.id));
  if(!qs.length){const p=document.createElement('p');p.textContent='Nie ma teraz zadań do powtórki. Po misji pojawią się tu te, przy których przydała się pomoc.';list.append(p);return;}
  const b=document.createElement('button');b.className='help';b.textContent=`Ćwicz powtórki · ${Math.min(qs.length,8)} zadań`;b.onclick=()=>start('review','Powtórka z Iskierką',qs.slice(0,8));list.append(b);
  reviewPage=Math.min(reviewPage,Math.floor((qs.length-1)/2));
  qs.slice(reviewPage*2,reviewPage*2+2).forEach(q=>{const card=document.createElement('div');card.className='review';const p=document.createElement('p');p.textContent=q.q;card.append(p);list.append(card);});
  pager(list,reviewPage,Math.ceil(qs.length/2),p=>{reviewPage=p;renderReview();});
}
renderMap();
