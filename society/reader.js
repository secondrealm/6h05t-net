const progress = document.querySelector('.reader-progress');
if (progress) {
  function updateProgress() {
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    progress.style.width = `${Math.min(100, scrollY / max * 100)}%`;
  }
  addEventListener('scroll', updateProgress, { passive: true });
  addEventListener('resize', updateProgress);
  updateProgress();
}

const chapterNumber = location.pathname.match(/\/society\/(\d{2})\/?$/)?.[1];
const chapterActions = document.querySelector('.chapter-actions');
if (chapterNumber && chapterActions) {
  const archiveNote = document.createElement('p');
  const archiveLink = document.createElement('a');

  archiveNote.className = 'ipfs-archive';
  archiveNote.append('IPFS: ');
  archiveLink.href = `ipfs://bafybeigeac24avpxbchqn7cl5aethmf3k3zvuysnuzenvrdvzwkhmgt2ou/chapters/${chapterNumber}.md`;
  archiveLink.target = '_blank';
  archiveLink.rel = 'noopener noreferrer';
  archiveLink.textContent = 'link ↗';
  archiveNote.append(archiveLink);
  chapterActions.insertAdjacentElement('afterend', archiveNote);
}
