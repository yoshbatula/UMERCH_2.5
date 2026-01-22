<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('User-side/Landing-page/Landingpage');
});

Route::get('/Shop', function () {
    return inertia('User-side/Shop-page/Shop');
})->name('shop');

Route::get('/Cart', function () {
    return inertia('User-side/Cart-page/Carts');
})->name('cart');

Route::get('/Checkout', function () {
    return inertia('User-side/Cart-page/Checkout');
})->name('checkout');

Route::get('/Orders', function () {
    return inertia('User-side/Order-page/Orders');
})->name('orders'); 

Route::get('/ToPay', function () {
    return inertia('User-side/Order-page/To-Pay');
})->name('to-pay');

Route::get('/ToReceive', function () {
    return inertia('User-side/Order-page/To-Receive');
})->name('to-receive');

Route::get('Completed', function () {
    return inertia('User-side/Order-page/Complete');
})->name('completed');

Route::get('Cancelled', function () {
    return inertia('User-side/Order-page/Cancelled');
})->name('cancelled');

