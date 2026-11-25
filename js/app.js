const $=(s,r=document)=>r.querySelector(s),$$=s=>document.querySelectorAll(s),
esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tamu=new URLSearchParams(location.search).get('to')||'',nama=tamu||'Nama Tamu';
let timer,io;const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;

const burst=(x,y)=>{if(rm)return;for(let i=0;i<26;i++){const s=document.createElement('i'),a=Math.random()*6.28,d=60+Math.random()*110;s.className='cf';s.style.cssText=`--x:${x}px;--y:${y}px;--dx:${Math.cos(a)*d}px;--dy:${Math.sin(a)*d-40}px;--r:${Math.random()*720-360}deg;background:${['var(--gold)','var(--ink)','#e8d7b8','#8d8d88'][i%4]}`;document.body.appendChild(s);setTimeout(()=>s.remove(),1300)}};
const burstAt=el=>{const r=el.getBoundingClientRect();burst(r.x+r.width/2,r.y+r.height/2)};
const img=(s,c='',lazy=1)=>s?`<img class="${c}" src="${esc(s)}" alt="" ${lazy?'loading="lazy"':'fetchpriority="high"'} decoding="async" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:this.className}))">`:'';

const ornDiv=()=>`<div class="orn-div" aria-hidden="true"><svg viewBox="0 0 160 22" fill="none" stroke="currentColor"><path d="M10 11h52M98 11h52" stroke-width="1" stroke-opacity=".45"/><circle cx="80" cy="11" r="3" fill="currentColor"/><path d="M72 11c3-4 5-4 8 0 3-4 5-4 8 0-3 4-5 4-8 0-3 4-5 4-8 0z" fill="currentColor" opacity=".7"/></svg></div>`;

const cornerFl=(cls)=>`<div class="corner-fl ${cls}" aria-hidden="true"><svg viewBox="0 0 100 100" fill="none"><defs><linearGradient id="flG_${cls}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="var(--gold)" stop-opacity="0.85"/><stop offset="55%" stop-color="var(--gold)" stop-opacity="0.3"/><stop offset="100%" stop-color="var(--gold)" stop-opacity="0.02"/></linearGradient></defs><path d="M4 96C4 50 40 14 96 4" stroke="url(#flG_${cls})" stroke-width="1.8" stroke-linecap="round"/><path d="M4 75C8 46 32 22 75 4" stroke="url(#flG_${cls})" stroke-width="1" stroke-dasharray="3 3"/><path d="M30 40C26 30 18 26 8 28C10 38 18 44 30 40Z" fill="url(#flG_${cls})"/><path d="M40 30C30 26 26 18 28 8C38 10 44 18 40 30Z" fill="url(#flG_${cls})"/><path d="M52 22C46 14 44 6 50 2C58 4 60 12 52 22Z" fill="url(#flG_${cls})"/><path d="M22 52C14 46 6 44 2 50C4 58 12 60 22 52Z" fill="url(#flG_${cls})"/><circle cx="8" cy="8" r="4" fill="url(#flG_${cls})"/><circle cx="20" cy="6" r="2.5" fill="url(#flG_${cls})"/><circle cx="6" cy="20" r="2.5" fill="url(#flG_${cls})"/><path d="M4 96L14 86M4 80L10 74M80 4L74 10M96 4L86 14" stroke="url(#flG_${cls})" stroke-width="1.2"/></svg></div>`;

