'use strict';

let hours = [
  '6am','7am','8am','9am','10am','11am',
  '12pm','1pm','2pm','3pm','4pm','5pm',
  '6pm','7pm'
];
let seattle = {
  name: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
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

    let tokyo = {
      name: 'Tokyo',
      minCustomers: 3,
      maxCustomers: 24,
      avgCookies: 102,
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

        
        let dubai = {
          name: 'Dubai',
          minCustomers:11,
          maxCustomers: 38,
          avgCookies: 3.7,
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

            let paris = {
              name: 'Paris',
              minCustomers:20,
              maxCustomers: 38,
              avgCookies: 2.3,
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

                let lima = {
                  name: 'Lima',
                  minCustomers:2,
                  maxCustomers: 16,
                  avgCookies: 4.6,
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