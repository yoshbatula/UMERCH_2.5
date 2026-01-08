<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Login');
});

Route::get('/Shop', function () {
    return inertia('User-side/Shop-page/Shop');
})->name('shop');
