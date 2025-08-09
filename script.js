gsap.from(".leading-relaxed", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power3.out"
  });

  // Animasi masuk untuk subtitle
  gsap.from(".text-gray-300", {
    duration: 1.2,
    y: 20,
    opacity: 0,
    delay: 0.5,
    ease: "power2.out"
  });

  // Animasi untuk tombol Contact
  gsap.from("button", {
    duration: 1,
    scale: 0,
    delay: 0.8,
    ease: "back.out(1.7)"
  });

  // Animasi gambar profil (melayang)
  gsap.from(".main img", {
    duration: 1.5,
    opacity: 0,
    x: 50,
    ease: "power3.out"
  });

  gsap.to(".main img", {
    y: 10,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });

  // Animasi "About Me" fade-in saat scroll
  gsap.from("section.bg-gray-700", {
    scrollTrigger: {
      trigger: "section.bg-gray-700",
      start: "top 80%"
    },
    opacity: 0,
    y: 50,
    duration: 1
  });

  // Animasi kartu Project saat scroll
  gsap.from("section.bg-gray-800 .p-1", {
    scrollTrigger: {
      trigger: "section.bg-gray-800",
      start: "top 80%"
    },
    opacity: 0,
    scale: 0.8,
    stagger: 0.2,
    duration: 1
  });