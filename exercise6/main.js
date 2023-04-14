function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerText = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  
  
  const objs = document.getElementsByClassName("info-class-h1");
  for(i=0; i< objs.length; ++i){
      animateValue(objs[i], 0, objs[i].innerText, 1000 )
      
  }
  console.log(progress);
  
