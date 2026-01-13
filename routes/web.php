<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('User-side/Landing-page/Landingpage');
});

Route::get('/Shop', function () {
    return inertia('User-side/Shop-page/Shop');
})->name('shop');
