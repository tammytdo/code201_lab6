'use strict';

//helper functions
var _random = function(min, max){
  return Math.random()*(max-min) + min;
};

// =====================================================================
// Constructor Function

var Store = function(min_cust, max_cust, avg_cookies_per_customer, store_name, store_open, store_close, cookies_sold_each_hour, avg_cookies_per_customer) {
  this.min_cust = min_cust;
  this.max_cust = max_cust;
  this.avg_cookies_per_customer = avg_cookies_per_customer;
  this.store_name = store_name;
  this.store_open = store_open;
  this.store_close = store_close;
  this.cookies_sold_each_hour = [];
  this.avg_cookies_per_customer = avg_cookies_per_customer;
};

// Calculates the average number of cookies, per customer, needed each hour
Store.prototype.cookies_per_hour = function() {
  var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};

// Calculates the average number of cookies, per customer, needed each hour
Store.prototype.calculate_cookies_per_hour = function() {
  for (var i = thid.store_opens; i < this.store_close; i++) {
    this.cookies_sold_each_hour.push(cookies_sold);
  }
};

// instantiating
var firstAndPike = new Store(23, 65, 6.3, '1st & Pike', 6, 20, []);
var seaTac = new Store(3, 24, 1.2, 'SeaTac Airport', 6, 20, []);
var seattleCenter	= new Store(11, 38, 3.7, 'Seattle Center', 6, 20, []);
var capHill	= new Store(20, 38, 2.3, 'Capitol Hill', 6, 20, []);
var alki = new Store(2, 16, 4.6, 'Alki', 6, 20, []);


// ==============================================================
// rendering the hard way

var render_all_stores_table = function() {
    this.cookies_sold_each_hour();

    var target = document.getElementById('cookie-table');

    var store_row = document.createElement('tr');


    var name_td = document.createElement('td');     // field for name of store
    name_td.textContent = firstAndPike.store_name;  // gave field storename
    store_row.appendChild(name_td);                 // append text to the store row

    for (var i = 0; i < this.cookies_sold_each_hour.length; i++) {
        var cookie_hour_td = document.createElement('td');
        cookie_hour_td.textContent = this.cookies_sold_each_hour[i];
        store_row.appendChild(cookie_hour_td);
    }

    target.appendChild(store_row);
}; 

render_all_stores_table();
