'use strict';

const hours = [
  '6am','7am','8am','9am','10am','11am',
  '12pm','1pm','2pm','3pm','4pm','5pm',
  '6pm','7pm'
];

const stores = [];
const table = document.getElementById('sales-table');

function Store(name, min, max, avg, address, phone) {
  this.name = name;
  this.minCustomers = min;
  this.maxCustomers = max;
  this.avgCookies = avg;
  this.address = address;
  this.phone = phone;
  this.hoursOpen = '6am - 7pm';
  this.hourlySales = [];
  this.totalDailyCookies = 0;

  stores.push(this);
}

Store.prototype.randomCustomers = function() {
  return Math.floor(Math.random() *
    (this.maxCustomers - this.minCustomers + 1)
    + this.minCustomers);
};

Store.prototype.calculateSales = function() {
  this.hourlySales = [];
  this.totalDailyCookies = 0;

  for (let i = 0; i < hours.length; i++) {
    const customers = this.randomCustomers();
    const cookies = Math.floor(customers * this.avgCookies);
    this.hourlySales.push(cookies);
    this.totalDailyCookies += cookies;
  }
};

Store.prototype.renderRow = function() {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = this.name;
  row.appendChild(nameCell);

  for (let i = 0; i < hours.length; i++) {
    const cell = document.createElement('td');
    cell.textContent = this.hourlySales[i];
    row.appendChild(cell);
  }

  const totalCell = document.createElement('td');
  totalCell.textContent = this.totalDailyCookies;
  row.appendChild(totalCell);

  table.appendChild(row);
};

function renderHeader() {
  const headerRow = document.createElement('tr');

  const empty = document.createElement('th');
  empty.textContent = 'Location';
  headerRow.appendChild(empty);

  for (let hour of hours) {
    const th = document.createElement('th');
    th.textContent = hour;
    headerRow.appendChild(th);
  }

  const totalHeader = document.createElement('th');
  totalHeader.textContent = 'Daily Total';
  headerRow.appendChild(totalHeader);

  table.appendChild(headerRow);
}

function renderFooter() {
  const footerRow = document.createElement('tr');

  const footerTitle = document.createElement('th');
  footerTitle.textContent = 'Hourly Totals';
  footerRow.appendChild(footerTitle);

  let grandTotal = 0;

  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;

    for (let store of stores) {
      hourlyTotal += store.hourlySales[i];
    }

    grandTotal += hourlyTotal;

    const th = document.createElement('th');
    th.textContent = hourlyTotal;
    footerRow.appendChild(th);
  }

  const grandTotalCell = document.createElement('th');
  grandTotalCell.textContent = grandTotal;
  footerRow.appendChild(grandTotalCell);

  table.appendChild(footerRow);
}

function renderTable() {
  table.innerHTML = '';
  renderHeader();

  for (let store of stores) {
    store.calculateSales();
    store.renderRow();
  }

  renderFooter();
}

/* Initial Stores */
new Store(
  'Seattle',
  23, 65, 6.3,
  '2901 3rd Ave #300, Seattle, WA',
  '(206) 555-1234'
);

new Store(
  'Tokyo',
  3, 24, 1.2,
  '1-2-3 Shibuya, Tokyo, Japan',
  '+81 3-5555-1234'
);

new Store(
  'Dubai',
  11, 38, 3.7,
  'Sheikh Zayed Rd, Dubai, UAE',
  '+971 4-555-1234'
);

new Store(
  'Paris',
  20, 38, 2.3,
  '10 Rue de Rivoli, Paris, France',
  '+33 1 23 45 67 89'
);

new Store(
  'Lima',
  2, 16, 4.6,
  'Av. Larco 123, Lima, Peru',
  '+51 1 555 1234'
);
if (table) {
  renderTable();
}

new Store(
  'London',
  6, 22, 5.7,
  'Av. 9667 Downtown, London, UK',
  '+44 20 7123 4567'
);
if (table) {
  renderTable();
}

/* Form Handler */

const form = document.getElementById('store-form');

if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = event.target.name.value.trim();
    const min = parseInt(event.target.min.value);
    const max = parseInt(event.target.max.value);
    const avg = parseFloat(event.target.avg.value);

    if (min > max || min < 0 || max < 0 || avg < 0) {
      alert("Please enter valid numbers. Min must be less than Max.");
      return;
    }

    new Store(name, min, max, avg);

    if (table) {
      renderTable();
    }

    form.reset();
  });
}

function renderLocations() {
  const container = document.getElementById('locations-container');

  if (!container) return; // prevents errors on sales page

  container.innerHTML = '';

  for (let store of stores) {
    const article = document.createElement('article');

    const title = document.createElement('h2');
    title.textContent = store.name;
    article.appendChild(title);

    const address = document.createElement('p');
    address.textContent = `Address: ${store.address}`;
    article.appendChild(address);

    const hours = document.createElement('p');
    hours.textContent = `Hours Open: ${store.hoursOpen}`;
    article.appendChild(hours);

    const phone = document.createElement('p');
    phone.textContent = `Contact: ${store.phone}`;
    article.appendChild(phone);

    container.appendChild(article);
  }
}
renderLocations();

