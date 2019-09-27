'use strict';

// Generate a random number
var _random = function(min, max) {
  return Math.floor(Math._random() * (max - min) + min);
};

// Store constructor
var Store = function(store_name, min_cust, max_cust, store_open, store_close, avg_cookies_per_customer) {
  this.store_name = store_name;
  this.min_cust = min_cust;
  this.max_cust = max_cust;
  this.store_open = store_open;
  this.store_close = store_close;
  this.avg_cookies_per_customer = avg_cookies_per_customer || 6.3;
  this.cookies_sold_each_hour = [];
  this.total_cookies = [];
};

// Avg number of cookies per customer, needed each hour
Store.prototype.calculate_cookies_per_hour = function() {
  var random_num_customers = _random(this.min_cust, this.max_cust);

  return Math.floor(this.avg_cookies_per_customer * random_num_customers);
};

// Cookies sold each hour
Store.prototype.calculate_cookies_sold_each_hour = function() {
  for (var i = this.store_open; i < this.store_close; i++) {
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
  }
};

// Cookies sold each hour
Store.prototype.calculate_total_cookies = function() {
  var cookieSum = 0;
  for (var i = 0; i < this.cookies_sold_each_hour.length; i++) {
    cookieSum += this.cookies_sold_each_hour[i];
  }
  this.total_cookies.push(cookieSum);
};

// Render store
Store.prototype.render = function() {
  this.calculate_cookies_sold_each_hour();
  this.calculate_total_cookies();

  // Build a row of store info
  var target = document.getElementById('store-container');
  var tr_el = document.createElement('tr');
  var td_el = document.createElement('td');

  td_el.textContent = this.store_name;
  tr_el.appendChild(td_el);

  td_el = document.createElement('td');
  td_el.textContent = this.min_cust;
  tr_el.appendChild(td_el);

  td_el = document.createElement('td');
  td_el.textContent = this.max_cust;
  tr_el.appendChild(td_el);

  td_el = document.createElement('td');
  td_el.textContent = this.store_open;
  tr_el.appendChild(td_el);

  td_el = document.createElement('td');
  td_el.textContent = this.store_close;
  tr_el.appendChild(td_el);

  // Append cookies each hour data
  td_el = document.createElement('td');
  td_el.textContent = this.total_cookies + ' cookies';
  tr_el.appendChild(td_el);

  // Add row to the target element
  target.appendChild(tr_el);
};

// Add all store data to one table
var addDataToArray = function() {
  var firstAndPike = new Store('1st & Pike', 23, 65, 6, 20, 6.3);
  var seaTac = new Store('SeaTac Airport', 3, 24, 6, 20, 1.2);
  var seattleCenter	= new Store('Seattle Center', 11, 38, 6, 20, 3.7);
  var capHill	= new Store('Capitol Hill', 20, 38, 6, 20, 2.3);
  var alki = new Store('Alki', 2, 16, 6, 20, 4.6);

  // All store locations
  var all_locations = [firstAndPike, seaTac, seattleCenter, capHill, alki];

  for(var i = 0; i < all_locations.length; i++){
    all_locations[i].render();
  }
};

var main = function() {
  addDataToArray();
};

main();

