(() => {
  'use strict';
  const contactCount = document.getElementById('contactCount');
  const welcome = document.getElementById('welcomeEmpty');
  const setEmptyState = () => {
    const empty = !contactCount || Number(contactCount.textContent.replace(/,/g, '').trim()) === 0;
    document.body.classList.toggle('has-no-contacts', empty);
    if (welcome) welcome.hidden = !empty;
  };
  setEmptyState();
  if (contactCount && 'MutationObserver' in window) {
    new MutationObserver(setEmptyState).observe(contactCount, { childList: true, characterData: true, subtree: true });
  }

  const addContact = () => document.getElementById('addContactButton')?.click();
  document.getElementById('topAddContact')?.addEventListener('click', addContact);
  document.getElementById('emptyAddContact')?.addEventListener('click', addContact);
  document.getElementById('emptyImportContacts')?.addEventListener('click', () => document.getElementById('topImport')?.click());
})();
