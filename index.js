const charData = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

//pobierz dzisiejszą date oraz dzień

const actualDate = new Date();
let today = actualDate.getDay();

today = today === 0 ? 7 : today; //zamien 0 na 7 jeżeli nr dnia wynosi 0


window.onload = () => {
  var highestAmount = 0;
  var heightMultiplyFactor = 0;
  var createId = 1;

  charData.forEach((amountItem) => {
    if (amountItem.amount > highestAmount) {
      highestAmount = amountItem.amount;
    }
  });

  const chartContainer = document.querySelector(".chart"); //wybieram kontener do wstawienia wykresu
  const chartContainerHeight = chartContainer.clientHeight; //pobierz wysokość diva .chart

  //stwórz wspólczynik mnożenia tak aby najwyższy słupek wynosił 3/4 wysokości kontenera
  heightMultiplyFactor = 0.7 * (chartContainerHeight / highestAmount);

  charData.forEach((dataItem) => {
    const chartBarData = document.createElement("div");
    chartBarData.className = "chart-bar-data";

    const chartAmountDisplay = document.createElement("span")
    chartAmountDisplay.textContent = `$${dataItem.amount}`;
    chartAmountDisplay.className = "display-amount font balance-name";
    chartAmountDisplay.hidden = true;

    const chartBar = document.createElement("div");
    chartBar.id = `bar-${createId}`;
    createId++;
    chartBar.className = "chart-bar";

    const chartBarHeight = dataItem.amount * heightMultiplyFactor;

    chartBar.style.height = `${chartBarHeight}px`;

    const chartBarName = document.createElement("p");
    chartBarName.className = "balance-name font gray";
    chartBarName.textContent = dataItem.day;

    chartBarData.appendChild(chartAmountDisplay);
    chartBarData.appendChild(chartBar);
    chartBarData.appendChild(chartBarName);

    chartContainer.appendChild(chartBarData);
  });


  //zamien kolor dziejszego słupka
  const todaysBar = document.querySelector(`div#bar-${today}`);
  todaysBar.classList.add("bar-color-today");

// wyswieltaj dane liczbowe dla pojedynczego słupka
  document.querySelectorAll("div.chart-bar").forEach((chart) =>{
    chart.addEventListener("mouseover", (event)=>{
        if(event){

            document.getElementById(chart.id).previousElementSibling.hidden = false;  
        }
    })
  });

  document.querySelectorAll("div.chart-bar").forEach((chart) =>{
    chart.addEventListener("mouseout", (event)=>{
        if(event){

            document.getElementById(chart.id).previousElementSibling.hidden = true;  
        }
    })
  });
 
};


