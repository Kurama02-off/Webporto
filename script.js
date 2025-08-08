barba.init({
    transitions: [
      {
        name: 'default-transition',
        leave(data) {
          // animasi saat halaman lama keluar
          return gsap.to(data.current.container, {
            opacity: 0,
            duration: 0.5
          });
        },
        enter(data) {
          // animasi saat halaman baru masuk
          return gsap.from(data.next.container, {
            opacity: 0,
            duration: 0.5
          });
        }
      }
    ]
  });