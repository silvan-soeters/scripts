  let hr = document.getElementById('hour');
  let min = document.getElementById('min');
  let sec = document.getElementById('sec');

  function displayTime(){
    let date = new Date();

    // Getting hour, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

  }

  setInterval(displayTime, 1000);

---

<style>
.clock{
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: var(--background-color--background-primary);
    border: 2px solid var(--border-color--border-primary);
    display: flex;
    justify-content: center;
    align-items: center;
}

.clock span{
    position: absolute;
    transform: rotate(calc(30deg * var(--i))); 
    inset: 12px;
    text-align: center;
}

.clock span b{
    transform: rotate(calc(-30deg * var(--i)));
    display: inline-block;
    font-size: 20px;
}

.clock::before{
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: var(--background-color--background-alternate);
    z-index: 2;
}

.hand{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.hand i{
    position: absolute;
    background-color: var(--background-color--background-alternate);
    width: 1.5px;
    height: var(--h);
    border-radius: 8px;
}
</style>

<div class="clock">
  <div style="--clr: var(--background-color--background-primary); --h: 0.35rem" id="hour" class="hand">
    <i></i>
  </div>
  <div style="--clr: var(--background-color--background-primary); --h: 0.55rem" id="min" class="hand">
    <i></i>
  </div>
  <div style="--clr: var(--background-color--background-primary); --h: 0.6rem" id="sec" class="hand">
    <i></i>
  </div>
</div>
