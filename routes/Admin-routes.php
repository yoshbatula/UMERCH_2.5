<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Admin-side/Dashboard-page/Dashboard');
});

Route::get('/Inventory', function () {
    return inertia('Admin-side/Inventory-page/AdminInventory');
})->name('inventory');

Route::get('/Transaction', function () {
    return inertia('Admin-side/Transaction-page/AdminTransaction');
})->name('transaction');

Route::get('/RecordLogs', function () {
    return inertia('Admin-side/RecordLogin-page/AdminRecord');
})->name('recordlogs');
