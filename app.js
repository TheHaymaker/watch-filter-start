var MY_WATCH = {
  price: "",
  color: "",
  strap: "",
  result: {}
};

var watchList = [
  {
    priceValue: 1,
    color: "white",
    strap: "leather",
    price: 84
  },
  {
    priceValue: 2,
    color: "white",
    strap: "leather",
    price: 184
  },
  {
    priceValue: 3,
    color: "white",
    strap: "leather",
    price: 284
  },
  {
    priceValue: 4,
    color: "white",
    strap: "leather",
    price: 384
  },
  {
    priceValue: 1,
    color: "black",
    strap: "leather",
    price: 84
  },
  {
    priceValue: 2,
    color: "black",
    strap: "leather",
    price: 184
  },
  {
    priceValue: 3,
    color: "black",
    strap: "leather",
    price: 284
  },
  {
    priceValue: 4,
    color: "black",
    strap: "leather",
    price: 384
  },
  {
    priceValue: 1,
    color: "white",
    strap: "nylon",
    price: 84
  },
  {
    priceValue: 2,
    color: "white",
    strap: "nylon",
    price: 184
  },
  {
    priceValue: 3,
    color: "white",
    strap: "nylon",
    price: 284
  },
  {
    priceValue: 4,
    color: "white",
    strap: "nylon",
    price: 384
  },
  {
    priceValue: 1,
    color: "black",
    strap: "nylon",
    price: 84
  },
  {
    priceValue: 2,
    color: "black",
    strap: "nylon",
    price: 184
  },
  {
    priceValue: 3,
    color: "black",
    strap: "nylon",
    price: 284
  },
  {
    priceValue: 4,
    color: "black",
    strap: "nylon",
    price: 384
  },
  {
    priceValue: 1,
    color: "blue",
    strap: "leather",
    price: 84
  },
  {
    priceValue: 2,
    color: "yellow",
    strap: "leather",
    price: 184
  },
  {
    priceValue: 3,
    color: "green",
    strap: "leather",
    price: 284
  },
  {
    priceValue: 4,
    color: "purple",
    strap: "leather",
    price: 384
  }
];

var prices = document.querySelectorAll(".input-price");
var colorNodes = document.querySelectorAll(".input-color");

for (let i = 0; i < prices.length; i++) {
  var num = i;
  (function() {
    prices[num].addEventListener("change", function(e) {
      MY_WATCH.price = e.target.value;
      // filter watchlist
      var filteredWatches = filterWatches("priceValue");
      console.log(filteredWatches);
      var colors = findUniqValues(filteredWatches, "color");
      console.log(colors);

      for (let j = 0; j < colorNodes.length; j++) {
        const element = colorNodes[j];
        element.disabled = true;
        for (let k = 0; k < colors.length; k++) {
          const color = colors[k];
          if (element.value === color) {
            element.disabled = false;
          }
        }
      }
    });
  })();
}

function filterWatches(val) {
  var arr = watchList;
  var filteredList = [];
  for (let i = 0; i < arr.length; i++) {
    var watch = arr[i];
    if (watch[val] == MY_WATCH.price) {
      filteredList.push(arr[i]);
    }
  }
  return filteredList;
}

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

function findUniqValues(arr, val) {
  var filteredResults = [];
  for (let i = 0; i < arr.length; i++) {
    const prop = arr[i][val];
    if (!isInArray(prop, filteredResults)) {
      filteredResults.push(prop);
    }
  }
  return filteredResults;
}
