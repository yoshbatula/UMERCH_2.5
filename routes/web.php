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