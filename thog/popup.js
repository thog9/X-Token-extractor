const html        = document.documentElement;
const themeBtn    = document.getElementById('themeToggle');
const savedTheme  = localStorage.getItem('thog_theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeBtn.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  try { localStorage.setItem('thog_theme', next); } catch(e){}
});

function setStatus(msg, type = '') {
  const bar  = document.getElementById('statusBar');
  const text = document.getElementById('sText');
  bar.className  = 'status-row ' + type;
  text.textContent = msg;
}

document.getElementById('get').addEventListener('click', () => {
  setStatus('Extracting tokens from X.com…', '');

  chrome.cookies.get({ url: 'https://x.com', name: 'auth_token' }, (auth) => {
    chrome.cookies.get({ url: 'https://x.com', name: 'ct0' }, (ct0) => {

      const authVal = auth?.value || '';
      const ct0Val  = ct0?.value  || '';

      setField('auth', authVal);
      setField('ct0',  ct0Val);

      if (authVal && ct0Val) {
        setStatus('Tokens extracted successfully!', 'ok');
      } else if (!authVal && !ct0Val) {
        setStatus('No tokens found — please log in to X.com first.', 'err');
      } else {
        setStatus('Only partial tokens found.', 'err');
      }
    });
  });
});

function setField(id, val) {
  const el = document.getElementById(id);
  el.value = val;
  if (val) el.classList.add('filled');
  else      el.classList.remove('filled');
}

document.getElementById('copy').addEventListener('click', () => {
  const auth = document.getElementById('auth').value;
  const ct0  = document.getElementById('ct0').value;

  if (!auth && !ct0) {
    setStatus('Nothing to copy — extract tokens first!', 'err');
    return;
  }

  navigator.clipboard.writeText(auth + '|' + ct0).then(() => {
    setStatus('Copied to clipboard! Format: auth_token|ct0', 'ok');

    const btn = document.getElementById('copy');
    const orig = btn.innerHTML;
    btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;
    setTimeout(() => { btn.innerHTML = orig; }, 2000);
  }).catch(() => {
    setStatus('Clipboard access failed.', 'err');
  });
});

document.querySelectorAll('.copy-field').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    const val    = document.getElementById(target)?.value || '';
    if (!val) { setStatus('Field is empty.', 'err'); return; }

    navigator.clipboard.writeText(val).then(() => {
      setStatus(`Copied ${target}!`, 'ok');
      const orig = btn.innerHTML;
      btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;
      setTimeout(() => { btn.innerHTML = orig; }, 1500);
    });
  });
});
