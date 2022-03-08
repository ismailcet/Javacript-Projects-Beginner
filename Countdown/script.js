const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const giveaway=document.querySelector('.giveaway');
  const deadline=document.querySelector('.deadline');
  const items=document.querySelectorAll('.deadline-format h4');

  //Months are ZERO index based

  let tempDate=new Date();
  let tempYear=tempDate.getFullYear();
  let tempMonth=tempDate.getMonth();
  let tempDay=tempDate.getDate();

  //Let futurDay = new Date(2022,3,24,11,30,0)
  let futureDate=new Date(tempYear, tempMonth, tempDay+ 0, 15, 04, 0);

  const year=futureDate.getFullYear();
  const hours=futureDate.getHours();
  const minutes=futureDate.getMinutes();
  let month=futureDate.getMonth();
  month=months[month];
  const weekday=weekdays[futureDate.getDay()];
  const date=futureDate.getDate();
  giveaway.textContent=`Giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

  //Countdown time
  const futureTime=futureDate.getTime();

  function getRemaindingTime(){
      const today=new Date().getTime();

      const t = futureTime - today;
      let day=Math.floor(t/(1000*60*60*24));
      let hour=Math.floor((t%(1000*60*60*24))/(1000*60*60));
      let minute=Math.floor((t%(1000*60*60))/(1000*60));
      let second=Math.floor((t%(1000*60))/1000);

      const values=[day,hour,minute,second];

      function format(item){
          if(item<10){
              return(item=`0${item}`);
          }
          return item;
      }
      items.forEach(function(item,index){
        item.innerHTML=format(values[index]);
      });
      if(t<0){
          clearInterval(coutdown);
          deadline.style.display='block';
          deadline.innerHTML=`
                                <h4 class="expired">sorry, this giveaway has expired!</h4>
                                <div class='icon'>
                                <i class="fa-regular fa-face-sad-cry fa-2xl"></i>
                                </div>
          `;
      }
  }

  //Countdown
  let coutdown = setInterval(getRemaindingTime,1000);
  getRemaindingTime();