const ILL=D=>`<svg viewBox="0 0 400 430" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Sepasang mempelai memegang bingkai foto">
  <defs><clipPath id="cpP"><rect x="53" y="33" width="94" height="112" rx="4"/></clipPath><clipPath id="cpW"><rect x="255" y="45" width="90" height="108" rx="4"/></clipPath></defs>
  <path d="M26 142C10 190 24 250 42 300M46 148C42 190 50 240 58 292"/>
  <path d="M174 142C190 190 176 250 158 300M154 148C158 190 150 240 142 292"/>
  <path d="M50 176C66 166 80 160 88 158M150 176C134 166 120 160 112 158"/>
  <path d="M88 158L74 215L100 272L126 215L112 158"/>
  <path d="M92 161L100 190L108 161"/>
  <path d="M100 182L84 173V191ZM100 182L116 173V191Z"/><rect x="96" y="177" width="8" height="10" rx="2"/>
  <path d="M50 176C46 260 44 340 42 430M150 176C154 260 156 340 158 430"/>
  <path d="M58 292C52 340 50 390 48 430M142 292C148 340 150 390 152 430"/>
  <circle cx="100" cy="302" r="2"/><circle cx="100" cy="328" r="2"/><path d="M118 340h24M70 372l18 2"/>
  <g transform="rotate(-6 100 90)">
   <rect x="53" y="33" width="94" height="112" fill="#f0ebe1" stroke="none" rx="4"/>
   <circle cx="100" cy="76" r="18" fill="#dfd8cb" stroke="none"/><path d="M62 145C66 112 134 112 138 145Z" fill="#dfd8cb" stroke="none"/>
   <image href="${esc(D.fotoPria||'')}" x="53" y="33" width="94" height="112" onerror="this.remove()" preserveAspectRatio="xMidYMid slice" clip-path="url(#cpP)" stroke="none"/>
   <rect x="42" y="22" width="116" height="134" rx="2"/><rect x="53" y="33" width="94" height="112" rx="4"/>
   <path d="M42 22L53 33M158 22L147 33M42 156L53 145M158 156L147 145"/>
   <path d="M42 112C28 108 22 124 28 140C32 150 42 150 48 146"/><path d="M42 118h18a4 4 0 0 1 0 8H42M42 128h16a4 4 0 0 1 0 8H42M42 138h14a4 4 0 0 1 0 8H42"/>
   <path d="M158 112C172 108 178 124 172 140C168 150 158 150 152 146"/><path d="M158 118h-18a4 4 0 0 0 0 8h18M158 128h-16a4 4 0 0 0 0 8h16M158 138h-14a4 4 0 0 0 0 8h14"/>
  </g>
  <path d="M232 150C214 200 230 252 252 300M250 156C244 200 252 245 262 290"/>
  <path d="M368 150C386 200 370 252 348 300M350 156C356 200 348 245 338 290"/>
  <path d="M258 186C272 176 288 178 300 194C312 178 328 176 342 186"/>
  <path d="M258 186C252 230 256 262 262 292M342 186C348 230 344 262 338 292"/>
  <path d="M262 292Q300 306 338 292M262 292L236 430M338 292L364 430M280 301L266 430M300 305V430M320 301L334 430"/>
  <g transform="rotate(5 300 95)">
   <rect x="255" y="45" width="90" height="108" fill="#f0ebe1" stroke="none" rx="4"/>
   <circle cx="300" cy="86" r="17" fill="#dfd8cb" stroke="none"/><path d="M264 153C268 122 332 122 336 153Z" fill="#dfd8cb" stroke="none"/>
   <image href="${esc(D.fotoWanita||'')}" x="255" y="45" width="90" height="108" onerror="this.remove()" preserveAspectRatio="xMidYMid slice" clip-path="url(#cpW)" stroke="none"/>
   <rect x="244" y="34" width="112" height="130" rx="2"/><rect x="255" y="45" width="90" height="108" rx="4"/>
   <path d="M244 34L255 45M356 34L345 45M244 164L255 153M356 164L345 153"/>
   <path d="M244 118C230 114 224 130 230 146C234 156 244 156 250 152"/><path d="M244 124h18a4 4 0 0 1 0 8h-18M244 134h16a4 4 0 0 1 0 8h-16M244 144h14a4 4 0 0 1 0 8h-14"/>
   <path d="M356 118C370 114 376 130 370 146C366 156 356 156 350 152"/><path d="M356 124h-18a4 4 0 0 0 0 8h18M356 134h-16a4 4 0 0 0 0 8h16M356 144h-14a4 4 0 0 0 0 8h14"/>
  </g>
</svg>`;

