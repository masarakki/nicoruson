const unko = (link) => {
  const href = link.getAttribute('href');
  const _href = link.getAttribute('_href');
  if (!_href) {
    link.setAttribute('href', '#');
    link.setAttribute('_href', href);
  }
};

const chinko = (link) => {
  const _href = link.getAttribute('_href');
  if (_href) {
    link.setAttribute('href', _href);
  }
};

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    Array.prototype.forEach.call(mutation.target.getElementsByClassName('status__relative-time'), unko);
    Array.prototype.forEach.call(mutation.target.getElementsByClassName('status__display-name'), unko);
  });
});

observer.observe(document.getElementsByClassName('app-body')[0], {
  attributes: false, childList: true, characterData: false,
  subtree: true, attributeOldValue: false, characterDataOldValue: false
});
