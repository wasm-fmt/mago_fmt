<?php

expect($response->dto())->toBeInstanceOf(QuoteData::class)->aircraft_type->toBe($aircraftType)->status->toBe($status)
    ->customer_id->toBe($customerId)->account_id->toBe($accountId)->salesperson_id->toBe($salespersonId)->price
    ->toBe($price)->currency->toBe('EUR')->id->toBe($id);