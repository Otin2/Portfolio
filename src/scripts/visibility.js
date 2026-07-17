export const bindAnimationLifecycle = (start, stop, target) => {
  let onScreen = !target
  if (target) {
    new IntersectionObserver((entries) => {
      onScreen = entries[entries.length - 1].isIntersecting
      onScreen ? start() : stop()
    }).observe(target)
  }
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop()
    else if (onScreen) start()
  })
}