function startParticles(cfg){
  if(rm)return;
  const old=$('#particles');if(old)old.remove();
  const type=cfg?.jenis||'petals';
  if(type==='none')return;
  const count=cfg?.jumlah||14;
  const baseSpeed=cfg?.durasi||8;
  const p=document.createElement('div');
  p.id='particles';
  p.setAttribute('aria-hidden','true');
  document.body.appendChild(p);

  for(let i=0;i<count;i++){
    const s=document.createElement('span');
    s.className='particle-item '+type;
    s.style.left=Math.random()*100+'vw';
    s.style.animationDuration=(baseSpeed*0.7+Math.random()*baseSpeed*0.6)+'s';
    s.style.animationDelay=(Math.random()*5)+'s';
    if(type==='hearts'){
      s.textContent='♡';
      s.style.fontSize=(12+Math.random()*14)+'px';
    }else if(type==='sparkles'){
      s.textContent='✦';
      s.style.fontSize=(10+Math.random()*12)+'px';
    }else if(type==='confetti'){
      s.style.width=(6+Math.random()*6)+'px';
      s.style.height=(10+Math.random()*10)+'px';
      s.style.backgroundColor=['var(--gold)','var(--ink)','#e8d7b8','#d4af37'][i%4];
    }else{
      s.style.width=(10+Math.random()*10)+'px';
      s.style.height=(14+Math.random()*12)+'px';
    }
    p.appendChild(s);
  }
}

const ROM=['I','II','III','IV','V','VI','VII','VIII'];
const ICON=['<path d="M4 21C4 13 10 10 12 5"/><path d="M20 21C20 13 14 10 12 5"/><circle cx="12" cy="3.6" r="1.6"/>',
 '<path d="M4 4h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9l-3 3v-3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M18 9h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v3l-3-3h-5a2 2 0 0 1-2-2v-1"/>',
 '<circle cx="9" cy="15" r="5"/><circle cx="15" cy="15" r="5"/><path d="M12 2l1.4 2L12 6.2 10.6 4z"/>'];
const kisahList=D=>(D.kisah||[]).filter(k=>k&&(k.teks||k.judul));
const STORY=D=>{const K=kisahList(D);if(!K.length)return'';
  const ch=(k,i)=>`<article class="ch rv"><div class="orn-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICON[i%ICON.length]}</svg></div>
    <p class="ch-n">${ROM[i]||i+1}</p><h3 class="script ch-t">${esc(k.judul)}</h3>
    ${k.foto?`<button class="ch-ph" data-i="${i}" style="--pos:${esc(k.posisi||'50% 50%')}" aria-label="Perbesar foto: ${esc(k.judul)}">${img(k.foto)}</button>`:''}
    <p class="ch-p">${String(k.teks||'').trim().split(/\s+/).map(w=>`<span class="w">${esc(w)}</span>`).join(' ')}</p></article>`;
  return `<section class="story rv" id="story">
      <div class="orn-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div>
      <h2 class="script mid hw">${esc(D.kisahJudul||'Our Story')}</h2>
      ${D.kisahSub?`<p class="mute">${esc(D.kisahSub)}</p>`:''}${ornDiv()}
      ${K.map((k,i)=>ch(k,i)+(i<K.length-1?'<div class="tl-gap rv" aria-hidden="true"><i></i></div>':'')).join('')}
    </section>`};
function storyFx(){const vh=innerHeight;
  $$('.tl-gap').forEach(g=>{const r=g.getBoundingClientRect(),f=Math.min(1,Math.max(0,(vh*.82-r.top)/r.height));g.style.setProperty('--f',f.toFixed(3));g.classList.toggle('full',f>=.98)});
  $$('.ch-p').forEach(p=>{const r=p.getBoundingClientRect(),n=p.children.length,f=r.bottom<0?1:Math.min(1,Math.max(0,(vh*.9-r.top)/(r.height+vh*.2))),k=Math.round(f*n);
    if(p._k===k)return;p._k=k;for(let i=0;i<n;i++)p.children[i].classList.toggle('lit',i<k)})}
