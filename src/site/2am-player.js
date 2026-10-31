(function(){if(window.__2am)return;window.__2am=1;

const T=[
 {title:'SLV',ar:'سلڤ',artist:'Shabjdeed (شب جديد)',src:'/__l5e/assets-v1/65e3b3a3-a9d8-4f48-80fe-9dd93e9f44d0/01-SLV-Shabjdeed.mp3',cover:'/__l5e/assets-v1/c8adb4cc-b2fa-49de-9fb3-4cfb991db706/cover-SLV-red-graffiti.png'},
 {title:'Qooli',ar:'قولي',artist:'BigSam',src:'/__l5e/assets-v1/2dc5acde-6676-400b-ad4e-ee1f269a4353/02-Qooli-BigSam.mp3',cover:'/__l5e/assets-v1/046144d1-17cb-4d77-bcf0-88ce19433e39/cover-Qooli-Drama-teal.png'},
 {title:'Shoft Kalam',ar:'شوفت كلام',artist:'Marwan Pablo, Lege-Cy & Hatem Bas',src:'/__l5e/assets-v1/67d00309-bb4b-4c5c-90cf-a14916128479/03-Shoft-Kalam-Marwan-Pablo-LegeCy-Hatem-Bas.mp3',cover:'/__l5e/assets-v1/b5273f9d-23e8-4a37-97e7-882b55a4bec1/cover-Shoft-Kalam-comic-eyes.png'},
 {title:'Roma',ar:'روما',artist:'Cairokee (كايروكي)',src:'/__l5e/assets-v1/9e17c03d-9862-420b-8c4d-efd07ae6ea5d/04-Roma-Cairokee.mp3',cover:'/__l5e/assets-v1/8862c0e8-9e84-4ff1-b4ae-fb8fef6b5c24/cover-Roma-blue.png'},
 {title:'Drama',ar:'دراما',artist:'BigSam',src:'/__l5e/assets-v1/4edaa8a5-8b10-4f90-9f1a-bb37e4a4b6f9/05-Drama-BigSam.mp3',cover:'/__l5e/assets-v1/046144d1-17cb-4d77-bcf0-88ce19433e39/cover-Qooli-Drama-teal.png'},
 {title:'Birds of a Feather',ar:'بيردز أوف أ فيذر',artist:'Billie Eilish',src:'/__l5e/assets-v1/f54449ae-6fd0-40d2-a17c-3c89797d9069/06-Birds-of-a-Feather-Billie-Eilish.mp3',cover:'/__l5e/assets-v1/a3e9a0f2-5164-4790-9365-589f03a6b570/cover-Birds-of-a-Feather.png'},
 {title:'Summertime Sadness',ar:'سمرتايم سادنس',artist:'Lana Del Rey',src:'/__l5e/assets-v1/f7772b9d-dd58-4b5f-a313-386a2f13e67a/07-Summertime-Sadness-Lana-Del-Rey.mp3',cover:'/__l5e/assets-v1/cefbd869-9a06-4126-b8be-ea65703634be/cover-Summertime-Sadness.png'},
 {title:'Lovesong',ar:'لوف سونغ',artist:'Adele',src:'/__l5e/assets-v1/66e2fe8d-3da3-4f67-8866-55da263ee418/08-Lovesong-Adele.mp3',cover:'/__l5e/assets-v1/56277e97-fbe8-4158-b2d8-d24b9f1286f8/cover-Lovesong.png'},
 {title:'Him & I',ar:'هيم آند آي',artist:'G-Eazy ft. Halsey',src:'/__l5e/assets-v1/2599aea9-9523-45d5-b520-358e5e100337/09-Him-and-I-G-Eazy-Halsey.mp3',cover:'/__l5e/assets-v1/c8fa321b-8216-49de-9e27-731e0cf502d1/cover-Him-and-I.png'},
 {title:'Hena Masr',ar:'هنا مصر .. هفضل كل مرة أجيلك',artist:'Mahmoud El Esseily & Bahaa Sultan',src:'/__l5e/assets-v1/936229fe-c799-4cd6-bfb9-7510b7698931/10-Hena-Masr-Mahmoud-El-Esseily-Bahaa-Sultan.mp3',cover:'/__l5e/assets-v1/bb696734-93f0-466b-b2b4-7a25ded5679a/cover-Hena-Masr-Banque-Misr.png'},
 {title:'Rad Saree3',ar:'رد سريع',artist:'Shabjdeed (شب جديد) feat. Riyadiyat (رياضيات)',src:'/__l5e/assets-v1/a44a1171-2d53-4346-b79b-bb982d02fd47/11-Rad-Saree3-Shabjdeed-Riyadiyat.mp3',cover:'/__l5e/assets-v1/bf94d1c3-5cf6-4cb5-a308-378053e0e8cf/cover-SULTAN-Rad-Saree3.png'},
 {title:'Jaw Ard',ar:'جو أرض',artist:'Molotof & Shabjdeed (شب جديد)',src:'/__l5e/assets-v1/71a725c4-7f20-4082-8f30-85f7d4512085/12-Jaw-Ard-Molotof-Shabjdeed.mp3',cover:'/__l5e/assets-v1/72107ec6-1fff-4942-b06c-3432edbdbd3c/cover-Jaw-Ard.png'},
 {title:'Billie Jean',ar:'بيلي جين',artist:'Michael Jackson',src:'/__l5e/assets-v1/21d959d7-60ff-43b9-bbb1-e73c06898cc0/13-Billie-Jean-Michael-Jackson.mp3',cover:'/__l5e/assets-v1/2a95a457-7f57-4ee5-8d29-c7471c9c5017/cover-Billie-Jean-Thriller.png'},
 {title:'Timeless',ar:'تايملس',artist:'The Weeknd & Playboi Carti',src:'/__l5e/assets-v1/d0b99fdc-372b-4914-914d-dc4e788b983e/14-Timeless-The-Weeknd-Playboi-Carti.mp3',cover:'/__l5e/assets-v1/edaa03a1-2fe6-4619-9f08-f5d62c9c62a2/cover-Timeless.jpeg'},
 {title:'Sawarekh',ar:'صواريخ',artist:'Shbash & The Synaptik',src:'/__l5e/assets-v1/2498e7e8-c2b5-4a95-b542-453ae9c63cc9/15-Sawarekh-Shbash-The-Synaptik.mp3',cover:'/__l5e/assets-v1/ff0d7503-1f79-4a88-a0e5-4c980383b956/cover-Sawarekh.png'}
].map((t,i)=>({...t,id:i}));
const img=t=>`url('${t.cover}') center/cover no-repeat`;   // single quotes: safe inside style="..." attributes
const tHTML=t=>`${t.title} <span class="ar" lang="ar" dir="rtl">${t.ar}</span>`;
const label=t=>`${t.title} (${t.ar})`;
const fmt=s=>{s=Math.max(0,s|0);return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')};
const $=id=>document.getElementById(id);
// home + heading word reveals
$('logo').innerHTML=[...'2AM'].map((c,i)=>`<span class="l" style="--i:${i}">${c}</span>`).join('');
$('head').innerHTML='The Songs We Used to Listen to Together.'.split(' ').map((w,i)=>`<span class="w" style="--i:${i}">${w}</span>`).join('');
$('cnt').textContent=T.length+' songs';
$('grid').innerHTML=T.map((t,i)=>`<li class="item" id="it${i}" style="--i:${i%3+Math.floor(i/3)*.4}">
 <button class="thumb" onclick="play(${i})" aria-label="Play ${label(t)}"><div class="ci" style="background:${img(t)}"></div>
 <span class="badge"><span class="eq on"><b></b><b></b><b></b><b></b></span></span>
 <span class="pb"><svg viewBox="0 0 24 24" style="width:20px;height:20px"><path d="M8 5v14l11-7z"/></svg></span></button>
 <div class="it serif">${tHTML(t)}</div><div class="ia">${t.artist}</div></li>`).join('');
// views
let busy=false;
function go(id){if(busy)return;const c=document.querySelector('.view.on');if(c.id===id)return;busy=true;c.classList.add('out');
 setTimeout(()=>{c.classList.remove('on','out');$(id).classList.add('on');scrollTo(0,0);busy=false;$('navm').classList.toggle('on',id==='music');sync()},450)}
// real player: ONE shared HTML5 Audio element drives everything
const PLAY='<path d="M8 5v14l11-7z"/>',PAUSE='<path d="M6 5h4v14H6zm8 0h4v14h-4z"/>';
const audio=new Audio();audio.preload='metadata';audio.volume=.8;
let cur=-1,flip=0,req=0,scrub=false,errored=false,loading=false,swapT=0;
const isPlaying=()=>cur>=0&&!audio.paused&&!loading&&!errored&&!audio.ended;
function select(i){cur=i;errored=false;loading=true;const t=T[i];
 audio.pause();audio.src=t.src;                       // replacing src stops the old track: no overlap
 const cv=$('cover');cv.style.cssText=`background:${img(t)};opacity:0;transform:scale(1.12);font-size:0`;cv.textContent='';requestAnimationFrame(()=>{cv.style.opacity=1;cv.style.transform='scale(1)'});
 const bg=$(flip?'cvB':'cvA'),old=$(flip?'cvA':'cvB');flip^=1;bg.style.background=img(t);bg.classList.add('on');old.classList.remove('on');
 $('mcv').innerHTML=`<div style="position:absolute;inset:0;background:${img(t)}"></div>`;
 $('art').classList.add('has');const ti=$('ptitle'),ar=$('partist');ti.style.opacity=ar.style.opacity=0;ti.style.transform='translateY(10px)';
 clearTimeout(swapT);swapT=setTimeout(()=>{ti.innerHTML=tHTML(t);ti.title=label(t);ar.textContent=t.artist;$('mt1').textContent=label(t);$('mt2').textContent=t.artist;ti.style.opacity=ar.style.opacity=1;ti.style.transform='none'},300);
 if('mediaSession' in navigator){try{navigator.mediaSession.metadata=new MediaMetadata({title:label(t),artist:t.artist,album:'2AM',artwork:[{src:t.cover,sizes:'640x640',type:'image/png'}]})}catch(e){}}
 ui();sync()}
function start(){const tok=++req,p=audio.play();
 if(p&&p.catch)p.catch(e=>{if(tok!==req||e.name==='AbortError')return;if(e.name!=='NotAllowedError')errored=true;loading=false;console.warn('Playback did not start:',e.name,e.message);sync()})}
function play(i){if(i===cur){toggle();return}select(i);start()}
function toggle(){if(cur<0)return play(0);
 if(errored){errored=false;loading=true;audio.load();sync();start();return}
 if(audio.paused)start();else audio.pause()}
function step(d){if(cur<0)return play(0);play((cur+d+T.length)%T.length)}
function sync(){const pl=isPlaying(),want=cur>=0&&!audio.paused&&!errored;
 $('vinyl').classList.toggle('play',pl);$('eq').classList.toggle('on',pl);
 $('ppi').innerHTML=$('mpi').innerHTML=want?PAUSE:PLAY;$('pp').setAttribute('aria-label',want?'Pause':'Play');
 T.forEach((_,i)=>{const it=$('it'+i),a=i===cur;it.classList.toggle('act',a);it.classList.toggle('pl',a&&pl);it.querySelector('.pb svg').innerHTML=a&&want?PAUSE:PLAY});
 $('mini').classList.toggle('on',cur>=0&&!$('music').classList.contains('on'));
 $('stat').textContent=errored?'Audio unavailable':loading?'Loading…':(cur>=0&&audio.paused)?'Paused':'Currently playing';
 if(cur>=0)document.title=label(T[cur])+' — '+T[cur].artist+' · 2AM'}
function ui(){const d=audio.duration,ok=isFinite(d)&&d>0,p=ok?audio.currentTime/d*100:0,sk=$('seek');
 if(!scrub)sk.value=p;sk.style.setProperty('--v',p+'%');sk.disabled=!ok;
 $('tcur').textContent=fmt(audio.currentTime);$('tdur').textContent=ok?fmt(d):'0:00';$('mpg').style.width=p+'%'}
const on=(n,f)=>audio.addEventListener(n,f);
on('loadstart',()=>{loading=true;sync()});on('waiting',()=>{loading=true;sync()});
on('canplay',()=>{loading=false;sync()});on('playing',()=>{loading=false;errored=false;sync()});
// vinyl/eq only spin once the 'playing' event fires (real audio flowing); 'play' just marks us as buffering
on('play',()=>{loading=true;sync()});on('pause',sync);
on('loadedmetadata',ui);on('durationchange',ui);on('timeupdate',ui);
on('ended',()=>step(1));                                // automatic next track
on('error',()=>{if(!audio.getAttribute('src'))return;errored=true;loading=false;console.error('Audio failed to load:',audio.src,audio.error&&audio.error.message);ui();sync()});
// seeking: scrub flag stops timeupdate from fighting the thumb
const sk=$('seek');sk.disabled=true;
sk.addEventListener('pointerdown',()=>scrub=true);
['pointerup','pointercancel','change','blur'].forEach(n=>sk.addEventListener(n,()=>{scrub=false}));
sk.addEventListener('input',e=>{const d=audio.duration;if(!(d>0&&isFinite(d)))return;audio.currentTime=e.target.value/100*d;ui()});
// volume
$('vol').oninput=e=>{audio.volume=+e.target.value;e.target.style.setProperty('--v',e.target.value*100+'%')};$('vol').style.setProperty('--v','80%');
if('mediaSession' in navigator){const ms=navigator.mediaSession,m=(a,f)=>{try{ms.setActionHandler(a,f)}catch(e){}};
 m('play',()=>{if(cur<0)play(0);else if(errored)toggle();else if(audio.paused)start()});m('pause',()=>audio.pause());
 m('previoustrack',()=>step(-1));m('nexttrack',()=>step(1));
 m('seekto',d=>{if(d&&d.seekTime!=null&&isFinite(audio.duration)){audio.currentTime=Math.min(d.seekTime,audio.duration);ui();pos()}});
 // keep lock-screen play/pause state and scrubber position in step with the real audio element
 function ps(){try{ms.playbackState=cur<0||audio.paused?'paused':'playing'}catch(e){}}
 function pos(){try{const d=audio.duration;if(isFinite(d)&&d>0)ms.setPositionState({duration:d,playbackRate:audio.playbackRate||1,position:Math.min(audio.currentTime,d)})}catch(e){}}
 ['play','playing','pause','ended','emptied'].forEach(n=>audio.addEventListener(n,()=>{ps();pos()}));
 ['loadedmetadata','durationchange','seeked','ratechange'].forEach(n=>audio.addEventListener(n,pos));
 // returning to the site (app switch, unlock, bfcache): refresh the UI from the live audio state, never restart it
 const back=()=>{if(!document.hidden){ui();sync();ps();pos()}};
 document.addEventListener('visibilitychange',back);addEventListener('pageshow',back)}
// featured track: preselect #1 on every visit and try to autoplay (if blocked, the play button stays ready)
select(0);start();

window.go=go;window.play=play;window.toggle=toggle;window.step=step;})();
