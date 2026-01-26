<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->integer('product_id')->unique();
            $table->string('product_name')->unique();
            $table->string('product_description')->unique();
            $table->string('product_image')->unique();
            $table->string('product_type')->unique();
            $table->decimal('product_price', 8, 2);
            $table->integer('product_stock');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
