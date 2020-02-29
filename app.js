var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var user_Router=require('./routes/user_routes');
var deleteuser_Router=require('./routes/DeleteAlluser_routes');
var deletecustomer_Router=require('./routes/DeleteallCustomer_routes');
var deletestock_Router=require('./routes/DeleteallStock_routes');
var deleteemp_Router=require('./routes/DeleteallEmp_routes');
var deleteproduct_Router=require('./routes/DeleteallProduct_routes');
var deleteorder_Router=require('./routes/DeleteallOrder_routes');
var deleteorderdel_Router=require('./routes/DeleteallODel_routes');
var customer_Router=require('./routes/customer_routes');
var userEmailRouter=require('./routes/getUserEmail_routes');
var empRouter=require('./routes/emp_routes');
var productRouter=require('./routes/product_routes');
var stockRouter=require('./routes/stock_routes');
var loginroutes=require('./routes/login_routes');
var signuproutes=require('./routes/signup_routes');
var orderroutes=require('./routes/order_routes');
var orderdeliveryroutes=require('./routes/order_delivery_routes');
var billroutes=require('./routes/bill_routes');
var emailroutes=require('./routes/demomail');
var customersForBill=require('./routes/getCusomersOnBill');
var getBillDetails=require('./routes/getBillDetailsRoutes')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login',loginroutes);
app.use('/signup',signuproutes);
app.use('/user',user_Router);
app.use('/customer',customer_Router);
app.use('/userEmail',userEmailRouter);
app.use('/deleteuser',deleteuser_Router);
app.use('/deletecustomer',deletecustomer_Router);
app.use('/deletestock',deletestock_Router);
app.use('/deleteemp',deleteemp_Router);
app.use('/deleteproduct',deleteproduct_Router);
app.use('/deleteorder',deleteorder_Router);
app.use('/deleteorderdel',deleteorderdel_Router);
app.use('/emp',empRouter);
app.use('/product',productRouter);
app.use('/stock',stockRouter);
app.use('/order',orderroutes);
app.use('/orderdelivery',orderdeliveryroutes);
app.use('/bill',billroutes);
app.use('/email',emailroutes);
app.use('/customersForBill',customersForBill)
app.use('/getBillDetails',getBillDetails)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
