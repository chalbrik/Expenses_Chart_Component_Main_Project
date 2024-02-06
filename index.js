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
if (today === 0) {
  today = 7;
}

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
  heightMultiplyFactor = 0.75 * (chartContainerHeight / highestAmount);

  charData.forEach((dataItem) => {
    const chartBarData = document.createElement("div");
    chartBarData.className = "chart-bar-data";

    const chartBar = document.createElement("div");
    chartBar.id = `bar-${createId}`;
    createId++;
    chartBar.className = "chart-bar";

    const chartBarHeight = dataItem.amount * heightMultiplyFactor;

    chartBar.style.height = `${chartBarHeight}px`;

    const chartBarName = document.createElement("p");
    chartBarName.className = "balance-name font gray";
    chartBarName.textContent = dataItem.day;

    chartBarData.appendChild(chartBar);
    chartBarData.appendChild(chartBarName);

    chartContainer.appendChild(chartBarData);
  });


  //zamien kolor dziejszego słupka
  const prob = document.querySelector(`div#bar-${today}`);
  console.log(prob);
};
