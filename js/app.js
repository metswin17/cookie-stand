'use strict';

let hours = [
  '6am','7am','8am','9am','10am','11am',
  '12pm','1pm','2pm','3pm','4pm','5pm',
  '6pm','7pm'
];

function createStore(name, min, max, avg) {
  return {
    name: name,
    minCustomers: min,
    maxCustomers: max,
    avgCookies: avg,
    hourlySales: [],
    totalDailyCookies: 0,

    randomCustomers: function() {
      return Math.floor(Math.random() *
        (this.maxCustomers - this.minCustomers + 1)
        + this.minCustomers);
    },

    calculateSales: function() {
      for (let i = 0; i < hours.length; i++) {
        let customers = this.randomCustomers();
        let cookies = Math.floor(customers * this.avgCookies);
        this.hourlySales.push(cookies);
        this.totalDailyCookies += cookies;
      }
    },

    render: function() {
      let container = document.getElementById('sales-data');

      let article = document.createElement('article');
      container.appendChild(article);

      let h2 = document.createElement('h2');
      h2.textContent = this.name;
      article.appendChild(h2);

      let ul = document.createElement('ul');
      article.appendChild(ul);

      for (let i = 0; i < hours.length; i++) {
        let li = document.createElement('li');
        li.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
        ul.appendChild(li);
      }

      let totalLi = document.createElement('li');
      totalLi.textContent = `Total: ${this.totalDailyCookies} cookies`;
      ul.appendChild(totalLi);
    }
  };
}
let seattle = createStore('Seattle', 23, 65, 6.3);
let tokyo = createStore('Tokyo', 3, 24, 1.2);
let dubai = createStore('Dubai', 11, 38, 3.7);
let paris = createStore('Paris', 20, 38, 2.3);
let lima = createStore('Lima', 2, 16, 4.6);

seattle.calculateSales();
seattle.render();

tokyo.calculateSales();
tokyo.render();

dubai.calculateSales();
dubai.render();

paris.calculateSales();
paris.render();

lima.calculateSales();
lima.render();