// font hanya dimuat sesuai pilihan (bukan 8 keluarga sekaligus)
const FW={'Cinzel':'wght@400;600','Cormorant Garamond':'ital,wght@0,400;0,600;1,400','Montserrat':'wght@300;400;600','Playfair Display':'ital,wght@0,400;0,600;1,400','Roboto Slab':'wght@300;400;700'};
const fontsDone=new Set(['Mrs Saint Delafield','Roboto Slab']);
function loadFonts(D){[D.fontScript,D.fontSerif].map(s=>(String(s||'').match(/'([^']+)'/)||[])[1]).filter(f=>f&&!fontsDone.has(f)).forEach(f=>{
  fontsDone.add(f);const l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family='+f.replace(/ /g,'+')+(FW[f]?':'+FW[f]:'')+'&display=swap';document.head.appendChild(l)})}

function render(D){
  document.title=D.judul;loadFonts(D);
  const r=document.documentElement.style;
  
  // Terapkan kustomisasi tema, warna, font, dan reposisi
  if(D.warna)r.setProperty('--ink',D.warna);
  if(D.warnaBg){
    r.setProperty('--paper',D.warnaBg);
    const th=$('meta[name=theme-color]');if(th)th.content=D.warnaBg;
  }
  if(D.warnaAksen){
    r.setProperty('--gold',D.warnaAksen);
    r.setProperty('--gold-dark',D.warnaAksen);
  }
  if(D.warnaCard)r.setProperty('--card-bg',D.warnaCard);
  if(D.warnaDark)r.setProperty('--dark-bg',D.warnaDark);
  if(D.fontScript)r.setProperty('--script',D.fontScript);
  if(D.fontSerif)r.setProperty('--serif',D.fontSerif);
  if(D.fotoPosisi)r.setProperty('--photo-pos',D.fotoPosisi);

  const W=esc(D.wanita.panggilan),P=esc(D.pria.panggilan),T=esc(D.tanggalTeks),C={judul:'welcome',sub:'to our wedding',tombol:'open invitation',...D.cover};
  
  $('#app').innerHTML=`
  <aside class="side" aria-hidden="true">${img(D.fotoUtama,'',0)}<div class="sn"><p class="script">${W} &amp; ${P}</p><p>${T}</p></div></aside>
  <div class="col">
    ${cornerFl('tl')}${cornerFl('tr')}
    <main>
    <section class="rv">
      <div class="orn-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div>
      <p class="mute">The Wedding of</p>
      <h1 class="script big hw">${W} &amp; ${P}</h1>
      <div class="pw">${img(D.fotoUtama,'photo')||'<div class="photo"></div>'}</div>
      <p class="script mid hw">Save the Date</p>
      <p class="mute">${T}</p>
      ${ornDiv()}
    </section>

    <section class="rv">
      <p style="font-size:16px;line-height:1.8">${esc(D.salam)}</p>
      ${ornDiv()}
      <p class="mute" style="font-style:italic;line-height:1.7">${esc(D.cerita)}</p>
    </section>

    <section class="couple rv">
      <p class="mute">Mempelai yang Berbahagia</p>
      ${ornDiv()}
      <div class="couple-card">
        <h2 class="script hw">${W}</h2>
        <b style="font-size:17px;color:var(--ink)">${esc(D.wanita.lengkap)}</b>
        <p class="mute" style="margin-top:6px">${esc(D.wanita.orangtua)}</p>
      </div>
      <p class="amp">&amp;</p>
      <div class="couple-card">
        <h2 class="script hw">${P}</h2>
        <b style="font-size:17px;color:var(--ink)">${esc(D.pria.lengkap)}</b>
        <p class="mute" style="margin-top:6px">${esc(D.pria.orangtua)}</p>
      </div>
    </section>

    ${STORY(D)}

    <section class="dark rv">
      <div class="orn-badge" style="background:rgba(255,255,255,.08);color:#eeddbb;border-color:rgba(194,157,89,.4)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      </div>
      <h2 class="script mid hw">Our Countdown</h2>
      <p class="mute">${T}</p>
      <div class="cd" role="timer">
        <div><b id="cd-d">00</b>Hari</div>
        <div><b id="cd-h">00</b>Jam</div>
        <div><b id="cd-m">00</b>Menit</div>
        <div><b id="cd-s">00</b>Detik</div>
      </div>
    </section>

    <section class="rv">
      <div class="orn-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
      <h2 class="script big hw">Wedding Event</h2>
      <p class="mute">${T}</p>
      ${ornDiv()}
      ${D.acara.map(a=>`
        <div class="card">
          <b>${esc(a.nama)}</b>
          <br><span class="mute">${esc(a.waktu)}</span>
        </div>
      `).join('')}
      <div class="card" style="margin-top:20px">
        <div class="orn-badge" style="margin-bottom:6px"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
        <p><b>${esc(D.lokasi.nama)}</b><br><span class="mute">${esc(D.lokasi.alamat)}</span></p>
        <a class="btn" href="${esc(D.lokasi.maps)}" target="_blank" rel="noopener">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Buka Google Maps
        </a>
      </div>
      <div class="gal">${(D.fotoGaleri||[]).map((f,i)=>`<button class="g" data-i="${i}" aria-label="Foto ${i+1}">${img(f)}</button>`).join('')}</div>
    </section>

    <section class="dark rv">
      <p class="script" style="font-size:38px">${esc(D.ayat.sumber)}</p>
      <hr style="border-color:rgba(194,157,89,.4);width:70px">
      <p class="mute" style="line-height:1.75;font-style:italic">"${esc(D.ayat.teks)}"</p>
    </section>

    <section class="rv">
      <div class="orn-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg></div>
      <h2 class="script mid hw">Wedding Gift</h2>
      <p class="mute">Doa restu Anda merupakan karunia yang paling berarti bagi kami. Namun jika Anda bermaksud memberikan tanda kasih, dapat melalui:</p>
      ${ornDiv()}
      ${D.hadiah.map(h=>`
        <div class="bank">
          <button data-c="${esc(h.norek)}">Salin No. Rekening</button>
          <b>${esc(h.bank)}</b>
          <div class="rek-num">${esc(h.norek)}</div>
          <span class="mute">a.n. ${esc(h.atasNama)}</span>
        </div>
      `).join('')}
      ${D.alamatKado?`<p class="mute" style="margin-top:16px">Alamat pengiriman kado:<br><b>${esc(D.alamatKado)}</b></p>`:''}
    </section>

    <section class="rv">
      <div class="orn-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
      <h2 class="script mid hw">Ucapan &amp; Doa</h2>
      <p class="mute">Sampaikan ucapan, harapan, serta doa restu Anda kepada kami</p>
      ${ornDiv()}
      <div class="ucapan-card">
        <form id="fr">
          <input name="n" placeholder="Nama Anda" autocomplete="name" value="${esc(tamu)}" required>
          <textarea name="u" rows="3" placeholder="Tulis ucapan dan doa restu di sini..." required></textarea>
          <button class="btn gold">Kirim Ucapan</button>
        </form>
        <p id="st" class="mute" role="status" aria-live="polite" style="margin-top:14px"></p>
      </div>
      <div id="ws" style="margin-top:24px"></div>
    </section>

    <section class="rv">
      <p class="mute">${esc(D.penutup)}</p>
      ${ornDiv()}
      <p class="mute">Kami yang berbahagia,</p>
      <h2 class="script big hw" style="margin-top:12px">${W} &amp; ${P}</h2>
    </section>
    </main>
    ${cornerFl('bl')}${cornerFl('br')}
  </div>

  <div id="cover" role="dialog" aria-label="Sampul undangan">
    ${cornerFl('tl')}${cornerFl('tr')}${cornerFl('bl')}${cornerFl('br')}
    <div class="in">
      <div class="cv-frame" aria-hidden="true"></div>
      <div class="cv-t">
        <div class="script cv-h">${esc(C.judul)}</div>
        <p class="cv-s">${esc(C.sub)}</p>
        <p class="mute cv-g">Kepada Yth. Bapak/Ibu/Saudara/i<br><b>${esc(nama)}</b></p>
        <button class="btn pill" id="buka">${esc(C.tombol)}</button>
        <p class="hint" aria-hidden="true">↑ Klik atau scroll ke atas</p>
      </div>
      <div class="cv-i">${ILL(D)}<div class="cv-n"><span class="script">${P}</span><span class="script">${W}</span></div></div>
    </div>
  </div>

  <div id="pg"></div>
  <div id="lb" hidden role="dialog" aria-label="Galeri"><img alt=""><button id="lbx" aria-label="Tutup">✕</button><button id="lbp" aria-label="Sebelumnya">‹</button><button id="lbn" aria-label="Berikutnya">›</button></div>`;
  
  wire(D);
}

function buka(){
  const c=$('#cover');
  if(!c||c.classList.contains('open'))return;
  burstAt($('#buka'));
  c.style.transform='';
  c.classList.add('open');
  c.inert=true;
  document.body.classList.remove('lock');
  scrollTo(0,0);
  startParticles(window.DATA?.animasi);
  const m=$('#mu');
  m.hidden=!$('#au').getAttribute('src');
  $('#au').play().then(()=>{
    m.classList.add('playing');
    m.textContent='♪';
    m.setAttribute('aria-pressed',true);
  }).catch(()=>{});
}

function wire(D){
  const au=$('#au'),mu=$('#mu');
  au.src=D.musik||'';
  au.onerror=()=>mu.hidden=true;
  $('#buka').onclick=buka;
  
  mu.onclick=()=>{
    const p=au.paused;
    if(p){
      au.play();
      mu.classList.add('playing');
      mu.textContent='♪';
    }else{
      au.pause();
      mu.classList.remove('playing');
      mu.textContent='✕';
    }
    mu.setAttribute('aria-pressed',p);
  };

  $$('[data-c]').forEach(b=>b.onclick=()=>{
    navigator.clipboard?.writeText(b.dataset.c);
    const old=b.textContent;
    b.textContent='Tersalin ✓';
    burstAt(b);
    setTimeout(()=>b.textContent=old,2500);
  });

  io?.disconnect();
  io=new IntersectionObserver(e=>e.forEach(x=>{
    if(x.isIntersecting){
      x.target.classList.add('on');
      io.unobserve(x.target);
    }
  }),{threshold:.12});
  $$('.rv').forEach(s=>io.observe(s));

  clearInterval(timer);
  const t=new Date(D.tanggalISO).getTime(),p=n=>String(Math.floor(n)).padStart(2,'0'),
  set=(i,v)=>{
    const e=$('#cd-'+i);
    if(e&&e.textContent!==v){
      e.textContent=v;
      if(!rm){e.classList.remove('rl');void e.offsetWidth;e.classList.add('rl');}
    }
  };
  const tick=()=>{
    if(document.hidden)return;
    const d=Math.max(0,t-Date.now())/1000;
    set('d',p(d/86400));
    set('h',p(d%86400/3600));
    set('m',p(d%3600/60));
    set('s',p(d%60));
  };
  tick();
  timer=setInterval(tick,1000);

  fx(D);

  const U=D.backend?.url,key='ucapan_'+D.judul;
  const loc=()=>{try{return JSON.parse(localStorage.getItem(key)||'[]')}catch{return[]}};
  
  const draw=a=>{
    const ws=$('#ws');
    if(!ws)return;
    ws.innerHTML=a.length?a.map(w=>{
      const initial=esc((w.n||'T')[0].toUpperCase());
      return `<div class="wish">
        <div class="wish-header">
          <span class="wish-avatar">${initial}</span>
          <span class="wish-name">${esc(w.n)}</span>
        </div>
        <div class="wish-text">${esc(w.u)}</div>
      </div>`;
    }).join(''):'<p class="mute">Belum ada ucapan. Jadilah yang pertama memberikan doa restu ♡</p>';
  };

  const load=async()=>{
    if(!U)return draw(loc().filter(w=>w.u));
    try{
      const res=await(await fetch(U+'?aksi=ucapan')).json();
      draw(res.data||[]);
    }catch{
      draw(loc().filter(w=>w.u));
    }
  };
  load();

  const st=(m,err)=>{
    const e=$('#st');
    if(!e)return;
    e.textContent=m;
    e.style.color=err?'#b00020':'#2c2825';
  };

  $('#fr').onsubmit=async e=>{
    e.preventDefault();
    const fm=e.target,f=Object.fromEntries(new FormData(fm)),b=fm.querySelector('.btn');
    if(!f.u||!f.u.trim())return;
    f.h=f.h||'Hadir';
    f.a=f.a||'Ucapan & Doa';
    f.j=f.j||'1';

    if(!U){
      try{
        localStorage.setItem(key,JSON.stringify([f,...loc()].slice(0,50)));
      }catch{}
      st('Terima kasih, ucapan dan doa restu Anda sudah tersimpan ♡');
      burstAt(b);
      fm.u.value='';
      load();
      return;
    }

    b.disabled=true;
    st('Mengirim ucapan…');
    try{
      const r=await(await fetch(U,{method:'POST',body:new URLSearchParams(f)})).json();
      if(!r.ok)throw 0;
      st('Terima kasih, ucapan dan doa restu Anda sudah kami terima ♡');
      burstAt(b);
      fm.u.value='';
      load();
    }catch{
      try{localStorage.setItem(key,JSON.stringify([f,...loc()].slice(0,50)))}catch{}
      st('Terima kasih, ucapan dan doa Anda sudah tersimpan ♡');
      burstAt(b);
      fm.u.value='';
      load();
    }
    b.disabled=false;
  };
}

function fx(D){
  const c=$('#cover');let y0=null,dy=0;
  
  // Sentuhan / pointer drag: jangan buka sembarangan jika belum disengaja
  c.onpointerdown=e=>{
    if(e.target.closest('button'))return;
    y0=e.clientY;dy=0;
    c.style.transition='none';
    c.setPointerCapture(e.pointerId);
  };
  c.onpointermove=e=>{
    if(y0==null)return;
    dy=Math.min(0,e.clientY-y0);
    // Hanya geser tampilan sedikit jika ditarik ke atas lebih dari 15px
    if(dy<-15)c.style.transform=`translateY(${dy}px)`;
  };
  c.onpointerup=c.onpointercancel=()=>{
    if(y0==null)return;
    y0=null;
    c.style.transition='transform .5s ease';
    // Harus ditarik cukup jauh (> 130px) untuk sengaja membuka
    if(dy<-130){
      buka();
    }else{
      c.style.transform='';
    }
  };
  
  // Scroll wheel: hanya buka jika scroll ke atas/bawah secara sengaja (> 100)
  c.onwheel=e=>{
    if(e.deltaY>100)buka();
  };

  let tk=0;
  const upd=()=>{
    tk=0;
    const max=document.documentElement.scrollHeight-innerHeight;
    $('#pg').style.transform=`scaleX(${max>0?scrollY/max:0})`;
    if(!rm)$$('.pw').forEach(p=>{
      const r=p.getBoundingClientRect();
      p.style.setProperty('--py',(r.top+r.height/2-innerHeight/2)*-.1+'px');
    });
    storyFx();
  };
  onscroll=()=>{tk||(tk=requestAnimationFrame(upd))};
  addEventListener('resize',()=>{tk||(tk=requestAnimationFrame(upd))});
  upd();

  const si=$('.side img');
  onpointermove=e=>{
    if(rm||!si||e.pointerType==='touch')return;
    si.style.transform=`translate(${(e.clientX/innerWidth-.5)*-24}px,${(e.clientY/innerHeight-.5)*-24}px) scale(1.08)`;
  };

  let gs=D.fotoGaleri||[];const lb=$('#lb');
  let gi=0,lx;
  const L=i=>{gi=(i+gs.length)%gs.length;$('#lb img').src=gs[gi]};
  $$('.g').forEach(b=>b.onclick=()=>{gs=D.fotoGaleri||[];L(+b.dataset.i);lb.hidden=false;$('#lbx').focus()});
  $$('.ch-ph').forEach(b=>b.onclick=()=>{gs=kisahList(D).map(k=>k.foto||'');L(+b.dataset.i);lb.hidden=false;$('#lbx').focus()});
  $('#lbx').onclick=()=>lb.hidden=true;
  $('#lbp').onclick=()=>L(gi-1);
  $('#lbn').onclick=()=>L(gi+1);
  lb.onclick=e=>{if(e.target===lb)lb.hidden=true};
  lb.onpointerdown=e=>lx=e.clientX;
  lb.onpointerup=e=>{const d=e.clientX-lx;if(Math.abs(d)>50)L(gi+(d<0?1:-1))};
  onkeydown=e=>{
    if(lb.hidden)return;
    if(e.key==='Escape')lb.hidden=true;
    if(e.key==='ArrowRight')L(gi+1);
    if(e.key==='ArrowLeft')L(gi-1);
  };
}

render(window.DATA);

addEventListener('message',e=>{
  if(e.data?.type==='data'){
    const wasOpen=$('#cover')?.classList.contains('open');
    window.DATA=e.data.data;
    render(e.data.data);
    if(wasOpen)buka();
  }
});
