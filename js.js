(function () {
  var tl1 = gsap.timeline();

  tl1
    .to('#myAd', { duration: 0.4, opacity: 1 })
    .from('#myAd_txt2', { duration: 1.3, top: -100, ease: 'power2' })
    .to(
      '#myAd_ltr01',
      { duration: 2, top: 210, left: -70, rotation: -100, ease: 'power2' },
      'myAd_ltr-=.9'
    )
    .to(
      '#myAd_ltr02',
      { duration: 2, top: 210, left: -60, rotation: 200, ease: 'power2' },
      'myAd_ltr-=.9'
    )
    .to(
      '#myAd_ltr03',
      { duration: 2, top: 210, left: -50, rotation: -10, ease: 'power2' },
      'myAd_ltr-=.9'
    )
    .to(
      '#myAd_ltr04',
      { duration: 2, top: 210, left: -40, rotation: -300, ease: 'power2' },
      'myAd_ltr-=.9'
    )
    .to(
      '#myAd_ltr05',
      { duration: 2, top: 210, left: -30, rotation: 30, ease: 'power2' },
      'myAd_ltr-=.9'
    )
    .to(
      '#myAd_ltr06',
      { duration: 2, top: 210, left: -20, rotation: 200, ease: 'power2' },
      'myAd_ltr-=.9'
    )
    .to(
      '#myAd_ltr07',
      { duration: 2, top: 210, left: -10, rotation: -200, ease: 'power2' },
      'myAd_ltr-=.9'
    )
    .to(
      '#myAd_ltr08',
      { duration: 2, top: 210, left: 0, rotation: 10, ease: 'power2' },
      'myAd_ltr-=.9'
    )
    .to(
      '#myAd_ltr09',
      { duration: 2, top: 210, left: 10, rotation: 70, ease: 'power2' },
      'myAd_ltr-=.9'
    )
    .to(
      '#myAd_ltr10',
      { duration: 2, top: 210, left: 20, rotation: -35, ease: 'power2' },
      'myAd_ltr-=.9'
    )
    .to(
      '#myAd_ltr11',
      { duration: 2, top: 210, left: 30, rotation: -100, ease: 'power2' },
      'myAd_ltr-=.9'
    )
    .to(
      '#myAd_ltr12',
      { duration: 2, top: 210, left: 40, rotation: 100, ease: 'power2' },
      'myAd_ltr-=.9'
    )
    .to(
      '#myAd_ltr13',
      { duration: 2, top: 210, left: 50, rotation: -94, ease: 'power2' },
      'myAd_ltr-=.9'
    )
    .to(
      '#myAd_ltr14',
      { duration: 2, top: 210, left: 60, rotation: 250, ease: 'power2' },
      'myAd_ltr-=.9'
    )
    .to(
      '#myAd_ltr15',
      { duration: 2, top: 210, left: 70, rotation: -240, ease: 'power2' },
      'myAd_ltr-=.9'
    )
    .to(
      '#myAd_ltr16',
      { duration: 2, top: 210, left: 80, rotation: -123, ease: 'power2' },
      'myAd_ltr-=.9'
    )
    .from('#myAd_marker', { duration: 1.2, top: -110, ease: 'bounce' }, '-=.5')
    .from(
      '#myAd_shadow',
      { duration: 1.2, opacity: 0, ease: 'bounce' },
      '-=1.2'
    )
    .from(
      '#myAd_txt3',
      {
        duration: 1.2,
        scale: 0.2,
        opacity: 0,
        ease: 'power2',
      },
      '-=.9'
    )
    .from(
      '#myAd_surfboard',
      {
        duration: 1.3,
        top: 260,
        rotation: -130,
        left: 300,
        ease: 'back',
      },
      'cta'
    );

  // tl1.seek('cta'); // stop everything apart this 'cta'

  var tl2 = gsap.timeline({ repeat: -1 });
  tl2.to('#myAd_clouds', {
    duration: 65,
    backgroundPositionX: 649,
    ease: 'power0',
  });
})();
