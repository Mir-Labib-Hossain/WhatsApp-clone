const useRandomImage = () => {
   const images = ["https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/06fbe298931623.5ee79b6a90221.jpg", "https://cdn.dribbble.com/users/230875/screenshots/12078079/media/7ba8ec4a42b529dcbbc695ce0dd07a4a.jpg?compress=1&resize=400x300&vertical=top", "https://mir-s3-cdn-cf.behance.net/project_modules/1400/51bc47101650903.5f2369bd0bf35.jpg", "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/b0b065101650903.5f2369be002ec.jpg", "https://cdn.dribbble.com/users/230875/screenshots/12163492/media/9ccf7b00b9933758d84c8f6b2bf9185f.jpg?compress=1&resize=400x300", "https://lh3.googleusercontent.com/WRMUbEp5s3yREpOj57j61nTwEP-OTIjEOPvM0nWrS8GyiDzGJMa_C0xTYo-rVG8StzRHfuid5NTPD201F8D2ZDUaZVKknv14khLn=w600"];
  var image = images[Math.floor(Math.random() * images.length)];
  return image;
};

export default useRandomImage;
