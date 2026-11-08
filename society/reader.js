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

