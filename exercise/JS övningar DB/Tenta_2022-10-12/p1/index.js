
(
  async () => {
    
    const color = (await (await fetch(`https://teaching.maumt.se/apis/random_color/`)).json());
    document.querySelector("body").style.backgroundColor = color;
  }
  
)()

